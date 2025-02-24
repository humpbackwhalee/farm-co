// Scroll animation
function BeginnersGuide() {
    return (
      <section className="relative my-2 py-2 sm:my-4 sm:py-4">

        <div className={`h-[50vh]`}></div>

        <h2 className=" sticky h-[50vh] top-0 text-3xl font-bold text-center font-serif">Your Gardening Journey Starts Here</h2>

        <p className="sticky h-[50vh] top-10 text-lg text-gray-700 text-center">
          Plan your perfect garden with our easy-to-use Plot Calculator.
        </p>

        <div className={`sticky h-screen top-16 left-0 right-0 grid grid-cols-10 grid-rows-8 gap-2 p-4`}>
          <div className='bg-red-400 col-start-1 col-end-2 row-start-1 row-end-3 rounded'>info 1</div>
        </div>

        <div className={`sticky h-screen top-16 left-0 right-0 grid grid-cols-10 grid-rows-8 gap-2 p-4`}>
          <div className='bg-red-400 col-start-2 col-end-4 row-start-1 row-end-3 rounded'>
            <img src={step1Image} alt="Step1" className='w-full h-full object-contain' />
          </div>
        </div>

        <div className={`sticky h-screen top-16 left-0 right-0 grid grid-cols-10 grid-rows-8 gap-2 p-4`}>
          <div className='bg-red-400 col-start-1 col-end-2 row-start-3 row-end-8 rounded'>info 2</div>
        </div>

        <div className={`sticky h-screen top-16 left-0 right-0 grid grid-cols-10 grid-rows-8 gap-2 p-4`}>
          <div className='bg-red-400 col-start-2 col-end-4 row-start-3 row-end-8 rounded'>
            <img src={step2Image} alt="Step2" className='w-full h-full object-contain' />
          </div>
        </div>

        <div className={`sticky h-screen top-16 left-0 right-0 grid grid-cols-10 grid-rows-8 gap-2 p-4`}>
          <div className='bg-red-400 col-start-10 col-end-11 row-start-1 row-end-8 rounded'>info 3</div>
        </div>

        <div className={`sticky h-screen top-16 left-0 right-0 grid grid-cols-10 grid-rows-8 gap-2 p-4`}>
          <div className='bg-red-400 col-start-4 col-end-10 row-start-1 row-end-8 rounded'>
            <img src={step3Image} alt="Step3" className='w-full h-full object-contain' />
          </div>
        </div>

        <div className='h-[120vh]'></div>
      </section >
    );
  };

// Time out animation
const AnimatedSteps = () => {
  const [activeStep, setActiveStep] = useState(0);
  const totalSteps = 8;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev < totalSteps - 1 ? prev + 1 : prev));
    }, 2000); // Change step every 2 seconds

    return () => clearInterval(timer);
  }, []);

  const getStepStyle = (stepNumber) => {
    const isActive = activeStep >= stepNumber;
    return `transition-all duration-1000 ease-in-out ${
      isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
    }`;
  };

  return (
    <section className="my-2 py-2 sm:my-4 sm:py-4">
      <div className="h-screen relative grid grid-cols-5 grid-rows-3 gap-2 p-4">
        {/* Step 1 */}
        <div className={`sticky top-0 left-0 right-0 col-start-1 col-end-6 row-start-1 row-end-2 rounded ${getStepStyle(0)}`}>
          <h2 className="text-3xl font-bold text-center font-serif">
            Step 1
          </h2>
        </div>

        {/* Step 2 */}
        <div className={`sticky top-[10vh] left-0 right-0 col-start-1 col-end-6 row-start-2 row-end-3 rounded ${getStepStyle(1)}`}>
          <p className="text-lg mb-8 text-gray-700 text-center">
            Step 2
          </p>
        </div>

        {/* Step 3 */}
        <div className={`sticky top-[20vh] left-0 right-0 col-start-1 col-end-2 row-start-3 row-end-3 rounded ${getStepStyle(2)}`}>
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
            <p>Step 3</p>
          </div>
        </div>

        {/* Step 4 */}
        <div className={`sticky top-[30vh] left-0 right-0 col-start-2 col-end-3 row-start-3 row-end-4 rounded ${getStepStyle(3)}`}>
          <p>Step 4</p>
        </div>

        {/* Step 5 */}
        <div className={`sticky top-[40vh] col-start-1 col-end-2 row-start-4 row-end-5 bg-purple-200 p-4 rounded ${getStepStyle(4)}`}>
          <p>Step 5</p>
        </div>

        {/* Step 6 */}
        <div className={`sticky top-[50vh] col-start-2 col-end-3 row-start-4 row-end-5 bg-yellow-200 p-4 rounded ${getStepStyle(5)}`}>
          <p>Step 6</p>
        </div>

        {/* Step 7 */}
        <div className={`sticky top-[70vh] col-start-5 col-end-6 row-start-3 row-end-5 bg-pink-200 p-4 rounded ${getStepStyle(6)}`}>
          <p>Step 7</p>
        </div>

        {/* Step 8 */}
        <div className={`sticky top-[60vh] col-start-3 col-end-5 row-start-3 row-end-5 bg-purple-200 p-4 rounded ${getStepStyle(7)}`}>
          <p>Step 8</p>
        </div>
      </div>
    </section>
  );
};

// temp design page

import React, { useState, useEffect, useRef, useMemo } from "react";

import { CgArrowsShrinkH, CgArrowsExpandDownRight } from "react-icons/cg";
import { AiOutlineBorder } from "react-icons/ai";
import { FaCircle, FaRegDotCircle } from "react-icons/fa";
import { CgMenuGridO } from "react-icons/cg";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";
import { useTranslation } from '../components/LanguageContext';

// ToggleButton Component
const ToggleButton = ({ isOn, onToggle, label }) => {
  return (
    <div className="flex flex-row justify-end items-center gap-2 absolute top-0 left-10">
      <button
        onClick={onToggle}
        className="py-1 px-2 rounded-lg text-gray-700 z-20"
        aria-label={isOn ? `Hide ${label}` : `Show ${label}`}
      >
        <div>
          {isOn ? (
            <BsToggleOn className="text-3xl text-green-600" />
          ) : (
            <BsToggleOff className="text-3xl text-gray-400" />
          )}
        </div>
      </button>
      <div className="">
        {isOn ? "Show " : "Hide "} {label}
      </div>

    </div>
  );
};

function TheDesignPage() {
  // Add state for toggle
  const [showDimensions, setShowDimensions] = useState(true);


  return (
    <div className="relative">
      <PlotCalculator
        showDimensions={showDimensions}
        setShowDimensions={setShowDimensions}
      />
    </div>
  );
}

// Calculate plant positions based on selected pattern and grid dimensions
const calculatePlantPositions = (plotWidth, plotHeight, plantDiameter, spacing, pattern, gridWidth, gridHeight) => {
  switch (pattern) {
    case 'triangle':
      return calculateTriangularPattern(plotWidth, plotHeight, plantDiameter, spacing, gridWidth, gridHeight);
    case 'rectangle':
      return calculateRectangularPattern(plotWidth, plotHeight, plantDiameter, spacing, gridWidth, gridHeight);
    default:
      return calculateSquarePattern(plotWidth, plotHeight, plantDiameter, spacing);
  }
};


// Calculate positions for square grid pattern (equal spacing in both directions)
const calculateSquarePattern = (plotWidth, plotHeight, plantDiameter, spacing) => {
  spacing = spacing / 2; // space are shared with each other
  // Calculate number of plants that can fit in each direction
  const numCols = Math.floor((plotWidth) / (plantDiameter + spacing)) || 0;
  const numRows = Math.floor((plotHeight) / (plantDiameter + spacing)) || 0;

  // Calculate starting positions to center the grid
  const startX = (plotWidth - (numCols * (plantDiameter + spacing) - spacing)) / 2;
  const startY = (plotHeight - (numRows * (plantDiameter + spacing) - spacing)) / 2;

  const positions = [];
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      positions.push({
        x: startX + col * (plantDiameter + (spacing)),
        y: startY + row * (plantDiameter + (spacing))
      });
    }
  }

  return positions;
};

const calculateTriangularPattern = (plotWidth, plotHeight, plantDiameter, spacing, gridWidth, gridHeight) => {
  // Adjust spacing for shared space between plants
  const adjustedSpacing = spacing / 2;

  // Base spacing between plant centers
  const baseSpacing = plantDiameter + adjustedSpacing;

  // Horizontal spacing adjusted by grid width multiplier
  const horizontalSpacing = baseSpacing * gridWidth;

  // Vertical spacing uses the 60-degree triangular relationship
  // At 60 degrees, the vertical distance is √3/2 times the horizontal distance
  const verticalSpacing = (Math.sqrt(3) / 2) * baseSpacing * gridHeight;

  // Calculate number of plants that can fit
  const numCols = Math.floor(plotWidth / horizontalSpacing);
  const numRows = Math.floor(plotHeight / verticalSpacing);

  // Center the pattern in the plot
  const startX = (plotWidth - (numCols * horizontalSpacing)) / 2;
  const startY = plotHeight === 1 ? 0 : (plotHeight - (numRows * verticalSpacing)) / 2;
  console.log(numRows * verticalSpacing);
  console.log(startX, startY);

  const positions = [];
  for (let row = 0; row < numRows; row++) {
    const isOddRow = row % 2 === 1;
    const rowOffset = isOddRow ? horizontalSpacing / 2 : 0;

    // Calculate plants for this row
    const effectiveNumCols = isOddRow
      ? Math.floor((plotWidth - rowOffset) / horizontalSpacing)
      : numCols;

    for (let col = 0; col < effectiveNumCols; col++) {
      const x = startX + rowOffset + (col * horizontalSpacing);
      const y = startY + (row * verticalSpacing);

      // Only add position if plant fits within plot bounds
      if (x + plantDiameter <= plotWidth && y + plantDiameter <= plotHeight) {
        positions.push({ x, y });
      }
    }
  }
  console.log(positions);
  return positions;
};

const calculateRectangularPattern = (plotWidth, plotHeight, plantDiameter, spacing, gridWidth, gridHeight) => {
  spacing = spacing / 2;
  // Adjust spacing based on grid dimensions
  const horizontalSpacing = (plantDiameter + spacing) * gridWidth;
  const verticalSpacing = (plantDiameter + spacing) * gridHeight;

  // Calculate number of plants that can fit
  const numCols = Math.floor((plotWidth) / horizontalSpacing) || 0;
  const numRows = Math.floor((plotHeight) / verticalSpacing) || 0;

  // Center the grid
  const startX = (plotWidth - (numCols * horizontalSpacing - spacing)) / 2;
  const startY = (plotHeight - (numRows * verticalSpacing - spacing)) / 2;

  const positions = [];
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      positions.push({
        x: startX + col * horizontalSpacing,
        y: startY + row * verticalSpacing
      });
    }
  }
  return positions;
};

// Convert measurements to meters for calculations
const convertToMeters = (value, unit) => {
  switch (unit) {
    case 'cm':
      return value * 0.01;
    case 'km':
      return value * 1000;
    default:
      return value; // meters
  }
};

const PlotCalculator = ({ showDimensions, setShowDimensions }) => {
  const t = useTranslation();
  // State for all input dimensions and pattern settings
  const [dimensions, setDimensions] = useState({
    width: { value: 3, unit: 'm' },
    height: { value: 3, unit: 'm' },
    border: { value: 0, unit: 'm' },
    plantDiameter: { value: 1, unit: 'm' },
    spacing: { value: 0, unit: 'm' },
    pattern: 'triangle',
    gridWidth: 1,
    gridHeight: 1
  });

  // State for calculation results
  const [results, setResults] = useState({
    totalArea: 0,
    plotArea: 0,
    borderArea: 0,
    plantCount: 0,
    squarePlantCount: 0,
    trianglePlantCount: 0,
    rectanglePlantCount: 0,
    plantPositions: [],
    displayUnit: 'm'
  });

  // Constants for visualization
  const resultSize = window.innerHeight - (window.innerHeight * 0.25);

  const scale = dimensions.width.value > 0 && dimensions.height.value > 0
    ? resultSize / Math.max(
      convertToMeters(dimensions.width.value, dimensions.width.unit),
      convertToMeters(dimensions.height.value, dimensions.height.unit),
      convertToMeters(dimensions.plantDiameter.value, dimensions.plantDiameter.unit) * 2 // Account for plant size
    )
    : 1;

  const visualizationRef = useRef(null);

  // Convert measurements to meters
  const convertedMeasurements = useMemo(() => {
    return {
      widthMeters: convertToMeters(dimensions.width.value, dimensions.width.unit),
      heightMeters: convertToMeters(dimensions.height.value, dimensions.height.unit),
      borderMeters: convertToMeters(dimensions.border.value, dimensions.border.unit),
      plantDiameterMeters: convertToMeters(dimensions.plantDiameter.value, dimensions.plantDiameter.unit),
      spacingMeters: convertToMeters(dimensions.spacing.value, dimensions.spacing.unit),
    };
  }, [dimensions]);

  // Calculate plot dimensions
  const plotDimensions = useMemo(() => {
    const { widthMeters, heightMeters, borderMeters } = convertedMeasurements;
    const plotWidthMeters = Math.max(0, widthMeters - 2 * borderMeters);
    const plotHeightMeters = Math.max(0, heightMeters - 2 * borderMeters);
    return { plotWidthMeters, plotHeightMeters };
  }, [convertedMeasurements]);

  // Memoize positions for each pattern
  const squarePositions = useMemo(() => {
    const { plotWidthMeters, plotHeightMeters } = plotDimensions;
    const { plantDiameterMeters, spacingMeters } = convertedMeasurements;
    return calculatePlantPositions(
      plotWidthMeters,
      plotHeightMeters,
      plantDiameterMeters,
      spacingMeters,
      'square',
      dimensions.gridWidth,
      dimensions.gridHeight
    );
  }, [plotDimensions, convertedMeasurements, dimensions.gridWidth, dimensions.gridHeight]);

  const trianglePositions = useMemo(() => {
    const { plotWidthMeters, plotHeightMeters } = plotDimensions;
    const { plantDiameterMeters, spacingMeters } = convertedMeasurements;
    return calculatePlantPositions(
      plotWidthMeters,
      plotHeightMeters,
      plantDiameterMeters,
      spacingMeters,
      'triangle',
      dimensions.gridWidth,
      dimensions.gridHeight
    );
  }, [plotDimensions, convertedMeasurements, dimensions.gridWidth, dimensions.gridHeight]);

  const rectanglePositions = useMemo(() => {
    const { plotWidthMeters, plotHeightMeters } = plotDimensions;
    const { plantDiameterMeters, spacingMeters } = convertedMeasurements;
    return calculatePlantPositions(
      plotWidthMeters,
      plotHeightMeters,
      plantDiameterMeters,
      spacingMeters,
      'rectangle',
      dimensions.gridWidth,
      dimensions.gridHeight
    );
  }, [plotDimensions, convertedMeasurements, dimensions.gridWidth, dimensions.gridHeight]);

  // Get current pattern positions
  const currentPositions = useMemo(() => {
    return {
      'square': squarePositions,
      'triangle': trianglePositions,
      'rectangle': rectanglePositions
    }[dimensions.pattern];
  }, [dimensions.pattern, squarePositions, trianglePositions, rectanglePositions]);

  // Calculate areas and update results
  const totalArea = useMemo(() => {
    const { widthMeters, heightMeters } = convertedMeasurements;
    return widthMeters * heightMeters;
  }, [convertedMeasurements]);

  const plotArea = useMemo(() => {
    const { plotWidthMeters, plotHeightMeters } = plotDimensions;
    return plotWidthMeters * plotHeightMeters;
  }, [plotDimensions]);

  const borderArea = useMemo(() => {
    return Math.abs(totalArea - plotArea);
  }, [totalArea, plotArea]);

  useEffect(() => {
    setResults({
      totalArea,
      plotArea,
      borderArea,
      plantCount: currentPositions.length,
      squarePlantCount: squarePositions.length,
      trianglePlantCount: trianglePositions.length,
      rectanglePlantCount: rectanglePositions.length,
      plantPositions: currentPositions,
      displayUnit: 'm'
    });
  }, [
    totalArea,
    plotArea,
    borderArea,
    currentPositions,
    squarePositions,
    trianglePositions,
    rectanglePositions
  ]);

  // Add to the handleDimensionChange function
  const handleDimensionChange = (field, value, unit) => {
    const newValue = parseFloat(value);
    if (isNaN(newValue) || newValue < 0) return;

    // Validate plant diameter and spacing
    if (field === 'plantDiameter' || field === 'spacing') {
      const totalWidth = convertToMeters(dimensions.width.value, dimensions.width.unit);
      const totalHeight = convertToMeters(dimensions.height.value, dimensions.height.unit);
      if (convertToMeters(newValue, unit) > Math.min(totalWidth, totalHeight)) {
        return; // Don't update if plant is bigger than plot
      }
    }

    setDimensions(prev => ({
      ...prev,
      [field]: {
        value: newValue,
        unit: unit || prev[field].unit
      }
    }));
  };

  // Handle changes to pattern selection
  const handlePatternChange = (event) => {
    setDimensions(prev => ({
      ...prev,
      pattern: event.target.value
    }));
  };

  // Handle changes to grid dimensions
  const handleGridChange = (field, value) => {
    setDimensions(prev => ({
      ...prev,
      [field]: Math.max(0.1, Math.min(10, parseFloat(value) || 1))
    }));
  };

  // Component for dimension inputs
  const DimensionInput = ({ label, field, sign }) => (
    <div className="w-full space-y-2">
      <label className="flex flex-row items-center px-2 gap-2 text-sm font-medium text-gray-700">{label} {sign}</label>
      <div className="flex gap-2">
        <input
          type="number"
          value={dimensions[field].value}
          min="0"
          onChange={(e) => handleDimensionChange(field, e.target.value)}
          className="w-2/3 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <select
          value={dimensions[field].unit}
          onChange={(e) => handleDimensionChange(field, dimensions[field].value, e.target.value)}
          className="w-20 flex-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="m">m</option>
          <option value="cm">cm</option>
          <option value="km">km</option>
        </select>
      </div>
    </div>
  );



  return (
    <div className="min-h-screen flex flex-col sm:flex-row justify-center font-poppins text-base bg-mainBG-light shadow-inner">

      {/* Input form */}
      <div className="w-full mx-4 my-8 sm:max-w-1/4 p-2 sm:p-4 sm:my-4 bg-white rounded-lg shadow-xl ">
        <div>
          <p className="text-2xl pt-4 text-center">
            {t.designTitle}</p>
        </div>

        <div className="p-4 space-y-4">
          {/* Pattern selection */}
          <label className="flex flex-row justify-between px-2 text-sm font-medium text-gray-700">
            {t.pattern}:
            <CgMenuGridO
              className={`text-lg ${dimensions.pattern !== 'square' ? 'rotate-45' : ''}`}
            />
          </label>
          <select
            value={dimensions.pattern}
            onChange={handlePatternChange}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="square">{t.square}</option>
            <option value="triangle">{t.triangle}</option>
            <option value="rectangle">{t.rectangle}</option>
          </select>

          {/* Grid pattern adjustments */}
          {dimensions.pattern !== 'square' && (
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="flex flex-row items-center px-2 text-sm font-medium text-gray-700">{t.gridWidthMultiplier}
                  <CgArrowsExpandDownRight className="text-lg ml-2 -rotate-45" /> </label>
                <input
                  type="number"
                  value={dimensions.gridWidth}
                  min="0.1"
                  max="10"
                  step="0.1"
                  onChange={(e) => handleGridChange('gridWidth', e.target.value)}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="space-y-2">
                <label className="flex flex-row items-center px-2 text-sm font-medium text-gray-700">{t.gridHeightMultiplier}
                  <CgArrowsExpandDownRight className="text-lg ml-2 -rotate-135" />
                </label>
                <input
                  type="number"
                  value={dimensions.gridHeight}
                  min="0.1"
                  max="10"
                  step="0.1"
                  onChange={(e) => handleGridChange('gridHeight', e.target.value)}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          )}

          {/* Dimension inputs */}
          <DimensionInput label={t.gardenWidth} field="width" sign={<CgArrowsShrinkH className="text-lg" />} />
          <DimensionInput label={t.gardenHeight} field="height" sign={<CgArrowsShrinkH className="text-lg rotate-90" />} />
          <DimensionInput label={t.plantDiameter} field="plantDiameter" sign={<FaCircle className="text-sm" />} />
          <DimensionInput label={t.plantSpacing} field="spacing" sign={<FaRegDotCircle className="text-lg" />} />
          <DimensionInput label={t.borderWidth} field="border" sign={<AiOutlineBorder className="text-lg" />} />

          {/* Results display */}
          <div className="mt-6 p-4 bg-mainBG-light rounded-lg drop-shadow-sm space-y-2">
            <p className="text-sm text-gray-600">{t.totalArea}: <span className="font-medium text-gray-900">{results.totalArea.toFixed(2)} m²</span></p>
            <p className="text-sm text-gray-600">{t.plantingArea}: <span className="font-medium text-gray-900">{results.plotArea.toFixed(2)} m²</span></p>
            <p className="text-sm text-gray-600">{t.borderArea}: <span className="font-medium text-gray-900">{results.borderArea.toFixed(2)} m²</span></p>
            <p className="text-sm text-gray-600">{t.plantCount}: <span className="font-medium text-gray-900">{results.plantCount}</span></p>
            <div className="space-y-2">
              {dimensions.pattern === 'square' && (
                <p className="text-sm text-gray-600">{t.plantsInTriangle}: <span className="font-medium text-gray-900">{results.trianglePlantCount}</span></p>
              )}
              {dimensions.pattern === 'triangle' && (
                <p className="text-sm text-gray-600">{t.plantsInSquare}: <span className="font-medium text-gray-900">{results.squarePlantCount}</span></p>
              )}
              {dimensions.pattern === 'rectangle' && (
                <>
                  <p className="text-sm text-gray-600">{t.plantsInSquare}: <span className="font-medium text-gray-900">{results.squarePlantCount}</span></p>
                  <p className="text-sm text-gray-600">{t.plantsInTriangle}: <span className="font-medium text-gray-900">{results.trianglePlantCount}</span></p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Visualization */}
      {/* Container for the visualization */}
      <div className="relative mx-4 my-4 py-12 px-12 bg-white rounded-lg shadow-xl">
        {/* Toggle Button */}
        <ToggleButton
          isOn={showDimensions}
          onToggle={() => setShowDimensions(!showDimensions)}
          label={t.dimensions}
        />
        {/* Container for the Area (Area > Border > Plot) */}
        <div
          className="relative flex justify-center items-center bg-white rounded-lg"
          style={{ width: `${resultSize}px`, height: `${resultSize}px` }}
          ref={visualizationRef}
        >

          {/* Dimensions Display */}
          {showDimensions && (
            <>
              {/* Width Dimension */}
              <div className="absolute px-4 bg-white -bottom-8 left-1/2 transform -translate-x-1/2 rounded text-sm font-medium text-black z-10">
                Width: {dimensions.width.value} {dimensions.width.unit}
              </div>
              <div
                className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-black z-0"
                style={{
                  width: `${convertToMeters(dimensions.width.value, dimensions.width.unit) * scale}px`,
                  height: "1px",
                }}
              />

              {/* Height Dimension */}
              <div className="absolute px-4 bg-white -right-20 top-1/2 transform -translate-y-1/2 rotate-90 rounded text-sm font-medium text-black z-10">
                Height: {dimensions.height.value} {dimensions.height.unit}
              </div>
              <div
                className="absolute inset-y-1/2 -right-6 transform translate-x-1/2 rotate-90 bg-black z-0"
                style={{
                  width: `${convertToMeters(dimensions.height.value, dimensions.height.unit) * scale}px`,
                  height: "1px",
                }}
              />

              {/* Border Dimension */}
              <div
                className="absolute -top-4 right-0 bg-black flex items-center z-30"
                style={{
                  width: `${Math.max(1, convertToMeters(dimensions.border.value, dimensions.border.unit) * scale)}px`,
                  height: "1px",
                }}
              ></div>

              <div>
                {dimensions.border.value !== 0 && (
                  <p
                    className="absolute -top-10 -right-0 z-30 text-sm font-medium text-black pl-10"
                  >
                    Border: {dimensions.border.value / 2} {dimensions.border.unit}
                  </p>
                )}
              </div>
            </>
          )}

          {/* Border (Area - plot) */}
          <div
            className="absolute flex justify-center items-center bg-sky-100"
            style={{
              width: `${convertToMeters(dimensions.width.value, dimensions.width.unit) * scale}px`,
              height: `${convertToMeters(dimensions.height.value, dimensions.height.unit) * scale}px`,
            }}
          >
            {convertToMeters(dimensions.border.value, dimensions.border.unit) > 0 && (
              <>

              </>
            )}

            {/* Plot (Area - border) */}
            <div
              className="absolute bg-emerald-200 flex justify-center items-center"
              style={{
                width: `${(convertToMeters(dimensions.width.value, dimensions.width.unit) - 2 * convertToMeters(dimensions.border.value, dimensions.border.unit)) * scale}px`,
                height: `${(convertToMeters(dimensions.height.value, dimensions.height.unit) - 2 * convertToMeters(dimensions.border.value, dimensions.border.unit)) * scale}px`
              }}
            >
              <div>
                {/* Plants (dots) */}
                {results.plantPositions.map((plant, index) => (
                  <div
                    key={index}
                    className="absolute rounded-full bg-green-500 transition-all duration-300 hover:bg-green-600"
                    style={{
                      width: `${convertToMeters(dimensions.plantDiameter.value, dimensions.plantDiameter.unit) * scale}px`,
                      height: `${convertToMeters(dimensions.plantDiameter.value, dimensions.plantDiameter.unit) * scale}px`,
                      left: `${plant.x * scale}px`,
                      top: `${plant.y * scale}px`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheDesignPage;
