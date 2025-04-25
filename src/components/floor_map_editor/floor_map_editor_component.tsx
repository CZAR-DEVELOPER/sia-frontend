import React, { useState } from "react";

interface Point {
  id: number;
  x: number;
  y: number;
  label: string;
  url: string;
  type?: "text" | "uma";
  color: string;
}

interface FloorMapEditorComponentProps {
  imageUrl: string;
  currentPointsList?: Point[];
  onPointClick: (point: Point) => void;
}

const FloorMapEditorComponent: React.FC<FloorMapEditorComponentProps> = ({
  imageUrl,
  currentPointsList,
  onPointClick,
}) => {
  const [pointsList, setPointsList] = useState<Point[]>([]);
  const [undoStack, setUndoStack] = useState<Point[][]>([]);
  const [redoStack, setRedoStack] = useState<Point[][]>([]);
  const [startingNumber, setStartingNumber] = useState<number>(1);
  const [arePointsVisible, setArePointsVisible] = useState(true);

  // Initialize pointsList with currentPointsList if provided
  React.useEffect(() => {
    if (currentPointsList) {
      setPointsList(currentPointsList);
    }
  }, [currentPointsList]);

  const handleAddPoint = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    const newPoint: Point = {
      id: pointsList.length + 1,
      x,
      y,
      label: `${startingNumber + pointsList.length}`,
      url: "",
      type: "text",
      color: "black",
    };

    setUndoStack([...undoStack, pointsList]);
    setRedoStack([]);
    setPointsList([...pointsList, newPoint]);
  };

  const handleUndo = () => {
    if (undoStack.length > 0) {
      const previousState = undoStack[undoStack.length - 1];
      setUndoStack(undoStack.slice(0, -1));
      setRedoStack([pointsList, ...redoStack]);
      setPointsList(previousState);
    }
  };

  const handleRedo = () => {
    if (redoStack.length > 0) {
      const nextState = redoStack[0];
      setRedoStack(redoStack.slice(1));
      setUndoStack([...undoStack, pointsList]);
      setPointsList(nextState);
    }
  };

  const handleCopyJSON = () => {
    const json = JSON.stringify(pointsList, null, 2);
    navigator.clipboard.writeText(json).then(() => {
      alert("JSON copied to clipboard!");
    });
  };

  const handleDeletePoint = (id: number) => {
    setUndoStack([...undoStack, pointsList]);
    setRedoStack([]);
    setPointsList(pointsList.filter((point) => point.id !== id));
  };

  const handleVisiblePoints = () => {
    setArePointsVisible(!arePointsVisible);
  }

  return (


    <div >
      <div
        className="relative  h-full overflow-hidden"
        onClick={handleAddPoint}
      >
        <img
          src={imageUrl}
          alt="Background"
          className="w-full h-full object-fill"
        />



        {pointsList.map((point) =>

           

            <div
            key={point.id}
            className={` absolute text-white text-sm md:text-base font-bold cursor-pointer shadow-lg ${point.type === 'uma' ? 'w-14 h-14' : 'w-10 h-10'} rounded-full p-2 backdrop-filter backdrop-blur-sm flex items-center justify-center`}
            style={{
              top: `${point.y}%`,
              left: `${point.x}%`,
              transform: "translate(-50%, -50%)",
              backgroundColor: point.color ,
              opacity: arePointsVisible ? 0.75 : 0,
            }}
            onClick={(e) => {
              e.stopPropagation(); // Prevent triggering the parent click handler
              onPointClick(point);
            }}
            >
            {point.type === "uma" ? (
              

              <svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 792 612" fill="currentColor" >

          <g id="bGMAeJ">
          <g>
          <path d="M680.54,295.46c-1.69.46-.27,5.98-.38,8.15-2.76,57.23-22.18,109.23-61.36,152.98-79.6,88.89-208.17,111.08-314.29,49.37l-52.59,21.49-.18,49.69c-.9,3.05-3.63,5.05-6.64,6.09-55.7.99-111.73.63-167.48.18-5.31-1.43-7.63-3.17-8.17-8.51,2.13-38.17-2.71-78.87.05-116.74s30.58-67.5,66.62-79.22l49.88-47.18c.84-1.74-1.82-15.55-2.05-18.92-9.61-135.02,84.84-253.19,230.11-264.71l315.56-.04c4.29-.14,7.91,3.26,7.77,7.34v232.72c.91,2.27-3.54,7.31-5.35,7.31h-51.5ZM709.55,75.95l-288.18-.03c-123.11,3.75-218.5,113.16-209.64,227.67.09,1.15-.63,2.24,1.22,1.91,36.67-36.18,76.74-69.27,111.57-107.06,66.84-68.37,187.23-58.49,240.37,20.1,44.45,65.75,26.16,155.22-41.78,199.36-21.62,14.04-47.65,20.94-71.83,30.24-37.64,14.47-75.07,29.47-112.83,43.65l12.28,5.76c136.24,54.54,281.74-39.28,299.06-173.2,2.15-16.6,1.61-33.28,1.91-49.98.01-1.98,5.46-5.96,6.78-5.96h51.09V75.95ZM426.55,181.3c-100.59,6.98-149.42,122.23-82.82,193.78,64.25,69.03,184.32,44.53,210.91-44.07,23.88-79.56-40.58-155.79-128.1-149.71ZM396.47,437.69c-74.74-17.89-125.27-91.77-110.36-163.87l-69.1,65.73c9.08,53.62,43.88,103.65,90.62,134.66l88.83-36.52ZM200.28,384.34l-7.76-22.41c-3.88,4.76-11.72,9.6-15.14,14.29-.48.65-1.14.76-.8,1.94,8.29.46,15.95,3.78,23.7,6.18ZM152.69,401.57c-40.58,4.32-65.91,46.2-54,82.32,16.85,51.11,91.58,59.42,120,12.55,27.66-45.62-11.06-100.72-66-94.87ZM276.31,487.91l-.8-1.94-22.08-19.69c.41,11.74-4.13,22.88-7.36,34.01l30.24-12.37ZM225.63,534.29c-13.23,3.56-24.94,11.09-38.24,14.47-31.34,7.96-64.71.67-88.48-20.24-1.38-1.22-1.89-2.8-3.25-3.5v33.24h129.97v-23.96Z"/>
          <path d="M427.37,203.72c72.13-5.4,124.71,55.97,105.01,121.71-23.19,77.37-131.77,92.06-179.09,25.93-42.55-59.47-1.86-141.95,74.07-147.64ZM436.53,267.64c2.26.04,4.08,1.76,5.08-.99l14.24-41.16c-.44-3.41-16.2-5.39-19.32-6.54v48.69ZM408.72,284.64c2.11-4.53,3.49-3.9,0-8.09-7-8.41-17.41-19.27-25.29-27.09-1.48-1.47-4.43-5.18-6.57-3.87-1.84,1.12-10.78,13.06-9.42,15.09l41.3,23.97ZM465.18,286.92l48.2-9.62c.65-.35.78-.83.8-1.5.05-2.1-5.35-15.6-6.96-17.43-.78-.89-.75-.94-1.74-.15-4.48,3.58-41.59,22.16-41.77,24.48-.02.22,1.3,4.08,1.48,4.23ZM435.54,286.36c-18.77,1.76-13.08,28.63,5.3,22.84,14.36-4.52,9.15-24.2-5.3-22.84ZM409.5,315.5c.22-2.13-.89-4.89-3.5-4.55-13.72,3.76-30.66,3.94-44.04,7.91-1.26.37-3.06.75-2.96,2.34.11,1.73,5.28,14.73,6.51,16.29.53.68.82,1.38,1.92,1.29l42.07-23.28ZM464.79,312.48c-1.32,1.44-3.59,3.45-2.55,5.37,9.81,9.07,17.64,19.99,27,29.4,1.15,1.16,4.47,5.09,6.14,4.29,1.47-.71,10.89-13.4,10.28-14.36l-40.87-24.7ZM437.35,327.92l-4.01.08-15.51,42.74c.37,1.53,15.41,5.42,17.45,5.14.7-.1,2.06-.68,2.06-1.2v-46.76Z"/>
          <path d="M153.51,413.93c59.27-6.72,84.33,67.43,35.06,94.21-42.23,22.95-90.67-13.52-77.97-57.49,5.19-17.95,22.94-34.45,42.91-36.72ZM165.04,427.72c-2.2.23-8.21-1.11-9.15.85-.61,1.25.07,11.89.35,14.04.18,1.39.66,4.57,2.05,5.02.8.26,5.59.29,5.94.01.9-.72,1.75-19.15.81-19.92ZM198.64,449.27c-3.11.74-20.72,6.03-21.06,8.09-.05.31,2.08,5.59,2.34,5.77,1.21.82,16.88-4.99,19.55-5.73,2.32-1.77-1.15-5.82-.83-8.13ZM145.46,457.85c-.63-.81-18.64-7.28-19.87-7.09-1.04,1.27-3.12,6.15-2.83,7.34.59,2.37,19.63,7.52,21.21,5.4.43-.57,1.85-5.17,1.48-5.65ZM160.84,460.21c-4.84.83-5.36,8.5-.84,9.76,9.97,2.78,9.22-11.21.84-9.76ZM145.37,497.06c.93-.51,8.36-14.16,8.3-15.76-.05-1.27-4.47-4.07-5.3-4.01-1.3.08-11.78,14.24-11.65,15.67.12,1.24,6.75,5.15,8.65,4.1ZM170.97,479.53c-.52.83.15,1.94.53,2.76.54,1.18,8.39,12.45,9.13,13.03,3.22,2.57,7.95-2.89,7.29-5.31-.24-.88-11.63-12.68-12.55-12.74-.25-.02-4.27,2.05-4.39,2.26Z"/>
        </g>
        </g>
      </svg>


            ) : (
              <span>{point.label}</span>
            )}
            </div>
        )}
      </div>

      <div className="mt-4 flex justify-between">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={handleUndo}
          disabled={undoStack.length === 0}
        >
          Undo
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={handleRedo}
          disabled={redoStack.length === 0}
        >
          Redo
        </button>
        <button
          className="px-4 py-2 bg-black text-white rounded "
          onClick={handleVisiblePoints}
        >
          {arePointsVisible ? "Hide Points" : "Show Points"}
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={handleCopyJSON}
        >
          Copy JSON
        </button>

      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">
          Starting Number:
        </label>
        <input
          type="number"
          value={startingNumber}
          onChange={(e) => {
        const value = e.target.value;
        setStartingNumber(value === "" ? 0 : Number(value));
          }}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>

    <div className="w-100">
      {/* SECCION DE EDICION DE PUNTOS */}
      <div className="mt-4 mb-4 "></div>
      <h3 className="text-lg font-medium text-gray-900">Edit Points</h3>
      <div className="grid grid-cols-1 gap-4">
      {pointsList.map((point, index) => (
        <div
          key={point.id}
          className="space-y-4 border-1 w-full rounded p-2"
        >
          <p className="flex justify-between items-center mb-4">
        Point ID: {point.id}
        <button
          className="text-red-500 cursor-pointer text-sm"
          onClick={() => handleDeletePoint(point.id)}
        >
          Borrar
        </button>
          </p>

          <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="text-sm font-medium text-gray-700">X Coordinate:</label>
          <input
            type="number"
            value={point.x}
            onChange={(e) => {
          const updatedPoints = [...pointsList];
          updatedPoints[index] = { ...point, x: parseFloat(e.target.value) };
          setPointsList(updatedPoints);
            }}
            className="w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="X Coordinate"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">Y Coordinate:</label>
          <input
            type="number"
            value={point.y}
            onChange={(e) => {
          const updatedPoints = [...pointsList];
          updatedPoints[index] = { ...point, y: parseFloat(e.target.value) };
          setPointsList(updatedPoints);
            }}
            className="w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Y Coordinate"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">Type:</label>
          <select
            value={point.type || "text"}
            onChange={(e) => {
          const updatedPoints = [...pointsList];
          updatedPoints[index] = { ...point, type: e.target.value as "text" | "uma" };
          setPointsList(updatedPoints);
            }}
            className="w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="text">Text</option>
            <option value="uma">UMA</option>
          </select>
        </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-gray-700">🔗 URL:</label>
          <input
            type="text"
            value={point.url}
            onChange={(e) => {
          const updatedPoints = [...pointsList];
          updatedPoints[index] = { ...point, url: e.target.value };
          setPointsList(updatedPoints);
            }}
            className="w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="URL"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Color:</label>
          <input
            type="color"
            value={point.color}
            onChange={(e) => {
          const updatedPoints = [...pointsList];
          updatedPoints[index] = { ...point, color: e.target.value };
          setPointsList(updatedPoints);
            }}
            className="w-10 h-10 border border-gray-300 rounded-md shadow-sm"
          />
        </div>
          </div>

          {point.type === "text" && (
        <div>
          <label className="text-sm font-medium text-gray-700">Label:</label>
          <input
            type="text"
            value={point.label}
            onChange={(e) => {
          const updatedPoints = [...pointsList];
          updatedPoints[index] = { ...point, label: e.target.value };
          setPointsList(updatedPoints);
            }}
            className="w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Label"
          />
        </div>
          )}
        </div>
      ))}
    </div>

      </div>
      
    </div>
  );
};

export default FloorMapEditorComponent;
