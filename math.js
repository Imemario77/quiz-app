const math = [
  {
    index: 1,
    question: "Simplify the expression: 3x + 2y - 5x - 4y",
    correct_answer: "-2x - 2y",
    options: ["-2x - 2y", "2x + 2y", "-8x - 6y", "5x - 6y"],
  },
  {
    index: 2,
    question:
      "What is the area of a rectangle with length 8 cm and width 5 cm?",
    correct_answer: "40 square cm",
    options: ["40 square cm", "13 square cm", "30 square cm", "24 square cm"],
  },
  {
    index: 3,
    question: "Solve for x: 2x + 7 = 15",
    correct_answer: "x = 4",
    options: ["x = 4", "x = 8", "x = 5", "x = 3"],
  },
  {
    index: 4,
    question: "What is the value of pi (π) correct to two decimal places?",
    correct_answer: "3.14",
    options: ["3.14", "3.141", "3.142", "3.13"],
  },
  {
    index: 5,
    question:
      "If the radius of a circle is 6 cm, what is the circumference of the circle (use π = 3.14)?",
    correct_answer: "37.68 cm",
    options: ["37.68 cm", "18.84 cm", "12.56 cm", "75.36 cm"],
  },
  {
    index: 6,
    question: "Solve for y: 2y - 3 = 9",
    correct_answer: "y = 6",
    options: ["y = 6", "y = 4", "y = 5", "y = 7"],
  },
  {
    index: 7,
    question: "What is the square root of 144?",
    correct_answer: "12",
    options: ["12", "14", "10", "16"],
  },
  {
    index: 8,
    question: "If 3x + 5 = 20, what is the value of x?",
    correct_answer: "x = 5",
    options: ["x = 5", "x = 8", "x = 7", "x = 6"],
  },
  {
    index: 9,
    question: "Expand and simplify: (x + 2)(x - 3)",
    correct_answer: "x^2 - x - 6",
    options: ["x^2 - x - 6", "x^2 - x + 6", "x^2 + x - 6", "x^2 + x + 6"],
  },
  {
    index: 10,
    question: "What is the value of 5! (factorial)?",
    correct_answer: "120",
    options: ["120", "20", "24", "720"],
  },
  {
    index: 11,
    question:
      "If a square has a perimeter of 28 cm, what is the length of each side?",
    correct_answer: "7 cm",
    options: ["7 cm", "6 cm", "8 cm", "5 cm"],
  },
  {
    index: 12,
    question: "Solve for x: 2(x - 4) = 10",
    correct_answer: "x = 9",
    options: ["x = 9", "x = 8", "x = 6", "x = 7"],
  },
  {
    index: 13,
    question: "What is the value of tan(45°)?",
    correct_answer: "1",
    options: ["1", "0", "√2", "-1"],
  },
  {
    index: 14,
    question: "If f(x) = 3x^2 + 2x - 5, what is f(2)?",
    correct_answer: "11",
    options: ["11", "17", "7", "9"],
  },
  {
    index: 15,
    question: "Simplify the expression: 4(3x - 5) - 2(2x + 1)",
    correct_answer: "4x - 22",
    options: ["4x - 22", "4x - 6", "12x - 22", "6x - 6"],
  },
  {
    index: 16,
    question: "What is the sum of the interior angles of a quadrilateral?",
    correct_answer: "360 degrees",
    options: ["360 degrees", "180 degrees", "270 degrees", "450 degrees"],
  },
  {
    index: 17,
    question: "If log₂(x) = 3, what is x?",
    correct_answer: "8",
    options: ["8", "6", "4", "10"],
  },
  {
    index: 18,
    question: "What is the value of sin(30°)?",
    correct_answer: "0.5",
    options: ["0.5", "1", "0.866", "0"],
  },
  {
    index: 19,
    question: "Simplify the expression: 2(3x + 4) - 3(2x - 1)",
    correct_answer: "x + 14",
    options: ["x + 14", "5x + 11", "x - 14", "x + 8"],
  },
  {
    index: 20,
    question: "What is the value of 7²?",
    correct_answer: "49",
    options: ["49", "64", "36", "81"],
  },
  {
    index: 21,
    question:
      "If a triangle has angles measuring 60°, 60°, and 60°, what type of triangle is it?",
    correct_answer: "Equilateral",
    options: ["Equilateral", "Isosceles", "Scalene", "Right"],
  },
  {
    index: 22,
    question: "Simplify the expression: 3a + 2(4a - 5) - a",
    correct_answer: "5a - 10",
    options: ["5a - 10", "8a - 7", "6a - 7", "4a - 5"],
  },
  {
    index: 23,
    question: "What is the value of log₁₀(100)?",
    correct_answer: "2",
    options: ["2", "1", "10", "0"],
  },
  {
    index: 24,
    question:
      "If a square has an area of 64 square units, what is the length of each side?",
    correct_answer: "8 units",
    options: ["8 units", "16 units", "32 units", "4 units"],
  },
  {
    index: 25,
    question: "Solve for x: x² - 4 = 0",
    correct_answer: "x = ±2",
    options: ["x = ±2", "x = ±4", "x = ±1", "x = ±3"],
  },
  {
    index: 26,
    question: "What is the value of sin(90°)?",
    correct_answer: "1",
    options: ["1", "0", "-1", "0.5"],
  },
  {
    index: 27,
    question: "If f(x) = 2x + 3, what is f(5)?",
    correct_answer: "13",
    options: ["13", "10", "17", "8"],
  },
  {
    index: 28,
    question: "What is the value of cos(60°)?",
    correct_answer: "0.5",
    options: ["0.5", "1", "0.866", "0"],
  },
  {
    index: 29,
    question: "What is the volume of a cube with side length 6 cm?",
    correct_answer: "216 cubic cm",
    options: ["216 cubic cm", "36 cubic cm", "72 cubic cm", "108 cubic cm"],
  },
  {
    index: 30,
    question: "If log₃(x) = 2, what is x?",
    correct_answer: "9",
    options: ["9", "3", "6", "12"],
  },
  {
    index: 31,
    question: "What is the value of cos(0°)?",
    correct_answer: "1",
    options: ["1", "0", "-1", "0.5"],
  },
  {
    index: 32,
    question: "Solve for x: 5(x - 3) = 4",
    correct_answer: "x = 7/5",
    options: ["x = 7/5", "x = 7", "x = 1", "x = 3"],
  },
  {
    index: 33,
    question: "What is the value of log₂(16)?",
    correct_answer: "4",
    options: ["4", "8", "2", "16"],
  },
  {
    index: 34,
    question: "What is the value of sin(0°)?",
    correct_answer: "0",
    options: ["0", "1", "-1", "0.5"],
  },
  {
    index: 35,
    question: "If f(x) = x² + 4x + 4, what is f(-2)?",
    correct_answer: "0",
    options: ["0", "-4", "4", "-8"],
  },
  {
    index: 36,
    question: "Simplify the expression: 3(2x - 4) + 4(3x + 5)",
    correct_answer: "22x + 8",
    options: ["22x + 8", "18x + 4", "16x + 10", "20x + 6"],
  },
  {
    index: 37,
    question: "What is the value of 2³?",
    correct_answer: "8",
    options: ["8", "6", "16", "4"],
  },
  {
    index: 38,
    question:
      "If a triangle has angles measuring 45°, 45°, and 90°, what type of triangle is it?",
    correct_answer: "Right",
    options: ["Right", "Equilateral", "Isosceles", "Scalene"],
  },
  {
    index: 39,
    question: "What is the value of cos(45°)?",
    correct_answer: "0.707",
    options: ["0.707", "1", "0.5", "0"],
  },
  {
    index: 40,
    question: "If f(x) = 5x - 2, what is f(-3)?",
    correct_answer: "-17",
    options: ["-17", "13", "-13", "17"],
  },
  {
    index: 41,
    question: "Solve for x: 2x² - 8 = 0",
    correct_answer: "x = ±2",
    options: ["x = ±2", "x = ±4", "x = ±1", "x = ±3"],
  },
  {
    index: 42,
    question: "What is the value of tan(60°)?",
    correct_answer: "√3",
    options: ["√3", "1", "0.5", "0"],
  },
  {
    index: 43,
    question:
      "What is the perimeter of a rectangle with length 6 cm and width 4 cm?",
    correct_answer: "20 cm",
    options: ["20 cm", "24 cm", "10 cm", "16 cm"],
  },
  {
    index: 44,
    question: "Solve for x: 3(x + 2) = 15",
    correct_answer: "x = 3",
    options: ["x = 3", "x = 4", "x = 5", "x = 6"],
  },
  {
    index: 45,
    question: "What is the value of log₄(16)?",
    correct_answer: "2",
    options: ["2", "4", "8", "16"],
  },
  {
    index: 46,
    question: "What is the value of sin(60°)?",
    correct_answer: "0.866",
    options: ["0.866", "1", "0.5", "0"],
  },
  {
    index: 47,
    question: "If f(x) = x³ - 2x² + x + 3, what is f(-1)?",
    correct_answer: "1",
    options: ["1", "4", "-1", "-4"],
  },
  {
    index: 48,
    question: "Simplify the expression: 2x - 3 + 4x - 5",
    correct_answer: "6x - 8",
    options: ["6x - 8", "6x + 8", "8x - 6", "8x + 6"],
  },
  {
    index: 49,
    question: "What is the value of 3⁴?",
    correct_answer: "81",
    options: ["81", "27", "64", "9"],
  },
  {
    index: 50,
    question:
      "If a triangle has angles measuring 30°, 60°, and 90°, what type of triangle is it?",
    correct_answer: "Right",
    options: ["Right", "Equilateral", "Isosceles", "Scalene"],
  },
  {
    index: 51,
    question: "What is the value of cos(30°)?",
    correct_answer: "0.866",
    options: ["0.866", "1", "0.5", "0"],
  },
  {
    index: 52,
    question: "If f(x) = 4x - 1, what is f(3)?",
    correct_answer: "11",
    options: ["11", "13", "9", "7"],
  },
  {
    index: 53,
    question: "Solve for x: x² - 6x + 8 = 0",
    correct_answer: "x = 2 or x = 4",
    options: [
      "x = 2 or x = 4",
      "x = 3 or x = 5",
      "x = 1 or x = 7",
      "x = 0 or x = 6",
    ],
  },
  {
    index: 54,
    question: "What is the value of log₅(25)?",
    correct_answer: "2",
    options: ["2", "4", "5", "10"],
  },
  {
    index: 55,
    question: "What is the value of tan(30°)?",
    correct_answer: "0.577",
    options: ["0.577", "1", "0.5", "0"],
  },
  {
    index: 56,
    question: "What is the area of a triangle with base 6 cm and height 8 cm?",
    correct_answer: "24 square cm",
    options: ["24 square cm", "12 square cm", "48 square cm", "36 square cm"],
  },
  {
    index: 57,
    question: "Simplify the expression: 2x² + 3x - 5 - (x² - 2x + 4)",
    correct_answer: "x² + 5x - 9",
    options: ["x² + 5x - 9", "x² + 5x + 9", "x² + 3x - 1", "x² + 3x + 1"],
  },
  {
    index: 58,
    question: "What is the value of 2⁵?",
    correct_answer: "32",
    options: ["32", "16", "8", "64"],
  },
  {
    index: 59,
    question:
      "If a triangle has angles measuring 90°, 45°, and 45°, what type of triangle is it?",
    correct_answer: "Right",
    options: ["Right", "Equilateral", "Isosceles", "Scalene"],
  },
  {
    index: 60,
    question: "What is the value of sin(45°)?",
    correct_answer: "0.707",
    options: ["0.707", "1", "0.5", "0"],
  },
  {
    index: 61,
    question: "Simplify the expression: 3a² - 4(2a - 3) + a",
    correct_answer: "3a² + 5a - 12",
    options: [
      "3a² + 5a - 12",
      "3a² - 5a - 12",
      "3a² - 5a + 12",
      "3a² + 5a + 12",
    ],
  },
  {
    index: 62,
    question: "What is the value of log₃(9)?",
    correct_answer: "2",
    options: ["2", "3", "4", "9"],
  },
  {
    index: 63,
    question: "What is the area of a circle with radius 7 cm (use π = 3.14)?",
    correct_answer: "153.86 square cm",
    options: [
      "153.86 square cm",
      "43.96 square cm",
      "197.96 square cm",
      "87.92 square cm",
    ],
  },
  {
    index: 64,
    question: "Solve for x: 3(x - 4) = 21",
    correct_answer: "x = 9",
    options: ["x = 9", "x = 8", "x = 7", "x = 6"],
  },
  {
    index: 65,
    question: "What is the value of log₅(125)?",
    correct_answer: "3",
    options: ["3", "5", "25", "625"],
  },
  {
    index: 66,
    question: "What is the value of tan(0°)?",
    correct_answer: "0",
    options: ["0", "1", "√3", "∞"],
  },
  {
    index: 67,
    question: "If f(x) = 2x² - 3x + 1, what is f(1)?",
    correct_answer: "0",
    options: ["0", "1", "2", "3"],
  },
  {
    index: 68,
    question: "Simplify the expression: 4(x - 2) - 3(x + 1)",
    correct_answer: "x - 11",
    options: ["x - 11", "x - 9", "x + 9", "x + 11"],
  },
  {
    index: 69,
    question: "What is the value of 4²?",
    correct_answer: "16",
    options: ["16", "8", "6", "12"],
  },
  {
    index: 70,
    question:
      "If a triangle has angles measuring 60°, 70°, and 50°, what type of triangle is it?",
    correct_answer: "Scalene",
    options: ["Scalene", "Equilateral", "Isosceles", "Right"],
  },
  {
    index: 71,
    question: "What is the value of cos(45°)?",
    correct_answer: "0.707",
    options: ["0.707", "1", "0.5", "0"],
  },
  {
    index: 72,
    question: "If f(x) = x³ + 2x² + x + 3, what is f(-1)?",
    correct_answer: "3",
    options: ["3", "4", "-3", "-4"],
  },
  {
    index: 73,
    question: "Simplify the expression: 5(x + 3) + 2(2x - 1)",
    correct_answer: "9x + 13",
    options: ["9x + 13", "7x + 11", "9x + 11", "7x + 13"],
  },
  {
    index: 74,
    question: "What is the value of 5⁴?",
    correct_answer: "625",
    options: ["625", "125", "25", "1250"],
  },
  {
    index: 75,
    question:
      "If a triangle has angles measuring 30°, 30°, and 120°, what type of triangle is it?",
    correct_answer: "Scalene",
    options: ["Scalene", "Equilateral", "Isosceles", "Right"],
  },
  {
    index: 76,
    question: "What is the value of tan(45°)?",
    correct_answer: "1",
    options: ["1", "0", "√2", "-1"],
  },
  {
    index: 77,
    question: "What is the volume of a sphere with radius 4 cm (use π = 3.14)?",
    correct_answer: "268.08 cubic cm",
    options: [
      "268.08 cubic cm",
      "201.06 cubic cm",
      "402.12 cubic cm",
      "536.16 cubic cm",
    ],
  },
  {
    index: 78,
    question: "Simplify the expression: 3x² - 2(4x - 5) + 2",
    correct_answer: "3x² + 8x - 8",
    options: ["3x² + 8x - 8", "3x² + 8x + 8", "3x² + 8x - 2", "3x² + 8x + 2"],
  },
  {
    index: 79,
    question: "What is the value of log₁₀(1000)?",
    correct_answer: "3",
    options: ["3", "2", "1", "4"],
  },
  {
    index: 80,
    question:
      "If a square has a perimeter of 24 cm, what is the length of each side?",
    correct_answer: "6 cm",
    options: ["6 cm", "8 cm", "12 cm", "4 cm"],
  },
  {
    index: 81,
    question: "What is the value of sin(90°)?",
    correct_answer: "1",
    options: ["1", "0", "-1", "0.5"],
  },
  {
    index: 82,
    question: "If f(x) = 3x + 2, what is f(-4)?",
    correct_answer: "-10",
    options: ["-10", "-6", "6", "10"],
  },
  {
    index: 83,
    question: "What is the value of cos(90°)?",
    correct_answer: "0",
    options: ["0", "1", "-1", "0.5"],
  },
  {
    index: 84,
    question:
      "If a triangle has angles measuring 90°, 60°, and 30°, what type of triangle is it?",
    correct_answer: "Right",
    options: ["Right", "Equilateral", "Isosceles", "Scalene"],
  },
  {
    index: 85,
    question: "What is the value of tan(90°)?",
    correct_answer: "∞",
    options: ["∞", "0", "1", "√3"],
  },
  {
    index: 86,
    question: "Simplify the expression: 2(3x - 5) + 3(2x + 1)",
    correct_answer: "12x - 7",
    options: ["12x - 7", "10x - 7", "12x + 7", "10x + 7"],
  },
  {
    index: 87,
    question: "What is the value of log₄(64)?",
    correct_answer: "3",
    options: ["3", "4", "8", "16"],
  },
  {
    index: 88,
    question: "What is the area of a circle with radius 5 cm (use π = 3.14)?",
    correct_answer: "78.5 square cm",
    options: [
      "78.5 square cm",
      "31.4 square cm",
      "157 square cm",
      "39.25 square cm",
    ],
  },
  {
    index: 89,
    question: "Solve for x: 4(x - 3) = 12",
    correct_answer: "x = 6",
    options: ["x = 6", "x = 8", "x = 4", "x = 5"],
  },
  {
    index: 90,
    question: "What is the value of log₉(81)?",
    correct_answer: "2",
    options: ["2", "3", "4", "9"],
  },
  {
    index: 91,
    question: "What is the perimeter of a square with side length 10 cm?",
    correct_answer: "40 cm",
    options: ["40 cm", "20 cm", "30 cm", "50 cm"],
  },
  {
    index: 92,
    question: "What is the value of sin(180°)?",
    correct_answer: "0",
    options: ["0", "1", "-1", "0.5"],
  },
  {
    index: 93,
    question: "If f(x) = 2x - 1, what is f(0)?",
    correct_answer: "-1",
    options: ["-1", "0", "1", "2"],
  },
  {
    index: 94,
    question: "What is the value of cos(180°)?",
    correct_answer: "-1",
    options: ["-1", "0", "1", "0.5"],
  },
  {
    index: 95,
    question:
      "If a triangle has angles measuring 120°, 30°, and 30°, what type of triangle is it?",
    correct_answer: "Scalene",
    options: ["Scalene", "Equilateral", "Isosceles", "Right"],
  },
  {
    index: 96,
    question: "What is the value of tan(180°)?",
    correct_answer: "0",
    options: ["0", "1", "√3", "∞"],
  },
  {
    index: 97,
    question: "Simplify the expression: 5x² - 4(2x - 3) - 3x",
    correct_answer: "5x² - 8x + 12",
    options: ["5x² - 8x + 12", "5x² - 8x - 12", "5x² - 8x + 6", "5x² - 8x - 6"],
  },
  {
    index: 98,
    question: "What is the value of 6⁴?",
    correct_answer: "1296",
    options: ["1296", "216", "36", "7776"],
  },
  {
    index: 99,
    question:
      "If a triangle has angles measuring 45°, 45°, and 90°, what type of triangle is it?",
    correct_answer: "Right",
    options: ["Right", "Equilateral", "Isosceles", "Scalene"],
  },
  {
    index: 100,
    question: "What is the value of sin(270°)?",
    correct_answer: "-1",
    options: ["-1", "0", "1", "0.5"],
  },
  {
    index: 101,
    question: "Solve for x: x² + 5x + 6 = 0",
    correct_answer: "x = -2 or x = -3",
    options: [
      "x = -2 or x = -3",
      "x = -1 or x = -4",
      "x = 1 or x = 2",
      "x = 3 or x = 4",
    ],
  },
  {
    index: 102,
    question: "What is the value of cos(270°)?",
    correct_answer: "0",
    options: ["0", "1", "-1", "0.5"],
  },
  {
    index: 103,
    question: "If f(x) = x - 5, what is f(7)?",
    correct_answer: "2",
    options: ["2", "3", "4", "5"],
  },
  {
    index: 104,
    question: "What is the value of tan(270°)?",
    correct_answer: "∞",
    options: ["∞", "0", "1", "√3"],
  },
  {
    index: 105,
    question: "Simplify the expression: 4(x - 3) + 3(x + 2)",
    correct_answer: "7x - 6",
    options: ["7x - 6", "7x + 6", "7x - 12", "7x + 12"],
  },
  {
    index: 106,
    question: "What is the value of log₇(49)?",
    correct_answer: "2",
    options: ["2", "4", "6", "7"],
  },
  {
    index: 107,
    question:
      "What is the area of a circle with diameter 10 cm (use π = 3.14)?",
    correct_answer: "78.5 square cm",
    options: [
      "78.5 square cm",
      "31.4 square cm",
      "157 square cm",
      "39.25 square cm",
    ],
  },
  {
    index: 108,
    question: "Solve for x: 2(x + 4) = 18",
    correct_answer: "x = 5",
    options: ["x = 5", "x = 6", "x = 7", "x = 8"],
  },
  {
    index: 109,
    question: "What is the value of log₂(32)?",
    correct_answer: "5",
    options: ["5", "4", "3", "6"],
  },
  {
    index: 110,
    question: "What is the perimeter of a square with side length 15 cm?",
    correct_answer: "60 cm",
    options: ["60 cm", "45 cm", "30 cm", "75 cm"],
  },
  {
    index: 111,
    question: "What is the value of sin(120°)?",
    correct_answer: "0.866",
    options: ["0.866", "1", "0.5", "0"],
  },
  {
    index: 112,
    question: "If f(x) = 3x² + 2x + 1, what is f(0)?",
    correct_answer: "1",
    options: ["1", "0", "3", "5"],
  },
  {
    index: 113,
    question: "What is the value of cos(120°)?",
    correct_answer: "-0.5",
    options: ["-0.5", "0", "0.5", "1"],
  },
  {
    index: 114,
    question:
      "If a triangle has angles measuring 120°, 30°, and 30°, what type of triangle is it?",
    correct_answer: "Scalene",
    options: ["Scalene", "Equilateral", "Isosceles", "Right"],
  },
  {
    index: 115,
    question: "What is the value of tan(120°)?",
    correct_answer: "-1.732",
    options: ["-1.732", "1", "0.5", "0"],
  },
  {
    index: 116,
    question: "Simplify the expression: 3x² - 2(x - 3) + 2",
    correct_answer: "3x² + 2x + 8",
    options: ["3x² + 2x + 8", "3x² + 2x - 8", "3x² - 2x + 8", "3x² - 2x - 8"],
  },
  {
    index: 117,
    question: "What is the value of log₉(27)?",
    correct_answer: "3",
    options: ["3", "2", "4", "9"],
  },
  {
    index: 118,
    question:
      "What is the area of a rectangle with length 8 cm and width 5 cm?",
    correct_answer: "40 square cm",
    options: ["40 square cm", "13 square cm", "20 square cm", "32 square cm"],
  },
  {
    index: 119,
    question: "Solve for x: x² - 9 = 0",
    correct_answer: "x = ±3",
    options: ["x = ±3", "x = ±6", "x = ±9", "x = ±12"],
  },
  {
    index: 120,
    question: "Simplify the expression: 2(3x - 4) - 3(2x + 1)",
    correct_answer: "x - 11",
    options: ["x - 11", "x - 9", "x + 9", "x + 11"],
  },
  {
    index: 121,
    question: "What is the value of 9²?",
    correct_answer: "81",
    options: ["81", "18", "27", "36"],
  },
  {
    index: 122,
    question:
      "If a triangle has angles measuring 60°, 90°, and 30°, what type of triangle is it?",
    correct_answer: "Right",
    options: ["Right", "Equilateral", "Isosceles", "Scalene"],
  },
  {
    index: 123,
    question: "What is the value of sin(60°)?",
    correct_answer: "0.866",
    options: ["0.866", "1", "0.5", "0"],
  },
  {
    index: 124,
    question: "If f(x) = 4x - 3, what is f(-2)?",
    correct_answer: "-11",
    options: ["-11", "-5", "5", "11"],
  },
  {
    index: 125,
    question: "What is the value of cos(60°)?",
    correct_answer: "0.5",
    options: ["0.5", "1", "0", "-1"],
  },
  {
    index: 126,
    question:
      "If a triangle has angles measuring 45°, 90°, and 45°, what type of triangle is it?",
    correct_answer: "Right",
    options: ["Right", "Equilateral", "Isosceles", "Scalene"],
  },
  {
    index: 127,
    question: "What is the value of tan(60°)?",
    correct_answer: "1.732",
    options: ["1.732", "1", "0.5", "0"],
  },
  {
    index: 128,
    question: "Simplify the expression: 3x² - 4(2x + 1) + 2",
    correct_answer: "3x² - 8x - 6",
    options: ["3x² - 8x - 6", "3x² - 8x + 6", "3x² - 8x + 2", "3x² - 8x - 2"],
  },
  {
    index: 129,
    question: "What is the value of log₆(36)?",
    correct_answer: "2",
    options: ["2", "3", "4", "6"],
  },
  {
    index: 130,
    question:
      "What is the area of a rectangle with length 12 cm and width 6 cm?",
    correct_answer: "72 square cm",
    options: ["72 square cm", "18 square cm", "36 square cm", "24 square cm"],
  },
  {
    index: 131,
    question: "Solve for x: 5(x - 2) = 3x - 7",
    correct_answer: "x = 3",
    options: ["x = 3", "x = 4", "x = 5", "x = 6"],
  },
  {
    index: 132,
    question: "What is the value of log₄(16)?",
    correct_answer: "2",
    options: ["2", "4", "8", "16"],
  },
  {
    index: 133,
    question:
      "What is the perimeter of a rectangle with length 9 cm and width 5 cm?",
    correct_answer: "28 cm",
    options: ["28 cm", "14 cm", "18 cm", "45 cm"],
  },
  {
    index: 134,
    question: "What is the value of sin(45°)?",
    correct_answer: "0.707",
    options: ["0.707", "1", "0.5", "0"],
  },
  {
    index: 135,
    question: "If f(x) = 2x² - 5x + 3, what is f(1)?",
    correct_answer: "0",
    options: ["0", "1", "2", "3"],
  },
  {
    index: 136,
    question: "What is the value of cos(45°)?",
    correct_answer: "0.707",
    options: ["0.707", "1", "0.5", "0"],
  },
  {
    index: 137,
    question:
      "If a triangle has angles measuring 30°, 45°, and 105°, what type of triangle is it?",
    correct_answer: "Scalene",
    options: ["Scalene", "Equilateral", "Isosceles", "Right"],
  },
  {
    index: 138,
    question: "What is the value of tan(45°)?",
    correct_answer: "1",
    options: ["1", "0", "√2", "-1"],
  },
  {
    index: 139,
    question: "Simplify the expression: 4(x - 3) - 3(2x + 1)",
    correct_answer: "x - 15",
    options: ["x - 15", "x - 9", "x + 9", "x + 15"],
  },
  {
    index: 140,
    question: "What is the value of 6⁶?",
    correct_answer: "46656",
    options: ["46656", "36", "216", "7776"],
  },
  {
    index: 141,
    question:
      "If a triangle has angles measuring 45°, 45°, and 90°, what type of triangle is it?",
    correct_answer: "Right",
    options: ["Right", "Equilateral", "Isosceles", "Scalene"],
  },
  {
    index: 142,
    question: "What is the value of sin(30°)?",
    correct_answer: "0.5",
    options: ["0.5", "1", "0.707", "0"],
  },
  {
    index: 143,
    question: "If f(x) = x² + 3x - 4, what is f(-2)?",
    correct_answer: "0",
    options: ["0", "1", "2", "3"],
  },
  {
    index: 144,
    question: "What is the value of cos(30°)?",
    correct_answer: "0.866",
    options: ["0.866", "1", "0.5", "0"],
  },
  {
    index: 145,
    question:
      "If a triangle has angles measuring 60°, 60°, and 60°, what type of triangle is it?",
    correct_answer: "Equilateral",
    options: ["Equilateral", "Right", "Isosceles", "Scalene"],
  },
  {
    index: 146,
    question: "What is the value of tan(30°)?",
    correct_answer: "0.577",
    options: ["0.577", "1", "0.5", "0"],
  },
  {
    index: 147,
    question: "Simplify the expression: 3(x + 4) - 2(2x - 3)",
    correct_answer: "7 - 2x",
    options: ["7 - 2x", "7 + 2x", "7x - 2", "7 - x"],
  },
  {
    index: 148,
    question: "What is the value of log₅(25)?",
    correct_answer: "2",
    options: ["2", "3", "4", "5"],
  },
  {
    index: 149,
    question:
      "What is the area of a parallelogram with base 10 cm and height 6 cm?",
    correct_answer: "60 square cm",
    options: ["60 square cm", "36 square cm", "30 square cm", "45 square cm"],
  },
  {
    index: 150,
    question: "Solve for x: 2x² - 11x + 5 = 0",
    correct_answer: "x = 1 or x = 5",
    options: [
      "x = 1 or x = 5",
      "x = -1 or x = -5",
      "x = -1 or x = 5",
      "x = 1 or x = -5",
    ],
  },
  {
    index: 151,
    question: "What is the value of log₈(64)?",
    correct_answer: "2",
    options: ["2", "4", "8", "16"],
  },
  {
    index: 152,
    question:
      "What is the perimeter of a parallelogram with side lengths 8 cm and 12 cm?",
    correct_answer: "40 cm",
    options: ["40 cm", "32 cm", "24 cm", "56 cm"],
  },
  {
    index: 153,
    question: "What is the value of sin(60°)?",
    correct_answer: "0.866",
    options: ["0.866", "1", "0.5", "0"],
  },
  {
    index: 154,
    question: "If f(x) = x² - 2x + 1, what is f(2)?",
    correct_answer: "1",
    options: ["1", "0", "-1", "2"],
  },
  {
    index: 155,
    question: "What is the value of cos(60°)?",
    correct_answer: "0.5",
    options: ["0.5", "1", "0", "-1"],
  },
  {
    index: 156,
    question:
      "If a triangle has angles measuring 60°, 90°, and 30°, what type of triangle is it?",
    correct_answer: "Right",
    options: ["Right", "Equilateral", "Isosceles", "Scalene"],
  },
  {
    index: 157,
    question: "What is the value of tan(60°)?",
    correct_answer: "√3",
    options: ["√3", "1", "0.5", "0"],
  },
  {
    index: 158,
    question: "Simplify the expression: 5(x + 3) + 2(2x - 1)",
    correct_answer: "9x + 13",
    options: ["9x + 13", "7x + 11", "9x + 11", "7x + 13"],
  },
  {
    index: 159,
    question: "What is the value of 5⁴?",
    correct_answer: "625",
    options: ["625", "125", "25", "1250"],
  },
  {
    index: 160,
    question:
      "If a triangle has angles measuring 30°, 30°, and 120°, what type of triangle is it?",
    correct_answer: "Scalene",
    options: ["Scalene", "Equilateral", "Isosceles", "Right"],
  },
  {
    index: 161,
    question: "What is the value of tan(45°)?",
    correct_answer: "1",
    options: ["1", "0", "√2", "-1"],
  },
  {
    index: 162,
    question: "What is the volume of a sphere with radius 4 cm (use π = 3.14)?",
    correct_answer: "268.08 cubic cm",
    options: [
      "268.08 cubic cm",
      "201.06 cubic cm",
      "402.12 cubic cm",
      "536.16 cubic cm",
    ],
  },
  {
    index: 163,
    question: "Simplify the expression: 3x² - 2(4x - 5) + 2",
    correct_answer: "3x² + 8x - 8",
    options: ["3x² + 8x - 8", "3x² + 8x + 8", "3x² + 8x - 2", "3x² + 8x + 2"],
  },
  {
    index: 164,
    question: "What is the value of log₁₀(1000)?",
    correct_answer: "3",
    options: ["3", "2", "1", "4"],
  },
  {
    index: 165,
    question:
      "If a square has a perimeter of 24 cm, what is the length of each side?",
    correct_answer: "6 cm",
    options: ["6 cm", "8 cm", "12 cm", "4 cm"],
  },
  {
    index: 166,
    question: "What is the value of sin(90°)?",
    correct_answer: "1",
    options: ["1", "0", "-1", "0.5"],
  },
  {
    index: 167,
    question: "If f(x) = 3x² - 4x + 2, what is f(1)?",
    correct_answer: "1",
    options: ["1", "0", "-1", "2"],
  },
  {
    index: 168,
    question: "What is the value of cos(90°)?",
    correct_answer: "0",
    options: ["0", "1", "-1", "0.5"],
  },
  {
    index: 169,
    question:
      "If a triangle has angles measuring 45°, 45°, and 90°, what type of triangle is it?",
    correct_answer: "Right",
    options: ["Right", "Equilateral", "Isosceles", "Scalene"],
  },
  {
    index: 170,
    question: "What is the value of tan(90°)?",
    correct_answer: "∞",
    options: ["∞", "0", "1", "√3"],
  },
  {
    index: 171,
    question: "Simplify the expression: 2(x - 3) + 3(x + 2)",
    correct_answer: "5x + 1",
    options: ["5x + 1", "5x - 1", "5x + 5", "5x - 5"],
  },
  {
    index: 172,
    question: "What is the value of log₄(64)?",
    correct_answer: "3",
    options: ["3", "4", "8", "16"],
  },
  {
    index: 173,
    question: "What is the area of a circle with radius 7 cm (use π = 3.14)?",
    correct_answer: "153.86 square cm",
    options: [
      "153.86 square cm",
      "38.46 square cm",
      "307.72 square cm",
      "77.18 square cm",
    ],
  },
  {
    index: 174,
    question: "Solve for x: 3x² - 25 = 0",
    correct_answer: "x = ±5",
    options: ["x = ±5", "x = ±25", "x = ±3", "x = ±125"],
  },
  {
    index: 175,
    question: "What is the value of log₂(64)?",
    correct_answer: "6",
    options: ["6", "4", "8", "16"],
  },
  {
    index: 176,
    question: "What is the perimeter of a square with side length 10 cm?",
    correct_answer: "40 cm",
    options: ["40 cm", "30 cm", "50 cm", "20 cm"],
  },
  {
    index: 177,
    question: "What is the value of 2 + 2?",
    correct_answer: "4",
    options: ["4", "3", "5", "6"],
  },
  {
    index: 178,
    question: "What is the value of 3 * 5?",
    correct_answer: "15",
    options: ["15", "8", "10", "12"],
  },
  {
    index: 179,
    question: "What is the square root of 16?",
    correct_answer: "4",
    options: ["4", "5", "3", "6"],
  },
  {
    index: 180,
    question: "What is the value of 8 / 2?",
    correct_answer: "4",
    options: ["4", "3", "2", "6"],
  },
  {
    index: 181,
    question: "What is the value of 7 - 3?",
    correct_answer: "4",
    options: ["4", "5", "3", "2"],
  },
  {
    index: 182,
    question: "What is the value of 10 * 2?",
    correct_answer: "20",
    options: ["20", "18", "22", "25"],
  },
  {
    index: 183,
    question: "What is the square root of 25?",
    correct_answer: "5",
    options: ["5", "6", "4", "7"],
  },
  {
    index: 184,
    question: "What is the value of 12 / 3?",
    correct_answer: "4",
    options: ["4", "3", "5", "6"],
  },
  {
    index: 185,
    question: "What is the value of 9 - 5?",
    correct_answer: "4",
    options: ["4", "5", "3", "6"],
  },
  {
    index: 186,
    question: "What is the value of 15 / 3?",
    correct_answer: "5",
    options: ["5", "4", "6", "3"],
  },
  {
    index: 187,
    question: "What is the value of 20 - 16?",
    correct_answer: "4",
    options: ["4", "5", "3", "6"],
  },
  {
    index: 188,
    question: "What is the value of 3 * 6?",
    correct_answer: "18",
    options: ["18", "16", "15", "20"],
  },
  {
    index: 189,
    question: "What is the square root of 36?",
    correct_answer: "6",
    options: ["6", "5", "7", "8"],
  },
  {
    index: 190,
    question: "What is the value of 24 / 6?",
    correct_answer: "4",
    options: ["4", "5", "6", "3"],
  },
  {
    index: 191,
    question: "What is the value of 10 - 6?",
    correct_answer: "4",
    options: ["4", "5", "3", "6"],
  },
  {
    index: 192,
    question: "What is the result of 3^4?",
    correct_answer: "81",
    options: ["81", "64", "27", "16"],
  },
  {
    index: 193,
    question: "Solve for x: 2x + 5 = 15",
    correct_answer: "5",
    options: ["5", "10", "15", "20"],
  },
  {
    index: 194,
    question: "What is the value of pi (π) to two decimal places?",
    correct_answer: "3.14",
    options: ["3.14", "3.16", "3.12", "3.18"],
  },
  {
    index: 195,
    question: "What is the derivative of f(x) = 3x^2?",
    correct_answer: "6x",
    options: ["6x", "3x^2", "2x", "9x"],
  },
  {
    index: 196,
    question: "Solve for x: log₂(x) = 4",
    correct_answer: "16",
    options: ["16", "8", "32", "64"],
  },
  {
    index: 197,
    question: "What is the integral of 2x with respect to x?",
    correct_answer: "x^2 + C",
    options: ["x^2 + C", "2x", "x^2", "2"],
  },
  {
    index: 198,
    question: "Simplify the expression: (2x^2)(3x^3)",
    correct_answer: "6x^5",
    options: ["6x^5", "5x^5", "6x^6", "5x^6"],
  },
  {
    index: 199,
    question: "What is the value of sin(π/3)?",
    correct_answer: "√3/2",
    options: ["√3/2", "1/2", "1", "√2/2"],
  },
  {
    index: 200,
    question: "If f(x) = x^3 - 4x^2 + 2x - 7, what is f'(x)?",
    correct_answer: "3x^2 - 8x + 2",
    options: ["3x^2 - 8x + 2", "3x^2 - 8x", "3x^2 - 4x + 2", "x^2 - 8x + 2"],
  },
  {
    index: 201,
    question: "What is the limit of (x^2 - 1)/(x - 1) as x approaches 1?",
    correct_answer: "2",
    options: ["2", "1", "0", "∞"],
  },
  {
    index: 202,
    question: "What is the value of cos(π/6)?",
    correct_answer: "√3/2",
    options: ["√3/2", "1/2", "1", "√2/2"],
  },
  {
    index: 203,
    question: "If f(x) = e^x, what is f'(x)?",
    correct_answer: "e^x",
    options: ["e^x", "e", "x^2", "ln(x)"],
  },
  {
    index: 204,
    question: "What is the value of log₄(64)?",
    correct_answer: "3",
    options: ["3", "4", "2", "5"],
  },
  {
    index: 205,
    question: "Solve for x: 2^x = 16",
    correct_answer: "4",
    options: ["4", "2", "8", "3"],
  },
  {
    index: 206,
    question: "What is the derivative of f(x) = ln(x)?",
    correct_answer: "1/x",
    options: ["1/x", "x", "ln(x)", "e^x"],
  },
  {
    index: 207,
    question: "What is the value of tan(π/4)?",
    correct_answer: "1",
    options: ["1", "√3", "0", "√2"],
  },
  {
    index: 208,
    question: "If f(x) = √x, what is f'(x)?",
    correct_answer: "1/(2√x)",
    options: ["1/(2√x)", "√x", "1/x", "2√x"],
  },
  {
    index: 209,
    question: "What is the value of sin(π/4)?",
    correct_answer: "√2/2",
    options: ["√2/2", "1/2", "1", "√3/2"],
  },
  {
    index: 210,
    question: "Solve for x: e^(2x) = 7",
    correct_answer: "(ln(7))/2",
    options: ["(ln(7))/2", "ln(7)", "2/ln(7)", "ln(14)"],
  },
  {
    index: 211,
    question: "What is the integral of sin(x) with respect to x?",
    correct_answer: "-cos(x) + C",
    options: ["-cos(x) + C", "sin(x) + C", "cos(x) + C", "-sin(x) + C"],
  },
  {
    index: 212,
    question: "What is the value of cos(π/3)?",
    correct_answer: "1/2",
    options: ["1/2", "√3/2", "1", "√2/2"],
  },
  {
    index: 213,
    question: "If f(x) = e^(2x), what is f'(x)?",
    correct_answer: "2e^(2x)",
    options: ["2e^(2x)", "e^(2x)", "2x", "2"],
  },
  {
    index: 214,
    question: "What is the value of log₃(27)?",
    correct_answer: "3",
    options: ["3", "2", "4", "5"],
  },
  {
    index: 215,
    question: "Solve for x: log₄(x) = 2",
    correct_answer: "16",
    options: ["16", "4", "8", "32"],
  },
  {
    index: 216,
    question: "What is the derivative of f(x) = e^(3x)?",
    correct_answer: "3e^(3x)",
    options: ["3e^(3x)", "e^(3x)", "3x", "3"],
  },
  {
    index: 217,
    question: "What is the value of tan(π/3)?",
    correct_answer: "√3",
    options: ["√3", "1", "0", "1/√3"],
  },
  {
    index: 218,
    question: "If f(x) = ln(x^2), what is f'(x)?",
    correct_answer: "2/x",
    options: ["2/x", "ln(x)", "1/x", "2x"],
  },
  {
    index: 219,
    question: "What is the value of sin(π/3)?",
    correct_answer: "√3/2",
    options: ["√3/2", "1/2", "1", "√2/2"],
  },
  {
    index: 220,
    question: "Solve for x: e^(x/2) = 10",
    correct_answer: "2ln(10)",
    options: ["2ln(10)", "ln(10)", "ln(20)", "ln(5)"],
  },
  {
    index: 221,
    question: "What is the integral of e^x with respect to x?",
    correct_answer: "e^x + C",
    options: ["e^x + C", "ln(x) + C", "x + C", "2e^x + C"],
  },
  {
    question: "If x + 3 = 7, what is the value of x?",
    index: 222,
    correct_answer: "4",
    options: ["4", "10", "-4", "-10"],
  },
  {
    question: "If 2x - 5 = 11, what is the value of x?",
    index: 223,
    correct_answer: "8",
    options: ["8", "3", "-8", "-3"],
  },
  {
    question: "If 3x + 2 = 11, what is the value of x?",
    index: 224,
    correct_answer: "3",
    options: ["3", "4", "-3", "-4"],
  },
  {
    question: "If 4x - 3 = 13, what is the value of x?",
    index: 225,
    correct_answer: "4",
    options: ["4", "5", "-4", "-5"],
  },
  {
    question: "If 5x + 4 = 19, what is the value of x?",
    index: 226,
    correct_answer: "3",
    options: ["3", "2", "-3", "-2"],
  },
  {
    question: "If 6x - 7 = 17, what is the value of x?",
    index: 227,
    correct_answer: "4",
    options: ["4", "3", "-4", "-3"],
  },
  {
    question: "If 7x + 6 = 27, what is the value of x?",
    index: 228,
    correct_answer: "3",
    options: ["3", "4", "-3", "-4"],
  },
  {
    question: "If 8x - 9 = 23, what is the value of x?",
    index: 229,
    correct_answer: "4",
    options: ["4", "5", "-4", "-5"],
  },
  {
    question: "If 9x + 8 = 35, what is the value of x?",
    index: 230,
    correct_answer: "3",
    options: ["3", "2", "-3", "-2"],
  },
  {
    question: "If 10x - 11 = 29, what is the value of x?",
    index: 231,
    correct_answer: "4",
    options: ["4", "3", "-4", "-3"],
  },
  {
    question: "If x + y = 10 and x - y = 2, what is the value of x?",
    index: 232,
    correct_answer: "6",
    options: ["6", "4", "-6", "-4"],
  },
  {
    question: "If x + y = 12 and x - y = 4, what is the value of y?",
    index: 233,
    correct_answer: "4",
    options: ["4", "6", "-4", "-6"],
  },
  {
    question: "If x + y = 14 and x - y = 6, what is the value of x + y?",
    index: 234,
    correct_answer: "14",
    options: ["14", "10", "20", "8"],
  },
  {
    question: "If x + y = 16 and x - y = 8, what is the value of x - y?",
    index: 235,
    correct_answer: "8",
    options: ["8", "12", "4", "16"],
  },
  {
    question: "If x + y = 18 and x - y = 10, what is the value of x * y?",
    index: 236,
    correct_answer: "28",
    options: ["28", "36", "20", "40"],
  },
  {
    question: "If x + y = 20 and x - y = 12, what is the value of x / y?",
    index: 237,
    correct_answer: "4",
    options: ["4", "3", "2", "5"],
  },
  {
    question: "If x + y = 22 and x - y = 14, what is the value of x^2 + y^2?",
    index: 238,
    correct_answer: "260",
    options: ["260", "280", "240", "300"],
  },
  {
    question: "If x + y = 24 and x - y = 16, what is the value of x^2 - y^2?",
    index: 239,
    correct_answer: "384",
    options: ["384", "400", "368", "416"],
  },
  {
    question: "If x + y = 26 and x - y = 18, what is the value of (x + y)^2?",
    index: 240,
    correct_answer: "676",
    options: ["676", "700", "652", "724"],
  },
  {
    question: "If x + y = 28 and x - y = 20, what is the value of (x - y)^2?",
    index: 241,
    correct_answer: "400",
    options: ["400", "424", "376", "448"],
  },
  {
    question: "If 2x + 3y = 18 and 3x - 2y = 12, what is the value of x?",
    index: 242,
    correct_answer: "3",
    options: ["3", "4", "-3", "-4"],
  },
  {
    question: "If 2x + 3y = 20 and 3x - 2y = 14, what is the value of y?",
    index: 243,
    correct_answer: "2",
    options: ["2", "3", "-2", "-3"],
  },
  {
    question: "If 2x + 3y = 22 and 3x - 2y = 16, what is the value of 2x + 3y?",
    index: 244,
    correct_answer: "22",
    options: ["22", "18", "26", "14"],
  },
  {
    question: "If 2x + 3y = 24 and 3x - 2y = 18, what is the value of 3x - 2y?",
    index: 245,
    correct_answer: "18",
    options: ["18", "22", "14", "26"],
  },
  {
    question: "If 2x + 3y = 26 and 3x - 2y = 20, what is the value of 2x * 3y?",
    index: 246,
    correct_answer: "72",
    options: ["72", "80", "64", "88"],
  },
  {
    question: "If 2x + 3y = 28 and 3x - 2y = 22, what is the value of 3x / 2y?",
    index: 247,
    correct_answer: "3",
    options: ["3", "4", "2", "5"],
  },
  {
    question:
      "If 2x + 3y = 30 and 3x - 2y = 24, what is the value of 2x^2 + 3y^2?",
    index: 248,
    correct_answer: "180",
    options: ["180", "192", "168", "204"],
  },
  {
    question:
      "If 2x + 3y = 32 and 3x - 2y = 26, what is the value of 3x^2 - 2y^2?",
    index: 249,
    correct_answer: "312",
    options: ["312", "328", "296", "344"],
  },
  {
    question:
      "If 2x + 3y = 34 and 3x - 2y = 28, what is the value of (2x + 3y)^2?",
    index: 250,
    correct_answer: "1156",
    options: ["1156", "1200", "1112", "1244"],
  },
  {
    question:
      "If 2x + 3y = 36 and 3x - 2y = 30, what is the value of (3x - 2y)^2?",
    index: 251,
    correct_answer: "900",
    options: ["900", "800", "300", "100"],
  },
  {
    question: "If x^2 + y^2 = 25 and x - y = 1, what is the value of x?",
    index: 252,
    correct_answer: "3",
    options: ["3", "4", "-3", "-4"],
  },
  {
    question: "If x^2 + y^2 = 29 and x - y = 3, what is the value of y?",
    index: 253,
    correct_answer: "2",
    options: ["2", "3", "-2", "-3"],
  },
  {
    question:
      "If x^2 + y^2 = 41 and x - y = 5, what is the value of x^2 + y^2?",
    index: 254,
    correct_answer: "41",
    options: ["41", "37", "45", "33"],
  },
  {
    question: "If x^2 + y^2 = 53 and x - y = 7, what is the value of x - y?",
    index: 255,
    correct_answer: "7",
    options: ["7", "11", "3", "15"],
  },
  {
    question: "If x^2 + y^2 = 65 and x - y = 9, what is the value of x * y?",
    index: 256,
    correct_answer: "8",
    options: ["8", "12", "4", "16"],
  },
  {
    question: "If x^2 + y^2 = 85 and x - y = 13, what is the value of x / y?",
    index: 257,
    correct_answer: "5",
    options: ["5", "4", "6", "3"],
  },
  {
    question:
      "If x^2 + y^2 = 97 and x - y = 15, what is the value of x^2 - y^2?",
    index: 258,
    correct_answer: "145",
    options: ["145", "161", "129", "177"],
  },
  {
    question:
      "If x^2 + y^2 = 113 and x - y = 17, what is the value of x^2 + y^2?",
    index: 259,
    correct_answer: "113",
    options: ["113", "129", "97", "145"],
  },
  {
    question:
      "If x^2 + y^2 = 125 and x - y = 19, what is the value of (x + y)^2?",
    index: 260,
    correct_answer: "441",
    options: ["441", "465", "417", "489"],
  },
  {
    question:
      "If x^2 + y^2 = 145 and x - y = 23, what is the value of (x - y)^2?",
    index: 261,
    correct_answer: "529",
    options: ["529", "553", "505", "577"],
  },
  {
    question:
      "If x + y = 5 and x^2 + y^2 = 13, what is the value of x^3 + y^3?",
    index: 262,
    correct_answer: "1",
    options: ["1", "5", "-1", "-5"],
  },
  {
    question:
      "If x - y = 3 and x^2 - y^2 = 15, what is the value of x^3 - y^3?",
    index: 263,
    correct_answer: "27",
    options: ["27", "33", "21", "39"],
  },
  {
    question:
      "If x + y = 7 and x^2 + y^2 = 25, what is the value of x^4 + y^4?",
    index: 264,
    correct_answer: "97",
    options: ["97", "105", "89", "113"],
  },
  {
    question:
      "If x - y = 5 and x^2 - y^2 = 35, what is the value of x^4 - y^4?",
    index: 265,
    correct_answer: "525",
    options: ["525", "575", "475", "625"],
  },
  {
    question:
      "If x + y = 9 and x^2 + y^2 = 41, what is the value of x^5 + y^5?",
    index: 266,
    correct_answer: "729",
    options: ["729", "801", "657", "873"],
  },
  {
    question:
      "If x - y = 7 and x^2 - y^2 = 49, what is the value of x^5 - y^5?",
    index: 267,
    correct_answer: "2401",
    options: ["2401", "2641", "2161", "2881"],
  },
  {
    question:
      "If x + y = 11 and x^2 + y^2 = 61, what is the value of x^6 + y^6?",
    index: 268,
    correct_answer: "1331",
    options: ["1331", "1461", "1201", "1591"],
  },
  {
    question:
      "If x - y = 9 and x^2 - y^2 = 81, what is the value of x^6 - y^6?",
    index: 269,
    correct_answer: "6561",
    options: ["6561", "7201", "5921", "7841"],
  },
  {
    question:
      "If x + y = 13 and x^2 + y^2 = 85, what is the value of x^7 + y^7?",
    index: 270,
    correct_answer: "2197",
    options: ["2197", "2407", "1987", "2587"],
  },
  {
    question:
      "If x - y = 11 and x^2 - y^2 = 121, what is the value of x^7 - y^7?",
    index: 271,
    correct_answer: "13311",
    options: ["13311", "14621", "12001", "15631"],
  },
  {
    question:
      "If x + y = 15 and x^2 + y^2 = 113, what is the value of x^8 + y^8?",
    index: 272,
    correct_answer: "3375",
    options: ["3375", "3695", "3055", "4015"],
  },
  {
    question:
      "If x - y = 13 and x^2 - y^2 = 169, what is the value of x^8 - y^8?",
    index: 273,
    correct_answer: "28561",
    options: ["28561", "31321", "25701", "34241"],
  },
  {
    question:
      "If x + y = 17 and x^2 + y^2 = 145, what is the value of x^9 + y^9?",
    index: 274,
    correct_answer: "4913",
    options: ["4913", "5383", "4443", "5663"],
  },
  {
    question:
      "If x - y = 15 and x^2 - y^2 = 225, what is the value of x^9 - y^9?",
    index: 275,
    correct_answer: "50625",
    options: ["50625", "55375", "45875", "59125"],
  },
  {
    question:
      "If x + y = 19 and x^2 + y^2 = 181, what is the value of x^10 + y^10?",
    index: 276,
    correct_answer: "6859",
    options: ["6859", "7499", "6219", "8139"],
  },
  {
    question:
      "If x - y = 17 and x^2 - y^2 = 289, what is the value of x^10 - y^10?",
    index: 277,
    correct_answer: "83521",
    options: ["83521", "91361", "75681", "95761"],
  },
  {
    question:
      "If x + y = 21 and x^2 + y^2 = 221, what is the value of x^11 + y^11?",
    index: 278,
    correct_answer: "9261",
    options: ["9261", "10121", "8511", "10831"],
  },
  {
    question:
      "If x - y = 19 and x^2 - y^2 = 361, what is the value of x^11 - y^11?",
    index: 279,
    correct_answer: "130321",
    options: ["130321", "142641", "117801", "150561"],
  },
  {
    question:
      "If x + y = 23 and x^2 + y^2 = 265, what is the value of x^12 + y^12?",
    index: 280,
    correct_answer: "12167",
    options: ["12167", "13287", "11047", "14427"],
  },
  {
    question:
      "If x - y = 21 and x^2 - y^2 = 441, what is the value of x^12 - y^12?",
    index: 281,
    correct_answer: "194481",
    options: ["194481", "212721", "176241", "224961"],
  },
  {
    index: 282,
    question: "What is the derivative of f(x) = x^3?",
    correct_answer: "3x^2",
    options: ["3x^2", "2x^3", "x^2", "4x^3"],
  },
  {
    index: 283,
    question: "What is the integral of 2x with respect to x?",
    correct_answer: "x^2 + C",
    options: ["x^2 + C", "2x^2 + C", "x^3 + C", "2x + C"],
  },
  {
    index: 284,
    question: "What is the limit of (1/x) as x approaches infinity?",
    correct_answer: "0",
    options: ["0", "1", "∞", "-∞"],
  },
  {
    index: 285,
    question: "What is the derivative of f(x) = 1/x?",
    correct_answer: "-1/x^2",
    options: ["-1/x^2", "1/x", "-x", "1/x^2"],
  },
  {
    index: 286,
    question: "What is the integral of sin(x) with respect to x?",
    correct_answer: "-cos(x) + C",
    options: ["-cos(x) + C", "sin(x) + C", "cos(x) + C", "-sin(x) + C"],
  },
  {
    index: 287,
    question: "What is the derivative of f(x) = cos(x)?",
    correct_answer: "-sin(x)",
    options: ["-sin(x)", "cos(x)", "-cos(x)", "sin(x)"],
  },
  {
    index: 288,
    question: "What is the integral of e^(2x) with respect to x?",
    correct_answer: "(1/2)e^(2x) + C",
    options: ["(1/2)e^(2x) + C", "2e^(2x) + C", "e^(2x) + C", "e^(x) + C"],
  },
  {
    index: 289,
    question: "What is the limit of (x^2 - 1)/(x - 1) as x approaches 1?",
    correct_answer: "2",
    options: ["2", "1", "0", "∞"],
  },
  {
    index: 290,
    question: "What is the derivative of f(x) = ln(x)?",
    correct_answer: "1/x",
    options: ["1/x", "x", "ln(x)", "e^x"],
  },
  {
    index: 291,
    question: "What is the integral of (1/x) with respect to x?",
    correct_answer: "ln|x| + C",
    options: ["ln|x| + C", "x + C", "1/x + C", "ln(x) + C"],
  },
  {
    index: 292,
    question: "What is the derivative of f(x) = e^(3x)?",
    correct_answer: "3e^(3x)",
    options: ["3e^(3x)", "e^(3x)", "3x", "3"],
  },
  {
    index: 293,
    question: "What is the integral of cos(x) with respect to x?",
    correct_answer: "sin(x) + C",
    options: ["sin(x) + C", "cos(x) + C", "-cos(x) + C", "-sin(x) + C"],
  },
  {
    index: 294,
    question: "What is the derivative of f(x) = tan(x)?",
    correct_answer: "sec^2(x)",
    options: ["sec^2(x)", "tan(x)", "sin(x)", "cos(x)"],
  },
  {
    index: 295,
    question: "What is the integral of (1/x^2) with respect to x?",
    correct_answer: "-1/x + C",
    options: ["-1/x + C", "-1/(2x) + C", "1/x + C", "-1/(2x^2) + C"],
  },
  {
    index: 296,
    question: "What is the limit of (sin(x))/x as x approaches 0?",
    correct_answer: "1",
    options: ["1", "0", "∞", "-∞"],
  },
  {
    index: 297,
    question: "What is the derivative of f(x) = e^(2/x)?",
    correct_answer: "(-2/x^2)e^(2/x)",
    options: [
      "(-2/x^2)e^(2/x)",
      "(-2/x)e^(2/x)",
      "(-1/x)e^(2/x)",
      "(-1/x^2)e^(2/x)",
    ],
  },
  {
    index: 298,
    question: "What is the integral of (1/(1 + x^2)) with respect to x?",
    correct_answer: "arctan(x) + C",
    options: [
      "arctan(x) + C",
      "arcsin(x) + C",
      "arccos(x) + C",
      "ln(1 + x^2) + C",
    ],
  },
  {
    index: 299,
    question: "What is the derivative of f(x) = ln(2x)?",
    correct_answer: "1/x",
    options: ["1/x", "x", "ln(x)", "2/x"],
  },
  {
    index: 300,
    question: "What is the integral of (cos(x))^2 with respect to x?",
    correct_answer: "(x/2) + (1/4)sin(2x) + C",
    options: [
      "(x/2) + (1/4)sin(2x) + C",
      "(1/2)x + (1/2)sin(x) + C",
      "(1/2)cos(x) + (1/4)x^2 + C",
      "(1/4)cos(2x) + C",
    ],
  },
  {
    index: 301,
    question: "What is the limit of (1 - cos(x))/(x^2) as x approaches 0?",
    correct_answer: "1/2",
    options: ["1/2", "0", "1", "-1"],
  },
  {
    question: "What is the area of a circle with a radius of 5 cm?",
    index: 302,
    correct_answer: "25 п cm2",
    options: ["25 п cm2", "10 п cm2", "50 п cm2", "100 п cm2"],
  },
  {
    question: "What is the circumference of a circle with a diameter of 12 cm?",
    index: 303,
    correct_answer: "12 п cm",
    options: ["12 п cm", "6 п cm", "24 п cm", "48 п cm"],
  },
  {
    question:
      "What is the measure of the central angle of a sector that has an area of 18 п cm2 and a radius of 6 cm?",
    index: 304,
    correct_answer: "60o",
    options: ["60o", "30o", "90o", "120o"],
  },
  {
    question:
      "What is the measure of an inscribed angle that intercepts an arc of 120o?",
    index: 305,
    correct_answer: "60o",
    options: ["60o", "30o", "90o", "120o"],
  },
  {
    question:
      "What is the measure of an angle formed by two chords that intersect inside a circle, if the two chords are 8 cm and 6 cm long, and the intercepted arcs are 80o and 100o?",
    index: 306,
    correct_answer: "40o",
    options: ["40o", "50o", "60o", "70o"],
  },
  {
    question:
      "What is the length of a chord that is 5 cm away from the center of a circle with a radius of 13 cm?",
    index: 307,
    correct_answer: "24 cm",
    options: ["24 cm", "12 cm", "10 cm", "20 cm"],
  },
  {
    question:
      "What is the equation of a circle with a center at (3, -2) and a radius of 5?",
    index: 308,
    correct_answer: "(x - 3)^2 + (y + 2)^2 = 25",
    options: [
      "(x - 3)^2 + (y + 2)^2 = 25",
      "(x + 3)^2 + (y - 2)^2 = 25",
      "(x - 3)^2 + (y + 2)^2 = 5",
      "(x + 3)^2 + (y - 2)^2 = 5",
    ],
  },
  {
    question:
      "What are the coordinates of the vertex of the parabola given by the equation y = -2x^2 + 12x - 7?",
    index: 309,
    correct_answer: "(3, 11)",
    options: ["(3, 11)", "(-3, 11)", "(3, -11)", "(-3, -11)"],
  },
  {
    question:
      "What is the focus of the parabola given by the equation x^2 = -8y?",
    index: 310,
    correct_answer: "(0, -2)",
    options: ["(0, -2)", "(0, 2)", "(-2, 0)", "(2, 0)"],
  },
  {
    question:
      "What is the directrix of the parabola given by the equation y^2 = 12x?",
    index: 311,
    correct_answer: "x = -3",
    options: ["x = -3", "x = 3", "y = -3", "y = 3"],
  },
  {
    index: 312,
    question: "What is the derivative of f(x) = sqrt(x)?",
    correct_answer: "1/(2*sqrt(x))",
    options: ["1/(2*sqrt(x))", "sqrt(x)", "1/(2x)", "1/(2x*sqrt(x))"],
  },
  {
    index: 313,
    question: "What is the integral of e^(3x)cos(3x) with respect to x?",
    correct_answer: "(1/10)e^(3x)(sin(3x) - cos(3x)) + C",
    options: [
      "(1/10)e^(3x)(sin(3x) - cos(3x)) + C",
      "(1/6)e^(3x)sin(3x) + C",
      "(1/6)e^(3x)cos(3x) + C",
      "(1/10)e^(3x)(sin(3x) + cos(3x)) + C",
    ],
  },
  {
    index: 314,
    question: "What is the limit of (e^x - 1)/x as x approaches 0?",
    correct_answer: "1",
    options: ["1", "0", "∞", "-∞"],
  },
  {
    index: 315,
    question: "What is the derivative of f(x) = x^2ln(x)?",
    correct_answer: "2xln(x) + x",
    options: ["2xln(x) + x", "2xln(x) + 2", "x^2ln(x) + 2x", "x^2ln(x)"],
  },
  {
    index: 316,
    question: "What is the integral of tan(x)sec(x) with respect to x?",
    correct_answer: "sec(x) + C",
    options: [
      "sec(x) + C",
      "tan(x) + C",
      "ln|sec(x) + tan(x)| + C",
      "ln|sec(x) - tan(x)| + C",
    ],
  },
  {
    index: 317,
    question: "What is the derivative of f(x) = e^(2x)sin(2x)?",
    correct_answer: "2e^(2x)sin(2x) + 2e^(2x)cos(2x)",
    options: [
      "2e^(2x)sin(2x) + 2e^(2x)cos(2x)",
      "e^(2x)sin(2x) + e^(2x)cos(2x)",
      "2e^(2x)sin(2x) - 2e^(2x)cos(2x)",
      "e^(2x)sin(2x) - e^(2x)cos(2x)",
    ],
  },
  {
    index: 318,
    question: "What is the integral of x^2e^(x^3) with respect to x?",
    correct_answer: "(1/3)e^(x^3) + C",
    options: [
      "(1/3)e^(x^3) + C",
      "(1/2)e^(x^3) + C",
      "(1/3)x^3e^(x^3) + C",
      "(1/2)x^2e^(x^3) + C",
    ],
  },
  {
    index: 319,
    question: "What is the limit of (1 - cos(x))/x^2 as x approaches 0?",
    correct_answer: "1/2",
    options: ["1/2", "0", "1", "-1"],
  },
  {
    index: 320,
    question: "What is the derivative of f(x) = ln(x^2 + 1)?",
    correct_answer: "(2x)/(x^2 + 1)",
    options: ["(2x)/(x^2 + 1)", "(1/x^2 + 1)", "(2x)/(2x + 1)", "2ln(x)"],
  },
  {
    index: 321,
    question:
      "What is the integral of (x^2 + 2x)e^(x^3 + x^2) with respect to x?",
    correct_answer: "(1/3)e^(x^3 + x^2) + C",
    options: [
      "(1/3)e^(x^3 + x^2) + C",
      "(1/2)e^(x^3 + x^2) + C",
      "(1/3)(x^3 + x^2)e^(x^3 + x^2) + C",
      "(1/2)(x^2 + x)e^(x^3 + x^2) + C",
    ],
  },
  {
    index: 322,
    question: "What is the derivative of f(x) = e^(x^2)?",
    correct_answer: "2xe^(x^2)",
    options: ["2xe^(x^2)", "xe^(x^2)", "2e^(x^2)", "e^(x^2)"],
  },
  {
    index: 323,
    question: "What is the integral of sec^2(x)tan(x) with respect to x?",
    correct_answer: "sec^2(x) + C",
    options: [
      "sec^2(x) + C",
      "tan(x) + C",
      "sec(x) + C",
      "ln|sec(x) + tan(x)| + C",
    ],
  },
  {
    index: 324,
    question: "What is the limit of (ln(x + 1))/(x) as x approaches 0?",
    correct_answer: "1",
    options: ["1", "0", "∞", "-∞"],
  },
  {
    index: 325,
    question:
      "What is the derivative of f(x) = ln(sin(x))? (Assuming x is in the domain of (0, π))",
    correct_answer: "cos(x)/sin(x)",
    options: ["cos(x)/sin(x)", "-cos(x)/sin(x)", "cot(x)", "-cot(x)"],
  },
  {
    index: 326,
    question: "What is the integral of (x^2 + 1)/(x) with respect to x?",
    correct_answer: "x + ln|x| + C",
    options: [
      "x + ln|x| + C",
      "x^2 + ln|x| + C",
      "x^2 + x + C",
      "ln|x^2 + 1| + C",
    ],
  },
  {
    index: 327,
    question: "What is the derivative of f(x) = (1 - cos(x))^2?",
    correct_answer: "2sin(x)(cos(x) - 1)",
    options: [
      "2sin(x)(cos(x) - 1)",
      "-2sin(x)(cos(x) - 1)",
      "2cos(x)(sin(x) - 1)",
      "2sin(x)(cos(x) + 1)",
    ],
  },
  {
    index: 328,
    question: "What is the integral of (x^2 + 1)ln(x) with respect to x?",
    correct_answer: "(1/3)x^3ln(x) + x - (1/9)x^3 + C",
    options: [
      "(1/3)x^3ln(x) + x - (1/9)x^3 + C",
      "(1/2)x^2ln(x) + x - (1/6)x^3 + C",
      "(1/3)x^3ln(x) + (1/2)x^2 + C",
      "(1/2)x^2ln(x) + x - (1/9)x^3 + C",
    ],
  },
  {
    index: 329,
    question: "What is the limit of (tan(x))/(x) as x approaches 0?",
    correct_answer: "1",
    options: ["1", "0", "∞", "-∞"],
  },
  {
    index: 330,
    question:
      "What is the derivative of f(x) = e^(cos(x))? (Assuming x is in the domain of (0, π))",
    correct_answer: "-sin(x)e^(cos(x))",
    options: [
      "-sin(x)e^(cos(x))",
      "sin(x)e^(cos(x))",
      "cos(x)e^(sin(x))",
      "-cos(x)e^(sin(x))",
    ],
  },
  {
    index: 331,
    question: "What is the integral of e^(2x)sin(3x) with respect to x?",
    correct_answer: "(1/13)e^(2x)(3sin(3x) - 2cos(3x)) + C",
    options: [
      "(1/13)e^(2x)(3sin(3x) - 2cos(3x)) + C",
      "(1/10)e^(2x)(3sin(3x) - 2cos(3x)) + C",
      "(1/13)e^(2x)(3cos(3x) + 2sin(3x)) + C",
      "(1/10)e^(2x)(3cos(3x) + 2sin(3x)) + C",
    ],
  },
  {
    question: "What is the derivative of f(x) = 3x^2 - 5x + 2?",
    index: 332,
    correct_answer: "f'(x) = 6x - 5",
    options: [
      "f'(x) = 6x - 5",
      "f'(x) = 6x + 5",
      "f'(x) = 3x - 5",
      "f'(x) = 3x + 2",
    ],
  },
  {
    question: "What is the derivative of f(x) = e^x + ln(x)?",
    index: 333,
    correct_answer: "f'(x) = e^x + 1/x",
    options: [
      "f'(x) = e^x + 1/x",
      "f'(x) = e^x - 1/x",
      "f'(x) = e^x + x",
      "f'(x) = e^x - x",
    ],
  },
  {
    question: "What is the derivative of f(x) = sin(x) + cos(x)?",
    index: 334,
    correct_answer: "f'(x) = cos(x) - sin(x)",
    options: [
      "f'(x) = cos(x) - sin(x)",
      "f'(x) = cos(x) + sin(x)",
      "f'(x) = -cos(x) - sin(x)",
      "f'(x) = -cos(x) + sin(x)",
    ],
  },
  {
    question: "What is the derivative of f(x) = tan(x) + sec(x)?",
    index: 335,
    correct_answer: "f'(x) = sec^2(x) + sec(x)tan(x)",
    options: [
      "f'(x) = sec^2(x) + sec(x)tan(x)",
      "f'(x) = sec^2(x) - sec(x)tan(x)",
      "f'(x) = tan^2(x) + sec(x)tan(x)",
      "f'(x) = tan^2(x) - sec(x)tan(x)",
    ],
  },
  {
    question: "What is the derivative of f(x) = (x^2 + 1)^3?",
    index: 336,
    correct_answer: "f'(x) = 6x(x^2 + 1)^2",
    options: [
      "f'(x) = 6x(x^2 + 1)^2",
      "f'(x) = 3x(x^2 + 1)^2",
      "f'(x) = 6x^2(x^2 + 1)",
      "f'(x) = 3x^2(x^2 + 1)",
    ],
  },
  {
    question: "What is the derivative of f(x) = ln(x^2 + 1)?",
    index: 337,
    correct_answer: "f'(x) = 2x/(x^2 + 1)",
    options: [
      "f'(x) = 2x/(x^2 + 1)",
      "f'(x) = x/(x^2 + 1)",
      "f'(x) = 2/(x^2 + 1)",
      "f'(x) = 1/(x^2 + 1)",
    ],
  },
  {
    question: "What is the derivative of f(x) = sin(x^2)?",
    index: 338,
    correct_answer: "f'(x) = 2x cos(x^2)",
    options: [
      "f'(x) = 2x cos(x^2)",
      "f'(x) = 2x sin(x^2)",
      "f'(x) = x cos(x^2)",
      "f'(x) = x sin(x^2)",
    ],
  },
  {
    question: "What is the derivative of f(x) = cos(e^x)?",
    index: 339,
    correct_answer: "f'(x) = -e^x sin(e^x)",
    options: [
      "f'(x) = -e^x sin(e^x)",
      "f'(x) = -e^x cos(e^x)",
      "f'(x) = e^x sin(e^x)",
      "f'(x) = e^x cos(e^x)",
    ],
  },
  {
    question: "What is the derivative of f(x) = tan(ln(x))?",
    index: 340,
    correct_answer: "f'(x) = (1 + tan^2(ln(x)))/x",
    options: [
      "f'(x) = (1 + tan^2(ln(x)))/x",
      "f'(x) = (1 - tan^2(ln(x)))/x",
      "f'(x) = (1 + tan(ln(x)))/x",
      "f'(x) = (1 - tan(ln(x)))/x",
    ],
  },
  {
    question: "What is the derivative of f(x) = sec(sqrt(x))?",
    index: 341,
    correct_answer: "f'(x) = (1/2) sec(sqrt(x))tan(sqrt(x))/sqrt(x)",
    options: [
      "f'(x) = (1/2) sec(sqrt(x))tan(sqrt(x))/sqrt(x)",
      "f'(x) = (1/2) sec(sqrt(x))tan(sqrt(x))sqrt(x)",
      "f'(x) = (1/2) sec^2(sqrt(x))/sqrt(x)",
      "f'(x) = (1/2) sec^2(sqrt(x))sqrt(x)",
    ],
  },
  {
    question: "What is the solution of the inequality 2x - 3 > 5?",
    index: 342,
    correct_answer: "x > 4",
    options: ["x > 4", "x < 4", "x > -4", "x < -4"],
  },
  {
    question: "What is the solution of the inequality -3x + 2 \\leq -10?",
    index: 343,
    correct_answer: "x \\geq 4",
    options: ["x \\geq 4", "x \\leq 4", "x \\geq -4", "x \\leq -4"],
  },
  {
    question: "What is the solution of the inequality 4x + 1 < 2x - 5?",
    index: 344,
    correct_answer: "x < -3",
    options: ["x < -3", "x > -3", "x < 3", "x > 3"],
  },
  {
    question: "What is the solution of the inequality -2x - 4 \\geq 8?",
    index: 345,
    correct_answer: "x \\leq -6",
    options: ["x \\leq -6", "x \\geq -6", "x \\leq 6", "x \\geq 6"],
  },
  {
    question: "What is the solution of the inequality x^2 - 5x + 6 > 0?",
    index: 346,
    correct_answer: "x < 2 or x > 3",
    options: [
      "x < 2 or x > 3",
      "x > 2 and x < 3",
      "x < -2 or x > -3",
      "x > -2 and x < -3",
    ],
  },
  {
    index: 347,
    question: "What are the roots of the equation x^2 - 4x + 3 = 0?",
    correct_answer: "1 and 3",
    options: ["1 and 3", "2 and 2", "3 and 1", "-1 and -3"],
  },
  {
    index: 348,
    question: "What are the solutions of the equation 2x^2 - 5x + 2 = 0?",
    correct_answer: "2 and 1/2",
    options: ["2 and 1/2", "3 and 1/3", "1/2 and -1", "1 and -2"],
  },
  {
    index: 349,
    question: "What are the roots of the equation 3x^2 + 7x + 2 = 0?",
    correct_answer: "-1 and -2/3",
    options: ["-1 and -2/3", "-2 and -3", "1 and 2/3", "3 and -1/3"],
  },
  {
    index: 350,
    question: "What are the solutions to the equation x^2 - 9 = 0?",
    correct_answer: "-3 and 3",
    options: ["-3 and 3", "9 and 1", "3 and -3", "3 and 9"],
  },
  {
    index: 351,
    question: "What are the roots of the equation 4x^2 - 4x + 1 = 0?",
    correct_answer: "1/2",
    options: ["1/2", "1", "2", "-1/2"],
  },
  {
    index: 352,
    question: "Find the roots of the quadratic equation x^2 - 6x + 8 = 0.",
    correct_answer: "2 and 4",
    options: ["2 and 4", "4 and 2", "6 and -8", "-2 and -4"],
  },
  {
    index: 353,
    question: "What are the solutions of the equation 2x^2 + 5x + 2 = 0?",
    correct_answer: "-2 and -1/2",
    options: ["-2 and -1/2", "1/2 and 2", "2 and -1/2", "-1/2 and -2"],
  },
  {
    index: 354,
    question: "What are the roots of the equation x^2 + 2x + 1 = 0?",
    correct_answer: "-1",
    options: ["-1", "1", "-2", "2"],
  },
  {
    index: 355,
    question: "What are the solutions to the equation 3x^2 - 5x - 2 = 0?",
    correct_answer: "2 and -1/3",
    options: ["2 and -1/3", "-1/3 and 2", "5 and -3", "-5 and 3"],
  },
  {
    index: 356,
    question: "What are the roots of the equation 2x^2 - 7x + 3 = 0?",
    correct_answer: "3 and 1/2",
    options: ["3 and 1/2", "2 and 3/7", "7 and 1/2", "1/2 and 3"],
  },
  {
    index: 357,
    question: "Find the solutions of the quadratic equation x^2 + 3x - 4 = 0.",
    correct_answer: "1 and -4",
    options: ["1 and -4", "-1 and 4", "4 and -1", "-4 and 1"],
  },
  {
    index: 358,
    question: "What are the roots of the equation 5x^2 - 3x - 2 = 0?",
    correct_answer: "2 and -1/5",
    options: ["2 and -1/5", "-1/5 and 2", "3 and -2/5", "-3 and 2/5"],
  },
  {
    index: 359,
    question: "What are the solutions to the equation x^2 - 5x + 6 = 0?",
    correct_answer: "3 and 2",
    options: ["3 and 2", "5 and -1", "6 and -1", "-5 and 1"],
  },
  {
    index: 360,
    question: "What are the roots of the equation 2x^2 - x - 6 = 0?",
    correct_answer: "3/2 and -2",
    options: ["3/2 and -2", "-2 and 3/2", "6 and -1", "1/2 and -3"],
  },
  {
    index: 361,
    question: "What are the solutions to the equation x^2 - 7x + 10 = 0?",
    correct_answer: "5 and 2",
    options: ["5 and 2", "7 and 10", "2 and 5", "-2 and -5"],
  },
  {
    index: 362,
    question: "Find the roots of the quadratic equation 4x^2 - 16 = 0.",
    correct_answer: "-2 and 2",
    options: ["-2 and 2", "16 and -4", "4 and -4", "-16 and 2"],
  },
  {
    index: 363,
    question: "What are the solutions of the equation 3x^2 - 4x + 1 = 0?",
    correct_answer: "1 and 1/3",
    options: ["1 and 1/3", "3 and 4", "4 and 3", "1/3 and 1"],
  },
  {
    index: 364,
    question: "What are the roots of the equation x^2 + 4x + 4 = 0?",
    correct_answer: "-2",
    options: ["-2", "2", "4", "-4"],
  },
  {
    index: 365,
    question: "What are the solutions to the equation 2x^2 - 9x + 9 = 0?",
    correct_answer: "3",
    options: ["3", "2", "-3", "9"],
  },
  {
    index: 366,
    question: "What are the roots of the equation 3x^2 + 5x - 2 = 0?",
    correct_answer: "-2 and 1/3",
    options: ["-2 and 1/3", "-5 and 2/3", "5 and -2/3", "-1/3 and 2"],
  },
  {
    index: 367,
    question:
      "What are the solutions to the quadratic equation x^2 - 5x + 6 = 0?",
    correct_answer: "2 and 3",
    options: ["2 and 3", "-2 and -3", "2 and -3", "-2 and 3"],
  },
  {
    index: 368,
    question: "Find the roots of the equation 2x^2 - 11x + 5 = 0.",
    correct_answer: "5/2 and 2",
    options: ["5/2 and 2", "5/2 and -2", "-5/2 and 2", "-5/2 and -2"],
  },
  {
    index: 369,
    question:
      "What are the solutions to the quadratic equation 3x^2 + 4x + 2 = 0?",
    correct_answer: "Complex roots",
    options: ["Complex roots", "Real roots", "No roots", "1 and 2"],
  },
  {
    index: 370,
    question: "Solve the quadratic equation x^2 - 9x + 18 = 0.",
    correct_answer: "3 and 6",
    options: ["3 and 6", "-3 and -6", "3 and -6", "-3 and 6"],
  },
  {
    index: 371,
    question: "What are the roots of the equation 4x^2 - 12x + 9 = 0?",
    correct_answer: "3/2",
    options: ["3/2", "3", "2", "9/4"],
  },
  {
    index: 372,
    question: "Find the solutions to the quadratic equation 2x^2 + 5x + 2 = 0.",
    correct_answer: "-1/2 and -2",
    options: ["-1/2 and -2", "1/2 and 2", "1/2 and -2", "-1/2 and 2"],
  },
  {
    index: 373,
    question: "What are the roots of the equation x^2 - 6x + 9 = 0?",
    correct_answer: "3",
    options: ["3", "-3", "6", "-6"],
  },
  {
    index: 374,
    question: "Solve the quadratic equation 3x^2 - 8x - 3 = 0.",
    correct_answer: "3 and -1/3",
    options: ["3 and -1/3", "-3 and 1/3", "3 and 1/3", "-3 and -1/3"],
  },
  {
    index: 375,
    question:
      "What are the solutions to the quadratic equation 2x^2 - 3x - 2 = 0?",
    correct_answer: "2 and -1/2",
    options: ["2 and -1/2", "-2 and 1/2", "2 and 1/2", "-2 and -1/2"],
  },
  {
    index: 376,
    question: "Find the roots of the equation x^2 + 4x + 4 = 0.",
    correct_answer: "-2",
    options: ["-2", "2", "-4", "4"],
  },
  {
    index: 377,
    question:
      "What are the solutions to the quadratic equation 5x^2 + 6x - 3 = 0?",
    correct_answer: "(-3±√69)/10",
    options: ["(-3±√69)/10", "(-6±√69)/10", "(-3±√69)/5", "(-6±√69)/5"],
  },
  {
    index: 378,
    question: "Find the roots of the equation 2x^2 - 5x - 3 = 0.",
    correct_answer: "3 and -1/2",
    options: ["3 and -1/2", "-3 and 1/2", "3 and 1/2", "-3 and -1/2"],
  },
  {
    index: 379,
    question: "What are the roots of the equation x^2 - 2x + 1 = 0?",
    correct_answer: "1",
    options: ["1", "-1", "2", "-2"],
  },
  {
    index: 380,
    question: "Solve the quadratic equation 4x^2 - 4x + 1 = 0.",
    correct_answer: "1/2",
    options: ["1/2", "1", "-1", "-1/2"],
  },
  {
    index: 381,
    question:
      "What are the solutions to the quadratic equation x^2 + 7x + 10 = 0?",
    correct_answer: "-2 and -5",
    options: ["-2 and -5", "2 and 5", "-2 and 5", "2 and -5"],
  },
  {
    index: 382,
    question: "What is the probability of rolling a 6 on a fair six-sided die?",
    correct_answer: "1/6",
    options: ["1/6", "1/3", "1/2", "2/3"],
  },
  {
    index: 383,
    question:
      "If you flip a fair coin twice, what is the probability of getting heads on both flips?",
    correct_answer: "1/4",
    options: ["1/4", "1/2", "3/4", "1/3"],
  },
  {
    index: 384,
    question:
      "A bag contains 5 red marbles and 3 blue marbles. What is the probability of drawing a red marble?",
    correct_answer: "5/8",
    options: ["5/8", "3/8", "2/5", "3/5"],
  },
  {
    index: 385,
    question:
      "If you roll two fair six-sided dice, what is the probability of rolling a sum of 7?",
    correct_answer: "1/6",
    options: ["1/6", "1/3", "1/4", "1/12"],
  },
  {
    index: 386,
    question:
      "In a deck of 52 playing cards, what is the probability of drawing a heart?",
    correct_answer: "1/4",
    options: ["1/4", "1/13", "1/2", "1/26"],
  },
  {
    index: 387,
    question:
      "If you randomly select a letter from the word 'MATHEMATICS', what is the probability that it is a vowel?",
    correct_answer: "4/11",
    options: ["4/11", "3/11", "2/11", "1/11"],
  },
  {
    index: 388,
    question:
      "You have a jar with 10 red marbles, 6 blue marbles, and 4 green marbles. What is the probability of drawing a blue marble?",
    correct_answer: "3/10",
    options: ["3/10", "3/20", "2/5", "3/5"],
  },
  {
    index: 389,
    question:
      "If you flip a fair coin three times, what is the probability of getting at least one head?",
    correct_answer: "7/8",
    options: ["7/8", "1/8", "3/4", "1/2"],
  },
  {
    index: 390,
    question:
      "A box contains 8 black balls and 4 white balls. If you draw one ball at random, what is the probability of drawing a black ball?",
    correct_answer: "2/3",
    options: ["2/3", "1/3", "3/4", "1/2"],
  },
  {
    index: 391,
    question:
      "If you roll a fair six-sided die, what is the probability of rolling a number greater than 4?",
    correct_answer: "1/3",
    options: ["1/3", "1/2", "2/3", "1/6"],
  },
  {
    index: 392,
    question:
      "You have a bag with 12 candies: 6 are chocolate, 4 are strawberry, and 2 are vanilla. What is the probability of randomly selecting a strawberry candy?",
    correct_answer: "1/3",
    options: ["1/3", "2/3", "1/6", "2/5"],
  },
  {
    index: 393,
    question:
      "If you randomly pick a card from a standard deck of 52 playing cards, what is the probability of selecting a face card (jack, queen, or king)?",
    correct_answer: "3/13",
    options: ["3/13", "1/3", "3/52", "3/26"],
  },
  {
    index: 394,
    question:
      "In a group of 30 students, 18 are girls and 12 are boys. If a student is selected at random, what is the probability that it is a girl?",
    correct_answer: "3/5",
    options: ["3/5", "2/5", "3/10", "2/3"],
  },
  {
    index: 395,
    question:
      "You have a box with 6 blue balls, 4 green balls, and 2 red balls. If you randomly select a ball, what is the probability of selecting a green ball?",
    correct_answer: "2/6",
    options: ["2/6", "1/6", "1/2", "2/5"],
  },
  {
    index: 396,
    question:
      "If you roll two fair six-sided dice, what is the probability that the sum of the numbers rolled is 8?",
    correct_answer: "5/36",
    options: ["5/36", "1/6", "1/12", "1/4"],
  },
  {
    index: 397,
    question:
      "A bag contains 5 red balls, 3 blue balls, and 2 green balls. If you draw one ball at random, what is the probability that it is not blue?",
    correct_answer: "7/10",
    options: ["7/10", "1/10", "3/10", "2/5"],
  },
  {
    index: 398,
    question:
      "You have a standard deck of 52 playing cards. What is the probability of drawing a spade or a heart?",
    correct_answer: "1/2",
    options: ["1/2", "1/4", "3/4", "1/3"],
  },
  {
    index: 399,
    question:
      "If you flip a fair coin three times, what is the probability of getting exactly two heads?",
    correct_answer: "3/8",
    options: ["3/8", "1/8", "1/2", "1/4"],
  },
  {
    index: 400,
    question:
      "In a group of 50 students, 30 are girls and 20 are boys. If a student is selected at random, what is the probability that it is a boy?",
    correct_answer: "2/5",
    options: ["2/5", "3/5", "1/2", "3/10"],
  },
  {
    index: 401,
    question:
      "You have a bag with 8 red marbles, 4 blue marbles, and 2 green marbles. What is the probability of drawing a red marble?",
    correct_answer: "2/7",
    options: ["2/7", "4/7", "2/9", "3/5"],
  },
  {
    index: 402,
    question:
      "If you roll two fair six-sided dice, what is the probability that the sum of the numbers rolled is greater than 9?",
    correct_answer: "5/36",
    options: ["5/36", "1/6", "1/12", "1/4"],
  },
  {
    index: 403,
    question:
      "A box contains 6 black balls and 4 white balls. If you draw one ball at random, what is the probability of drawing a white ball?",
    correct_answer: "2/5",
    options: ["2/5", "1/5", "4/10", "3/10"],
  },
  {
    index: 404,
    question:
      "If you randomly select a letter from the word 'PROBABILITY', what is the probability that it is a consonant?",
    correct_answer: "9/11",
    options: ["9/11", "2/11", "1/11", "3/11"],
  },
  {
    index: 405,
    question:
      "You have a jar with 12 red marbles, 7 blue marbles, and 5 green marbles. What is the probability of drawing a blue marble?",
    correct_answer: "7/24",
    options: ["7/24", "5/12", "7/12", "12/24"],
  },
  {
    index: 406,
    question:
      "If you flip a fair coin three times, what is the probability of getting exactly one head?",
    correct_answer: "3/8",
    options: ["3/8", "1/8", "1/2", "1/4"],
  },
  {
    index: 407,
    question:
      "In a box of 20 candies, 12 are chocolate, 5 are strawberry, and 3 are vanilla. What is the probability of randomly selecting a chocolate candy?",
    correct_answer: "3/5",
    options: ["3/5", "5/12", "12/20", "15/20"],
  },
  {
    index: 408,
    question:
      "You have a deck of 52 playing cards. What is the probability of drawing a face card (jack, queen, or king) or a spade?",
    correct_answer: "4/13",
    options: ["4/13", "1/3", "1/13", "3/13"],
  },
  {
    index: 409,
    question:
      "If you roll a fair six-sided die, what is the probability of rolling a number less than 3?",
    correct_answer: "1/3",
    options: ["1/3", "1/2", "2/3", "1/6"],
  },
  {
    index: 410,
    question:
      "A bag contains 8 red balls, 5 blue balls, and 3 green balls. If you draw one ball at random, what is the probability that it is blue or green?",
    correct_answer: "4/8",
    options: ["4/8", "5/8", "3/8", "8/16"],
  },
  {
    index: 411,
    question:
      "You have a box with 10 black marbles, 6 white marbles, and 4 gray marbles. What is the probability of drawing a white marble?",
    correct_answer: "3/10",
    options: ["3/10", "1/5", "6/20", "4/10"],
  },
  {
    index: 412,
    question:
      "If you flip a fair coin three times, what is the probability of getting exactly three heads?",
    correct_answer: "1/8",
    options: ["1/8", "1/3", "1/4", "1/2"],
  },
  {
    index: 413,
    question:
      "A bag contains 6 red balls and 4 blue balls. If you draw one ball at random, what is the probability of drawing a red ball?",
    correct_answer: "3/5",
    options: ["3/5", "2/5", "6/10", "4/10"],
  },
  {
    index: 414,
    question:
      "You have a jar with 10 black marbles, 7 white marbles, and 3 green marbles. What is the probability of drawing a marble that is not green?",
    correct_answer: "17/20",
    options: ["17/20", "3/20", "7/20", "10/20"],
  },
  {
    index: 415,
    question:
      "If you roll two fair six-sided dice, what is the probability that the sum of the numbers rolled is less than 5?",
    correct_answer: "4/36",
    options: ["4/36", "1/6", "1/12", "1/4"],
  },
  {
    index: 416,
    question:
      "A box contains 8 black balls and 2 white balls. If you draw one ball at random, what is the probability of drawing a black ball?",
    correct_answer: "4/5",
    options: ["4/5", "1/5", "2/10", "8/10"],
  },
  {
    index: 417,
    question:
      "If you roll a fair six-sided die, what is the probability of rolling a prime number?",
    correct_answer: "1/2",
    options: ["1/2", "1/3", "2/3", "1/6"],
  },
  {
    index: 418,
    question:
      "You have a bag with 6 red marbles, 3 blue marbles, and 1 green marble. What is the probability of drawing a blue or green marble?",
    correct_answer: "4/10",
    options: ["4/10", "3/10", "7/10", "1/10"],
  },
  {
    index: 419,
    question:
      "If you flip a fair coin three times, what is the probability of getting at least two heads?",
    correct_answer: "7/8",
    options: ["7/8", "1/8", "3/4", "1/2"],
  },
  {
    index: 420,
    question:
      "In a group of 40 students, 25 are girls and 15 are boys. If a student is selected at random, what is the probability that it is a girl?",
    correct_answer: "5/8",
    options: ["5/8", "3/8", "1/2", "2/5"],
  },
  {
    index: 421,
    question:
      "You have a box with 12 black marbles, 7 white marbles, and 3 gray marbles. What is the probability of drawing a white or gray marble?",
    correct_answer: "1/4",
    options: ["1/4", "1/3", "1/2", "2/3"],
  },
  {
    index: 422,
    question:
      "If you roll two fair six-sided dice, what is the probability that the sum of the numbers rolled is greater than 7?",
    correct_answer: "15/36",
    options: ["15/36", "1/6", "1/12", "1/4"],
  },
  {
    index: 423,
    question:
      "A box contains 5 red balls, 3 blue balls, and 2 green balls. If you draw one ball at random, what is the probability that it is not blue?",
    correct_answer: "7/10",
    options: ["7/10", "1/10", "3/10", "2/5"],
  },
  {
    index: 424,
    question:
      "You have a jar with 10 red marbles, 6 blue marbles, and 4 green marbles. What is the probability of drawing a blue marble?",
    correct_answer: "3/10",
    options: ["3/10", "3/20", "2/5", "3/5"],
  },
  {
    index: 425,
    question:
      "If you flip a fair coin three times, what is the probability of getting exactly one tail?",
    correct_answer: "3/8",
    options: ["3/8", "1/8", "1/2", "1/4"],
  },
  {
    index: 426,
    question:
      "A bag contains 8 red balls, 4 blue balls, and 2 green balls. If you draw one ball at random, what is the probability that it is green?",
    correct_answer: "1/7",
    options: ["1/7", "2/7", "1/5", "3/7"],
  },
  {
    index: 427,
    question:
      "If you randomly select a letter from the word 'PROBABILITY', what is the probability that it is a consonant?",
    correct_answer: "9/11",
    options: ["9/11", "2/11", "1/11", "3/11"],
  },
  {
    index: 428,
    question:
      "You have a jar with 12 red marbles, 7 blue marbles, and 5 green marbles. What is the probability of drawing a blue marble?",
    correct_answer: "7/24",
    options: ["7/24", "5/12", "7/12", "12/24"],
  },
  {
    index: 429,
    question:
      "If you flip a fair coin three times, what is the probability of getting exactly one head?",
    correct_answer: "3/8",
    options: ["3/8", "1/8", "1/2", "1/4"],
  },
  {
    index: 430,
    question:
      "A box contains 6 black balls and 4 white balls. If you draw one ball at random, what is the probability of drawing a white ball?",
    correct_answer: "2/5",
    options: ["2/5", "1/5", "4/10", "3/10"],
  },
  {
    index: 431,
    question:
      "If you roll a fair six-sided die, what is the probability of rolling a prime number?",
    correct_answer: "1/2",
    options: ["1/2", "1/3", "2/3", "1/6"],
  },
  {
    index: 432,
    question:
      "What is the mean of the following set of numbers: 2, 4, 6, 8, 10?",
    correct_answer: "6",
    options: ["6", "5", "7", "8"],
  },
  {
    index: 433,
    question:
      "Find the median of the following set of numbers: 3, 7, 1, 8, 9, 2.",
    correct_answer: "5",
    options: ["3", "5", "7", "8"],
  },
  {
    index: 434,
    question:
      "What is the mode of the following set of numbers: 4, 2, 4, 7, 5, 4, 3, 4?",
    correct_answer: "4",
    options: ["2", "3", "4", "5"],
  },
  {
    index: 435,
    question:
      "Find the range of the following set of numbers: 15, 20, 25, 30, 35.",
    correct_answer: "20",
    options: ["15", "20", "25", "30"],
  },
  {
    index: 436,
    question: "Calculate the mean of the numbers 12, 15, 18, 21, 24, 27, 30.",
    correct_answer: "21",
    options: ["18", "21", "24", "27"],
  },
  {
    index: 437,
    question:
      "What is the median of the following set of numbers: 5, 7, 9, 11, 13, 15, 17?",
    correct_answer: "11",
    options: ["9", "11", "13", "15"],
  },
  {
    index: 438,
    question:
      "Find the mode of the following set of numbers: 3, 7, 3, 9, 3, 5, 7, 9, 9, 11.",
    correct_answer: "3 and 9",
    options: ["3 and 7", "7 and 9", "3 and 9", "5 and 11"],
  },
  {
    index: 439,
    question:
      "What is the range of the following set of numbers: 22, 25, 28, 31, 34, 37, 40?",
    correct_answer: "18",
    options: ["22", "25", "28", "18"],
  },
  {
    index: 440,
    question:
      "Calculate the mean of the numbers 5, 10, 15, 20, 25, 30, 35, 40.",
    correct_answer: "22.5",
    options: ["20", "22.5", "25", "30"],
  },
  {
    index: 441,
    question:
      "Find the median of the following set of numbers: 4, 8, 2, 10, 6, 12, 14.",
    correct_answer: "8",
    options: ["6", "8", "10", "12"],
  },
  {
    index: 442,
    question:
      "What is the mode of the following set of numbers: 2, 4, 6, 8, 10?",
    correct_answer: "No mode",
    options: ["2", "4", "6", "No mode"],
  },
  {
    index: 443,
    question:
      "Find the range of the following set of numbers: 8, 15, 22, 29, 36.",
    correct_answer: "28",
    options: ["8", "15", "22", "28"],
  },
  {
    index: 444,
    question: "Calculate the mean of the numbers 3, 6, 9, 12, 15, 18, 21.",
    correct_answer: "12",
    options: ["9", "12", "15", "18"],
  },
  {
    index: 445,
    question:
      "What is the median of the following set of numbers: 11, 12, 14, 15, 17, 19?",
    correct_answer: "14.5",
    options: ["14", "14.5", "15", "17"],
  },
  {
    index: 446,
    question:
      "Find the mode of the following set of numbers: 2, 4, 6, 4, 8, 10, 4.",
    correct_answer: "4",
    options: ["2", "4", "6", "8"],
  },
  {
    index: 447,
    question:
      "What is the range of the following set of numbers: 17, 21, 25, 29, 33, 37, 41?",
    correct_answer: "24",
    options: ["17", "21", "24", "29"],
  },
  {
    index: 448,
    question: "Calculate the mean of the numbers 2, 4, 6, 8, 10, 12, 14, 16.",
    correct_answer: "9",
    options: ["8", "9", "10", "12"],
  },
  {
    index: 449,
    question:
      "What is the median of the following set of numbers: 5, 6, 10, 12, 14, 16, 18?",
    correct_answer: "11",
    options: ["10", "11", "12", "14"],
  },
  {
    index: 450,
    question:
      "Find the mode of the following set of numbers: 3, 5, 7, 5, 9, 5, 11, 13.",
    correct_answer: "5",
    options: ["3", "5", "7", "9"],
  },
  {
    index: 451,
    question:
      "What is the range of the following set of numbers: 10, 15, 20, 25, 30, 35, 40, 45?",
    correct_answer: "35",
    options: ["25", "30", "35", "40"],
  },
  {
    index: 452,
    question:
      "Calculate the mean of the numbers 2, 5, 8, 11, 14, 17, 20, 23, 26.",
    correct_answer: "14.5",
    options: ["11", "14.5", "17", "20"],
  },
  {
    index: 453,
    question:
      "What is the median of the following set of numbers: 8, 12, 6, 14, 16, 10, 4, 18?",
    correct_answer: "11",
    options: ["10", "11", "12", "14"],
  },
  {
    index: 454,
    question:
      "Find the mode of the following set of numbers: 2, 4, 6, 8, 10, 2, 4.",
    correct_answer: "2 and 4",
    options: ["2 and 6", "4 and 8", "2 and 4", "6 and 10"],
  },
  {
    index: 455,
    question:
      "In a right triangle, if one leg has length 5 and the other leg has length 12, what is the length of the hypotenuse?",
    correct_answer: "13",
    options: ["10", "12", "13", "15"],
  },
  {
    index: 456,
    question:
      "A right triangle has legs of length 6 and 8. What is the length of the hypotenuse?",
    correct_answer: "10",
    options: ["6", "8", "10", "12"],
  },
  {
    index: 457,
    question:
      "If a right triangle has a hypotenuse of length 10 and one leg of length 6, what is the length of the other leg?",
    correct_answer: "8",
    options: ["6", "8", "10", "12"],
  },
  {
    index: 458,
    question:
      "In a right triangle, if one leg has length 9 and the hypotenuse has length 15, what is the length of the other leg?",
    correct_answer: "12",
    options: ["9", "12", "15", "18"],
  },
  {
    index: 459,
    question:
      "A right triangle has legs of length 5 and 12. What is the length of the hypotenuse?",
    correct_answer: "13",
    options: ["10", "12", "13", "15"],
  },
  {
    index: 460,
    question:
      "If a right triangle has a hypotenuse of length 17 and one leg of length 8, what is the length of the other leg?",
    correct_answer: "15",
    options: ["8", "15", "17", "19"],
  },
  {
    index: 461,
    question:
      "In a right triangle, if one leg has length 7 and the other leg has length 24, what is the length of the hypotenuse?",
    correct_answer: "25",
    options: ["21", "24", "25", "28"],
  },
  {
    index: 462,
    question:
      "A right triangle has legs of length 9 and 12. What is the length of the hypotenuse?",
    correct_answer: "15",
    options: ["9", "12", "15", "18"],
  },
  {
    index: 463,
    question:
      "If a right triangle has a hypotenuse of length 26 and one leg of length 10, what is the length of the other leg?",
    correct_answer: "24",
    options: ["10", "24", "26", "28"],
  },
  {
    index: 464,
    question:
      "In a right triangle, if one leg has length 15 and the hypotenuse has length 17, what is the length of the other leg?",
    correct_answer: "8",
    options: ["15", "8", "17", "19"],
  },
  {
    index: 465,
    question:
      "A right triangle has legs of length 7 and 24. What is the length of the hypotenuse?",
    correct_answer: "25",
    options: ["21", "24", "25", "28"],
  },
  {
    index: 466,
    question:
      "If a right triangle has a hypotenuse of length 29 and one leg of length 20, what is the length of the other leg?",
    correct_answer: "21",
    options: ["20", "21", "29", "31"],
  },
  {
    index: 467,
    question:
      "In a right triangle, if one leg has length 8 and the other leg has length 15, what is the length of the hypotenuse?",
    correct_answer: "17",
    options: ["13", "15", "17", "19"],
  },
  {
    index: 468,
    question:
      "A right triangle has legs of length 10 and 24. What is the length of the hypotenuse?",
    correct_answer: "26",
    options: ["20", "24", "26", "28"],
  },
  {
    index: 469,
    question:
      "If a right triangle has a hypotenuse of length 34 and one leg of length 16, what is the length of the other leg?",
    correct_answer: "30",
    options: ["16", "30", "34", "38"],
  },
  {
    index: 470,
    question:
      "In a right triangle, if one leg has length 9 and the other leg has length 40, what is the length of the hypotenuse?",
    correct_answer: "41",
    options: ["39", "40", "41", "42"],
  },
  {
    index: 471,
    question:
      "A right triangle has legs of length 12 and 35. What is the length of the hypotenuse?",
    correct_answer: "37",
    options: ["34", "35", "37", "38"],
  },
  {
    index: 472,
    question:
      "If a right triangle has a hypotenuse of length 41 and one leg of length 9, what is the length of the other leg?",
    correct_answer: "40",
    options: ["39", "40", "41", "42"],
  },
  {
    index: 473,
    question:
      "In a right triangle, if one leg has length 15 and the other leg has length 36, what is the length of the hypotenuse?",
    correct_answer: "39",
    options: ["36", "39", "42", "45"],
  },
  {
    index: 474,
    question:
      "A right triangle has legs of length 16 and 63. What is the length of the hypotenuse?",
    correct_answer: "65",
    options: ["62", "63", "65", "66"],
  },
  {
    index: 475,
    question:
      "If a right triangle has a hypotenuse of length 50 and one leg of length 24, what is the length of the other leg?",
    correct_answer: "26",
    options: ["24", "26", "48", "50"],
  },
  {
    index: 476,
    question:
      "In a right triangle, if one leg has length 17 and the other leg has length 144, what is the length of the hypotenuse?",
    correct_answer: "145",
    options: ["143", "144", "145", "146"],
  },
  {
    index: 477,
    question:
      "A right triangle has legs of length 18 and 80. What is the length of the hypotenuse?",
    correct_answer: "82",
    options: ["79", "80", "82", "84"],
  },
  {
    index: 478,
    question:
      "If a right triangle has a hypotenuse of length 85 and one leg of length 36, what is the length of the other leg?",
    correct_answer: "77",
    options: ["36", "77", "85", "121"],
  },
  {
    index: 479,
    question:
      "In a right triangle, if one leg has length 19 and the other leg has length 180, what is the length of the hypotenuse?",
    correct_answer: "181",
    options: ["179", "180", "181", "182"],
  },
  {
    index: 480,
    question:
      "A right triangle has legs of length 20 and 99. What is the length of the hypotenuse?",
    correct_answer: "101",
    options: ["98", "99", "101", "102"],
  },
  {
    index: 481,
    question:
      "If a right triangle has a hypotenuse of length 100 and one leg of length 48, what is the length of the other leg?",
    correct_answer: "64",
    options: ["48", "64", "100", "148"],
  },
  {
    index: 482,
    question:
      "In a right triangle, if one leg has length 21 and the other leg has length 220, what is the length of the hypotenuse?",
    correct_answer: "221",
    options: ["219", "220", "221", "222"],
  },
  {
    index: 483,
    question:
      "A right triangle has legs of length 22 and 120. What is the length of the hypotenuse?",
    correct_answer: "122",
    options: ["119", "120", "122", "124"],
  },
  {
    index: 484,
    question:
      "If a right triangle has a hypotenuse of length 125 and one leg of length 60, what is the length of the other leg?",
    correct_answer: "115",
    options: ["60", "115", "125", "185"],
  },
  {
    index: 485,
    question:
      "In a right triangle, if one leg has length 23 and the other leg has length 264, what is the length of the hypotenuse?",
    correct_answer: "265",
    options: ["263", "264", "265", "266"],
  },
  {
    index: 486,
    question:
      "A right triangle has legs of length 24 and 143. What is the length of the hypotenuse?",
    correct_answer: "145",
    options: ["141", "143", "145", "147"],
  },
  {
    index: 487,
    question:
      "If a right triangle has a hypotenuse of length 150 and one leg of length 72, what is the length of the other leg?",
    correct_answer: "138",
    options: ["72", "138", "150", "222"],
  },
  {
    index: 488,
    question:
      "In a right triangle, if one leg has length 25 and the other leg has length 312, what is the length of the hypotenuse?",
    correct_answer: "313",
    options: ["311", "312", "313", "314"],
  },
  {
    index: 489,
    question:
      "A right triangle has legs of length 26 and 168. What is the length of the hypotenuse?",
    correct_answer: "170",
    options: ["166", "168", "170", "172"],
  },
  {
    index: 490,
    question:
      "If a right triangle has a hypotenuse of length 175 and one leg of length 84, what is the length of the other leg?",
    correct_answer: "161",
    options: ["84", "161", "175", "259"],
  },
  {
    index: 491,
    question:
      "In a right triangle, if one leg has length 27 and the other leg has length 364, what is the length of the hypotenuse?",
    correct_answer: "365",
    options: ["363", "364", "365", "366"],
  },
  {
    index: 492,
    question:
      "A right triangle has legs of length 28 and 195. What is the length of the hypotenuse?",
    correct_answer: "197",
    options: ["193", "195", "197", "199"],
  },
  {
    index: 493,
    question:
      "If a right triangle has a hypotenuse of length 200 and one leg of length 96, what is the length of the other leg?",
    correct_answer: "164",
    options: ["96", "164", "200", "296"],
  },
  {
    index: 494,
    question:
      "In a right triangle, if one leg has length 29 and the other leg has length 420, what is the length of the hypotenuse?",
    correct_answer: "421",
    options: ["419", "420", "421", "422"],
  },
  {
    index: 495,
    question:
      "A right triangle has legs of length 30 and 221. What is the length of the hypotenuse?",
    correct_answer: "221",
    options: ["217", "221", "225", "229"],
  },
  {
    index: 496,
    question:
      "If a right triangle has a hypotenuse of length 250 and one leg of length 120, what is the length of the other leg?",
    correct_answer: "230",
    options: ["120", "230", "250", "370"],
  },
  {
    index: 497,
    question:
      "In a right triangle, if one leg has length 31 and the other leg has length 480, what is the length of the hypotenuse?",
    correct_answer: "481",
    options: ["479", "480", "481", "482"],
  },
  {
    index: 498,
    question:
      "A right triangle has legs of length 32 and 255. What is the length of the hypotenuse?",
    correct_answer: "257",
    options: ["253", "255", "257", "259"],
  },
  {
    index: 499,
    question:
      "If a right triangle has a hypotenuse of length 260 and one leg of length 126, what is the length of the other leg?",
    correct_answer: "238",
    options: ["126", "238", "260", "386"],
  },
  {
    index: 500,
    question:
      "In a right triangle, if one leg has length 33 and the other leg has length 544, what is the length of the hypotenuse?",
    correct_answer: "545",
    options: ["543", "544", "545", "546"],
  },
];

// export default math;
