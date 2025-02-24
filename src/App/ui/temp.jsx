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
{const AnimatedSteps = () => {
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
};}

// temp design page

{import React, { useState, useEffect, useRef, useMemo } from "react";
import { CgArrowsShrinkH, CgArrowsExpandDownRight } from "react-icons/cg";
import { AiOutlineBorder } from "react-icons/ai";
import { FaCircle, FaRegDotCircle } from "react-icons/fa";
import { CgMenuGridO } from "react-icons/cg";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";
import { useTranslation } from '../components/LanguageContext';

const ToggleButton = ({ isOn, onToggle, label }) => {
  return (
    <div className="flex flex-row justify-end items-center gap-2 absolute top-0 left-10">
      <button
        onClick={onToggle}
        className="py-1 px-2 rounded-lg text-gray-700 z-20"
        aria-label={isOn ? `Hide ${label}` : `Show ${label}`}
      >
        <div>
          {isOn ? <BsToggleOn className="text-3xl text-green-600" /> : <BsToggleOff className="text-3xl text-gray-400" />}
        </div>
      </button>
      <div>{isOn ? "Show " : "Hide "} {label}</div>
    </div>
  );
};

function TheDesignPage() {
  const [showDimensions, setShowDimensions] = useState(true);
  return (
    <div className="relative">
      <PlotCalculator showDimensions={showDimensions} setShowDimensions={setShowDimensions} />
    </div>
  );
}

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

const calculateSquarePattern = (plotWidth, plotHeight, plantDiameter, spacing) => {
  const adjustedSpacing = spacing / 2;
  const spacingTotal = plantDiameter + adjustedSpacing;
  const numCols = Math.floor(plotWidth / spacingTotal) || 0;
  const numRows = Math.floor(plotHeight / spacingTotal) || 0;
  const horizontalExtent = numCols > 0 ? (numCols - 1) * spacingTotal + plantDiameter : 0;
  const verticalExtent = numRows > 0 ? (numRows - 1) * spacingTotal + plantDiameter : 0;
  const startX = (plotWidth - horizontalExtent) / 2;
  const startY = (plotHeight - verticalExtent) / 2;

  const positions = [];
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      positions.push({
        x: startX + col * spacingTotal,
        y: startY + row * spacingTotal
      });
    }
  }
  return positions;
};

const calculateTriangularPattern = (plotWidth, plotHeight, plantDiameter, spacing, gridWidth, gridHeight) => {
  const adjustedSpacing = spacing / 2;
  const baseSpacing = plantDiameter + adjustedSpacing;
  const horizontalSpacing = baseSpacing * gridWidth;
  const verticalSpacing = (Math.sqrt(3) / 2) * baseSpacing * gridHeight;

  const numCols = Math.floor((plotWidth - plantDiameter + adjustedSpacing) / horizontalSpacing) + 1;
  const maxRows = Math.floor((plotHeight - plantDiameter + adjustedSpacing) / verticalSpacing) + 1;

  // Initial vertical extent for startY
  const verticalExtent = (maxRows - 1) * verticalSpacing + plantDiameter;
  const startYRaw = (plotHeight - verticalExtent) / 2;
  const startY = Math.max(0, startYRaw);

  // Calculate positions without horizontal centering yet
  const positions = [];
  for (let row = 0; row < maxRows; row++) {
    const isOddRow = row % 2 === 1;
    const rowOffset = isOddRow ? horizontalSpacing / 2 : 0;
    const effectiveNumCols = isOddRow
      ? Math.floor((plotWidth - rowOffset - plantDiameter + adjustedSpacing) / horizontalSpacing) + 1
      : numCols;
    for (let col = 0; col < effectiveNumCols; col++) {
      const x = rowOffset + (col * horizontalSpacing); // No startX yet
      const y = startY + (row * verticalSpacing);
      if (x + plantDiameter <= plotWidth && y + plantDiameter <= plotHeight) {
        positions.push({ x, y });
      }
    }
  }
  // Calculate horizontal centering based on actual positions
  if (positions.length > 0) {
    const minX = Math.min(...positions.map(pos => pos.x));
    const maxX = Math.max(...positions.map(pos => pos.x));
    const actualHorizontalExtent = maxX - minX + plantDiameter; // Full width including last plant
    const startX = Math.max(0, (plotWidth - actualHorizontalExtent) / 2);

    const minY = Math.min(...positions.map(pos => pos.y));
    const maxY = Math.max(...positions.map(pos => pos.y));
    const actualVerticalExtent = maxY - minY + plantDiameter; // Full height including last plant
    const startY = Math.max(0, (plotHeight - actualVerticalExtent) / 2);

    // Shift positions to center horizontally
    return positions.map(pos => ({
      x: pos.x + startX - minX, // Adjust from minX to center
      y: pos.y + startY - minY
    }));
  }
  return positions; // Return unshifted if no positions
};

const calculateRectangularPattern = (plotWidth, plotHeight, plantDiameter, spacing, gridWidth, gridHeight) => {
  const adjustedSpacing = spacing / 2;
  const horizontalSpacing = (plantDiameter + adjustedSpacing) * gridWidth;
  const verticalSpacing = (plantDiameter + adjustedSpacing) * gridHeight;

  const numCols = Math.floor(plotWidth / horizontalSpacing) || 0;
  const numRows = Math.floor(plotHeight / verticalSpacing) || 0;

  const horizontalExtent = numCols > 0 ? (numCols - 1) * horizontalSpacing + plantDiameter : 0;
  const verticalExtent = numRows > 0 ? (numRows - 1) * verticalSpacing + plantDiameter : 0;

  const startX = (plotWidth - horizontalExtent) / 2;
  const startY = (plotHeight - verticalExtent) / 2;

  const positions = [];
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      positions.push({ x: startX + col * horizontalSpacing, y: startY + row * verticalSpacing });
    }
  }
  return positions;
};

const convertToMeters = (value, unit) => {
  switch (unit) {
    case 'cm': return value * 0.01;
    case 'km': return value * 1000;
    default: return value; // meters
  }
};

const PlotCalculator = ({ showDimensions, setShowDimensions }) => {
  const t = useTranslation();
  const [dimensions, setDimensions] = useState({
    width: { value: 9, unit: 'm' },
    height: { value: 13, unit: 'm' },
    border: { value: 0, unit: 'm' },
    plantDiameter: { value: 2, unit: 'm' },
    spacing: { value: 1, unit: 'm' },
    pattern: 'triangle',
    gridWidth: 1,
    gridHeight: 1
  });

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

  const resultSize = window.innerHeight - (window.innerHeight * 0.25);
  const scale = dimensions.width.value > 0 && dimensions.height.value > 0
    ? resultSize / Math.max(
      convertToMeters(dimensions.width.value, dimensions.width.unit),
      convertToMeters(dimensions.height.value, dimensions.height.unit),
      convertToMeters(dimensions.plantDiameter.value, dimensions.plantDiameter.unit) * 2
    )
    : 1;

  const visualizationRef = useRef(null);

  const convertedMeasurements = useMemo(() => ({
    widthMeters: convertToMeters(dimensions.width.value, dimensions.width.unit),
    heightMeters: convertToMeters(dimensions.height.value, dimensions.height.unit),
    borderMeters: convertToMeters(dimensions.border.value, dimensions.border.unit),
    plantDiameterMeters: convertToMeters(dimensions.plantDiameter.value, dimensions.plantDiameter.unit),
    spacingMeters: convertToMeters(dimensions.spacing.value, dimensions.spacing.unit),
  }), [dimensions]);

  const plotDimensions = useMemo(() => {
    const { widthMeters, heightMeters, borderMeters } = convertedMeasurements;
    return {
      plotWidthMeters: Math.max(0, widthMeters - 2 * borderMeters),
      plotHeightMeters: Math.max(0, heightMeters - 2 * borderMeters)
    };
  }, [convertedMeasurements]);

  const squarePositions = useMemo(() => calculatePlantPositions(
    plotDimensions.plotWidthMeters,
    plotDimensions.plotHeightMeters,
    convertedMeasurements.plantDiameterMeters,
    convertedMeasurements.spacingMeters,
    'square',
    dimensions.gridWidth,
    dimensions.gridHeight
  ), [plotDimensions, convertedMeasurements, dimensions.gridWidth, dimensions.gridHeight]);

  const trianglePositions = useMemo(() => calculatePlantPositions(
    plotDimensions.plotWidthMeters,
    plotDimensions.plotHeightMeters,
    convertedMeasurements.plantDiameterMeters,
    convertedMeasurements.spacingMeters,
    'triangle',
    dimensions.gridWidth,
    dimensions.gridHeight
  ), [plotDimensions, convertedMeasurements, dimensions.gridWidth, dimensions.gridHeight]);

  const rectanglePositions = useMemo(() => calculatePlantPositions(
    plotDimensions.plotWidthMeters,
    plotDimensions.plotHeightMeters,
    convertedMeasurements.plantDiameterMeters,
    convertedMeasurements.spacingMeters,
    'rectangle',
    dimensions.gridWidth,
    dimensions.gridHeight
  ), [plotDimensions, convertedMeasurements, dimensions.gridWidth, dimensions.gridHeight]);

  const currentPositions = useMemo(() => ({
    'square': squarePositions,
    'triangle': trianglePositions,
    'rectangle': rectanglePositions
  }[dimensions.pattern]), [dimensions.pattern, squarePositions, trianglePositions, rectanglePositions]);

  const totalArea = useMemo(() => convertedMeasurements.widthMeters * convertedMeasurements.heightMeters, [convertedMeasurements]);
  const plotArea = useMemo(() => plotDimensions.plotWidthMeters * plotDimensions.plotHeightMeters, [plotDimensions]);
  const borderArea = useMemo(() => Math.abs(totalArea - plotArea), [totalArea, plotArea]);

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
  }, [totalArea, plotArea, borderArea, currentPositions, squarePositions, trianglePositions, rectanglePositions]);

  const handleDimensionChange = (field, value, unit) => {
    const newValue = parseFloat(value);
    if (isNaN(newValue) || newValue < 0) return;
    if (field === 'plantDiameter' || field === 'spacing') {
      const totalWidth = convertToMeters(dimensions.width.value, dimensions.width.unit);
      const totalHeight = convertToMeters(dimensions.height.value, dimensions.height.unit);
      if (convertToMeters(newValue, unit) > Math.min(totalWidth, totalHeight)) return;
    }
    setDimensions(prev => ({
      ...prev,
      [field]: { value: newValue, unit: unit || prev[field].unit }
    }));
  };

  const handlePatternChange = (event) => {
    setDimensions(prev => ({ ...prev, pattern: event.target.value }));
  };

  const handleGridChange = (field, value) => {
    setDimensions(prev => ({
      ...prev,
      [field]: Math.max(0.1, Math.min(10, parseFloat(value) || 1))
    }));
  };

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

      {/* Input Section */}
      <div className="w-full mx-4 my-8 sm:max-w-1/4 p-2 sm:p-4 sm:my-4 bg-white rounded-lg shadow-xl">
        <div>
          <p className="text-2xl pt-4 text-center">{t.designTitle}</p>
        </div>
        <div className="p-4 space-y-4">
          <label className="flex flex-row justify-between px-2 text-sm font-medium text-gray-700">
            {t.pattern}: <CgMenuGridO className={`text-lg ${dimensions.pattern !== 'square' ? 'rotate-45' : ''}`} />
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

          {dimensions.pattern !== 'square' && (
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="flex flex-row items-center px-2 text-sm font-medium text-gray-700">
                  {t.gridWidthMultiplier} <CgArrowsExpandDownRight className="text-lg ml-2 -rotate-45" />
                </label>
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
                <label className="flex flex-row items-center px-2 text-sm font-medium text-gray-700">
                  {t.gridHeightMultiplier} <CgArrowsExpandDownRight className="text-lg ml-2 -rotate-135" />
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

          <DimensionInput label={t.gardenWidth} field="width" sign={<CgArrowsShrinkH className="text-lg" />} />
          <DimensionInput label={t.gardenHeight} field="height" sign={<CgArrowsShrinkH className="text-lg rotate-90" />} />
          <DimensionInput label={t.plantDiameter} field="plantDiameter" sign={<FaCircle className="text-sm" />} />
          <DimensionInput label={t.plantSpacing} field="spacing" sign={<FaRegDotCircle className="text-lg" />} />
          <DimensionInput label={t.borderWidth} field="border" sign={<AiOutlineBorder className="text-lg" />} />

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

      {/* Visualization Section */}
      <div className="relative mx-4 my-4 py-12 px-12 bg-white rounded-lg shadow-xl">
        <ToggleButton
          isOn={showDimensions}
          onToggle={() => setShowDimensions(!showDimensions)}
          label={t.dimensions}
        />
        <div
          className="relative flex justify-center items-center bg-white rounded-lg"
          style={{ width: `${resultSize}px`, height: `${resultSize}px` }}
          ref={visualizationRef}
        >
          {showDimensions && (
            <>
              <div className="absolute px-4 bg-white -bottom-8 left-1/2 transform -translate-x-1/2 rounded text-sm font-medium text-black z-10">
                Width: {dimensions.width.value} {dimensions.width.unit}
              </div>
              <div
                className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-black z-0"
                style={{ width: `${convertToMeters(dimensions.width.value, dimensions.width.unit) * scale}px`, height: "1px" }}
              />
              <div className="absolute px-4 bg-white -right-20 top-1/2 transform -translate-y-1/2 rotate-90 rounded text-sm font-medium text-black z-10">
                Height: {dimensions.height.value} {dimensions.height.unit}
              </div>
              <div
                className="absolute inset-y-1/2 -right-6 transform translate-x-1/2 rotate-90 bg-black z-0"
                style={{ width: `${convertToMeters(dimensions.height.value, dimensions.height.unit) * scale}px`, height: "1px" }}
              />
              <div
                className="absolute -top-4 right-0 bg-black flex items-center z-30"
                style={{ width: `${Math.max(1, convertToMeters(dimensions.border.value, dimensions.border.unit) * scale)}px`, height: "1px" }}
              />
              {dimensions.border.value !== 0 && (
                <p className="absolute -top-10 -right-0 z-30 text-sm font-medium text-black pl-10">
                  Border: {dimensions.border.value / 2} {dimensions.border.unit}
                </p>
              )}
            </>
          )}

          <div
            className="absolute flex justify-center items-center bg-sky-100"
            style={{
              width: `${convertToMeters(dimensions.width.value, dimensions.width.unit) * scale}px`,
              height: `${convertToMeters(dimensions.height.value, dimensions.height.unit) * scale}px`
            }}
          >
            <div
              className="absolute bg-emerald-200 flex justify-center items-center"
              style={{
                width: `${(convertToMeters(dimensions.width.value, dimensions.width.unit) - 2 * convertToMeters(dimensions.border.value, dimensions.border.unit)) * scale}px`,
                height: `${(convertToMeters(dimensions.height.value, dimensions.height.unit) - 2 * convertToMeters(dimensions.border.value, dimensions.border.unit)) * scale}px`
              }}
            >
              {results.plantPositions.map((plant, index) => (
                <div
                  key={index}
                  className="absolute rounded-full bg-green-500 transition-all duration-300 hover:bg-green-600"
                  style={{
                    width: `${convertToMeters(dimensions.plantDiameter.value, dimensions.plantDiameter.unit) * scale}px`,
                    height: `${convertToMeters(dimensions.plantDiameter.value, dimensions.plantDiameter.unit) * scale}px`,
                    left: `${plant.x * scale}px`,
                    top: `${plant.y * scale}px`
                  }}
                />
              ))}

              {showDimensions && results.plantPositions.length >= 1 && (
                <>
                  {results.plantPositions.slice(0, 2).map((plant, index) => (
                    <React.Fragment key={index}>
                      <div
                        className="absolute border-2 border-dashed border-black rounded-full"
                        style={{
                          width: `${(convertToMeters(dimensions.plantDiameter.value, dimensions.plantDiameter.unit) + convertToMeters(dimensions.spacing.value, dimensions.spacing.unit) / 2) * scale}px`,
                          height: `${(convertToMeters(dimensions.plantDiameter.value, dimensions.plantDiameter.unit) + convertToMeters(dimensions.spacing.value, dimensions.spacing.unit) / 2) * scale}px`,
                          left: `${plant.x * scale - (convertToMeters(dimensions.spacing.value, dimensions.spacing.unit) * scale) / 4}px`,
                          top: `${plant.y * scale - (convertToMeters(dimensions.spacing.value, dimensions.spacing.unit) * scale) / 4}px`,
                          zIndex: 10
                        }}
                      />
                      <div
                        className="absolute bg-white px-2 text-sm font-medium text-black"
                        style={{
                          left: `${plant.x * scale + (convertToMeters(dimensions.plantDiameter.value, dimensions.plantDiameter.unit) * scale) / 2}px`,
                          top: `${plant.y * scale - 20}px`,
                          zIndex: 20
                        }}
                      >
                        Spacing: {dimensions.spacing.value / 2} {dimensions.spacing.unit}
                      </div>
                    </React.Fragment>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheDesignPage;}


{import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { CgArrowsShrinkH, CgArrowsExpandDownRight } from "react-icons/cg";
import { AiOutlineBorder, AiOutlineUndo, AiOutlineRedo } from "react-icons/ai";
import { FaCircle, FaRegDotCircle, FaDownload } from "react-icons/fa";
import { CgMenuGridO } from "react-icons/cg";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";
import { useTranslation } from '../components/LanguageContext';

// Constants
const PLANT_TYPES = {
  VEGETABLE: 'vegetable',
  FLOWER: 'flower',
  TREE: 'tree',
  SHRUB: 'shrub'
};

const COLOR_SCHEMES = {
  DEFAULT: {
    border: 'bg-sky-100',
    plot: 'bg-emerald-200',
    plant: 'bg-green-500',
    plantHover: 'hover:bg-green-600'
  },
  DESERT: {
    border: 'bg-orange-100',
    plot: 'bg-yellow-200',
    plant: 'bg-orange-500',
    plantHover: 'hover:bg-orange-600'
  },
  WATER: {
    border: 'bg-blue-100',
    plot: 'bg-blue-200',
    plant: 'bg-blue-500',
    plantHover: 'hover:bg-blue-600'
  }
};

// Custom hooks
const useUndoRedo = (initialState) => {
  const [history, setHistory] = useState([initialState]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const canUndo = currentIndex > 0;
  const canRedo = currentIndex < history.length - 1;

  const undo = useCallback(() => {
    if (canUndo) {
      setCurrentIndex(currentIndex - 1);
      return history[currentIndex - 1];
    }
    return history[currentIndex];
  }, [canUndo, currentIndex, history]);

  const redo = useCallback(() => {
    if (canRedo) {
      setCurrentIndex(currentIndex + 1);
      return history[currentIndex + 1];
    }
    return history[currentIndex];
  }, [canRedo, currentIndex, history]);

  const addToHistory = useCallback((newState) => {
    setHistory(prev => [...prev.slice(0, currentIndex + 1), newState]);
    setCurrentIndex(prev => prev + 1);
  }, [currentIndex]);

  return { currentState: history[currentIndex], undo, redo, addToHistory, canUndo, canRedo };
};

// Memoized Components
const ToggleButton = React.memo(({ isOn, onToggle, label }) => {
  return (
    <div className="flex flex-row justify-end items-center gap-2 absolute top-0 left-2 sm:left-10">
      <button
        onClick={onToggle}
        className="py-1 px-2 rounded-lg text-gray-700 z-20 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
        aria-label={isOn ? `Hide ${label}` : `Show ${label}`}
      >
        <div>
          {isOn ? <BsToggleOn className="text-2xl sm:text-3xl text-green-600" /> : <BsToggleOff className="text-2xl sm:text-3xl text-gray-400" />}
        </div>
      </button>
      <div className="text-sm sm:text-base">{isOn ? "Show " : "Hide "} {label}</div>
    </div>
  );
});

ToggleButton.displayName = 'ToggleButton';

const DimensionInput = React.memo(({ label, field, sign, value, onChange, unit, onUnitChange, error }) => (
  <div className="w-full space-y-2">
    <label className="flex flex-row items-center px-2 gap-2 text-xs sm:text-sm font-medium text-gray-700">
      {label} {sign}
    </label>
    <div className="flex gap-2">
      <div className="relative w-2/3">
        <input
          type="number"
          value={value}
          min="0"
          onChange={onChange}
          className={`w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base ${error ? 'border-red-500' : ''
            }`}
          aria-label={`${label} value`}
          aria-invalid={error ? 'true' : 'false'}
        />
        {error && <p className="absolute text-xs text-red-500 mt-1">{error}</p>}
      </div>
      <select
        value={unit}
        onChange={onUnitChange}
        className="w-20 flex-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
        aria-label={`${label} unit`}
      >
        <option value="m">m</option>
        <option value="cm">cm</option>
        <option value="km">km</option>
      </select>
    </div>
  </div>
));

DimensionInput.displayName = 'DimensionInput';

function TheDesignPage() {
  const [showDimensions, setShowDimensions] = useState(true);
  const [colorScheme, setColorScheme] = useState('DEFAULT');

  return (
    <div className="relative">
      <PlotCalculator
        showDimensions={showDimensions}
        setShowDimensions={setShowDimensions}
        colorScheme={colorScheme}
        setColorScheme={setColorScheme}
      />
    </div>
  );
}

const PlotCalculator = ({ showDimensions, setShowDimensions, colorScheme, setColorScheme }) => {
  const t = useTranslation();
  const visualizationRef = useRef(null);

  const convertToMeters = (value, unit) => {
    switch (unit) {
      case 'cm': return value * 0.01;
      case 'km': return value * 1000;
      default: return value; // meters
    }
  };

  // State management with undo/redo
  const {
    currentState: dimensions,
    undo,
    redo,
    addToHistory,
    canUndo,
    canRedo
  } = useUndoRedo({
    width: { value: 9, unit: 'm' },
    height: { value: 13, unit: 'm' },
    border: { value: 0, unit: 'm' },
    plantDiameter: { value: 2, unit: 'm' },
    spacing: { value: 1, unit: 'm' },
    pattern: 'triangle',
    gridWidth: 1,
    gridHeight: 1,
    plantType: PLANT_TYPES.VEGETABLE
  });

  // Form validation state
  const [errors, setErrors] = useState({});

  // Results state
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



  // Memoized calculations
  const resultSize = useMemo(() =>
    window.innerHeight - (window.innerHeight * 0.25), []
  );

  const scale = dimensions.width.value > 0 && dimensions.height.value > 0
    ? resultSize / Math.max(
      convertToMeters(dimensions.width.value, dimensions.width.unit),
      convertToMeters(dimensions.height.value, dimensions.height.unit),
      convertToMeters(dimensions.plantDiameter.value, dimensions.plantDiameter.unit) * 2
    )
    : 1;



  // Export functionality
  const handleExport = useCallback(() => {
    try {
      const designData = {
        dimensions,
        results,
        timestamp: new Date().toISOString()
      };

      const blob = new Blob([JSON.stringify(designData, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = `garden-design-${new Date().toISOString()}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      alert('Design exported successfully!');
    } catch (error) {
      alert('Failed to export design');
      console.error('Export error:', error);
    }
  }, [dimensions, results]);

  // Validation
  const validateDimensions = useCallback((newDimensions) => {
    const newErrors = {};

    if (newDimensions.width.value <= 0) {
      newErrors.width = 'Width must be greater than 0';
    }
    if (newDimensions.height.value <= 0) {
      newErrors.height = 'Height must be greater than 0';
    }
    if (newDimensions.plantDiameter.value <= 0) {
      newErrors.plantDiameter = 'Plant diameter must be greater than 0';
    }
    if (newDimensions.spacing.value < 0) {
      newErrors.spacing = 'Spacing cannot be negative';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, []);

  // Update handlers with validation
  const handleDimensionChange = useCallback((field, value, unit) => {
    const newValue = parseFloat(value);
    if (isNaN(newValue)) return;

    const newDimensions = {
      ...dimensions,
      [field]: { value: newValue, unit: unit || dimensions[field].unit }
    };

    if (validateDimensions(newDimensions)) {
      addToHistory(newDimensions);
    }
  }, [dimensions, validateDimensions, addToHistory]);

  // Update results when dimensions change
  useEffect(() => {
    // Calculate new results based on dimensions
    const newResults = {
      ...results,
      // Add your calculations here
      totalArea: dimensions.width.value * dimensions.height.value,
      plotArea: (dimensions.width.value - 2 * dimensions.border.value) *
        (dimensions.height.value - 2 * dimensions.border.value),
      // ... other calculations
    };
    setResults(newResults);
  }, [dimensions]);



  return (
    <div className="min-h-screen flex flex-col sm:flex-row justify-center font-poppins text-base bg-mainBG-light shadow-inner p-2 sm:p-4">
      {/* Control Panel */}
      <div className="w-full sm:w-1/3 lg:w-1/4 mx-2 sm:mx-4 my-4 sm:my-8 p-3 sm:p-4 bg-white rounded-lg shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl sm:text-2xl font-semibold">{t.designTitle}</h1>
          <div className="flex gap-2">
            <button
              onClick={undo}
              disabled={!canUndo}
              className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50"
              aria-label="Undo"
            >
              <AiOutlineUndo />
            </button>
            <button
              onClick={redo}
              disabled={!canRedo}
              className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50"
              aria-label="Redo"
            >
              <AiOutlineRedo />
            </button>
            <button
              onClick={handleExport}
              className="p-2 rounded-lg hover:bg-gray-100"
              aria-label="Export design"
            >
              <FaDownload />
            </button>
          </div>
        </div>

        {/* Color Scheme Selection */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Color Scheme
          </label>
          <select
            value={colorScheme}
            onChange={(e) => setColorScheme(e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            {Object.keys(COLOR_SCHEMES).map(scheme => (
              <option key={scheme} value={scheme}>
                {scheme.charAt(0) + scheme.slice(1).toLowerCase()}
              </option>
            ))}
          </select>
        </div>

        {/* Plant Type Selection */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Plant Type
          </label>
          <select
            value={dimensions.plantType}
            onChange={(e) => handleDimensionChange('plantType', e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            {Object.entries(PLANT_TYPES).map(([key, value]) => (
              <option key={key} value={value}>
                {key.charAt(0) + key.slice(1).toLowerCase()}
              </option>
            ))}
          </select>
        </div>

        {/* Dimension inputs and results display */}
        {/* ... Add your existing dimension inputs here ... */}
        <DimensionInput label={t.gardenWidth} field="width" sign={<CgArrowsShrinkH className="text-lg" />} />
        <DimensionInput label={t.gardenHeight} field="height" sign={<CgArrowsShrinkH className="text-lg rotate-90" />} />
        <DimensionInput label={t.plantDiameter} field="plantDiameter" sign={<FaCircle className="text-sm" />} />
        <DimensionInput label={t.plantSpacing} field="spacing" sign={<FaRegDotCircle className="text-lg" />} />
        <DimensionInput label={t.borderWidth} field="border" sign={<AiOutlineBorder className="text-lg" />} />

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

      {/* Visualization */}
      <div className="relative mx-2 sm:mx-4 my-4 py-8 sm:py-12 px-4 sm:px-12 bg-white rounded-lg shadow-xl">
        <ToggleButton
          isOn={showDimensions}
          onToggle={() => setShowDimensions(!showDimensions)}
          label={t.dimensions}
        />
        <div
          className="relative flex justify-center items-center bg-white rounded-lg"
          style={{
            width: `${resultSize}px`,
            height: `${resultSize}px`,
            maxWidth: '100vw',
            maxHeight: '100vw'
          }}
          ref={visualizationRef}
          role="region"
          aria-label="Garden plot visualization"
        >
          {/* ... Add your existing visualization content here ... */}
          {showDimensions && (
            <>
              <div className="absolute px-4 bg-white -bottom-8 left-1/2 transform -translate-x-1/2 rounded text-sm font-medium text-black z-10">
                Width: {dimensions.width.value} {dimensions.width.unit}
              </div>
              <div
                className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-black z-0"
                style={{ width: `${convertToMeters(dimensions.width.value, dimensions.width.unit) * scale}px`, height: "1px" }}
              />
              <div className="absolute px-4 bg-white -right-20 top-1/2 transform -translate-y-1/2 rotate-90 rounded text-sm font-medium text-black z-10">
                Height: {dimensions.height.value} {dimensions.height.unit}
              </div>
              <div
                className="absolute inset-y-1/2 -right-6 transform translate-x-1/2 rotate-90 bg-black z-0"
                style={{ width: `${convertToMeters(dimensions.height.value, dimensions.height.unit) * scale}px`, height: "1px" }}
              />
              <div
                className="absolute -top-4 right-0 bg-black flex items-center z-30"
                style={{ width: `${Math.max(1, convertToMeters(dimensions.border.value, dimensions.border.unit) * scale)}px`, height: "1px" }}
              />
              {dimensions.border.value !== 0 && (
                <p className="absolute -top-10 -right-0 z-30 text-sm font-medium text-black pl-10">
                  Border: {dimensions.border.value / 2} {dimensions.border.unit}
                </p>
              )}
            </>
          )}

          <div
            className="absolute flex justify-center items-center bg-sky-100"
            style={{
              width: `${convertToMeters(dimensions.width.value, dimensions.width.unit) * scale}px`,
              height: `${convertToMeters(dimensions.height.value, dimensions.height.unit) * scale}px`
            }}
          >
            <div
              className="absolute bg-emerald-200 flex justify-center items-center"
              style={{
                width: `${(convertToMeters(dimensions.width.value, dimensions.width.unit) - 2 * convertToMeters(dimensions.border.value, dimensions.border.unit)) * scale}px`,
                height: `${(convertToMeters(dimensions.height.value, dimensions.height.unit) - 2 * convertToMeters(dimensions.border.value, dimensions.border.unit)) * scale}px`
              }}
            >
              {results.plantPositions.map((plant, index) => (
                <div
                  key={index}
                  className="absolute rounded-full bg-green-500 transition-all duration-300 hover:bg-green-600"
                  style={{
                    width: `${convertToMeters(dimensions.plantDiameter.value, dimensions.plantDiameter.unit) * scale}px`,
                    height: `${convertToMeters(dimensions.plantDiameter.value, dimensions.plantDiameter.unit) * scale}px`,
                    left: `${plant.x * scale}px`,
                    top: `${plant.y * scale}px`
                  }}
                />
              ))}

              {showDimensions && results.plantPositions.length >= 1 && (
                <>
                  {results.plantPositions.slice(0, 2).map((plant, index) => (
                    <React.Fragment key={index}>
                      <div
                        className="absolute border-2 border-dashed border-black rounded-full"
                        style={{
                          width: `${(convertToMeters(dimensions.plantDiameter.value, dimensions.plantDiameter.unit) + convertToMeters(dimensions.spacing.value, dimensions.spacing.unit) / 2) * scale}px`,
                          height: `${(convertToMeters(dimensions.plantDiameter.value, dimensions.plantDiameter.unit) + convertToMeters(dimensions.spacing.value, dimensions.spacing.unit) / 2) * scale}px`,
                          left: `${plant.x * scale - (convertToMeters(dimensions.spacing.value, dimensions.spacing.unit) * scale) / 4}px`,
                          top: `${plant.y * scale - (convertToMeters(dimensions.spacing.value, dimensions.spacing.unit) * scale) / 4}px`,
                          zIndex: 10
                        }}
                      />
                      <div
                        className="absolute bg-white px-2 text-sm font-medium text-black"
                        style={{
                          left: `${plant.x * scale + (convertToMeters(dimensions.plantDiameter.value, dimensions.plantDiameter.unit) * scale) / 2}px`,
                          top: `${plant.y * scale - 20}px`,
                          zIndex: 20
                        }}
                      >
                        Spacing: {dimensions.spacing.value / 2} {dimensions.spacing.unit}
                      </div>
                    </React.Fragment>
                  ))}
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TheDesignPage;}