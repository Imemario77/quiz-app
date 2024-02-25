const physics = [
  {
    index: 1,
    question: "What is the formula to calculate speed?",
    options: [
      "Speed = Distance / Time",
      "Speed = Time / Distance",
      "Speed = Distance × Time",
      "Speed = Distance + Time",
    ],
    correct_answer: "Speed = Distance / Time",
  },
  {
    index: 2,
    question: "Which of the following is a scalar quantity?",
    options: ["Velocity", "Acceleration", "Distance", "Force"],
    correct_answer: "Distance",
  },
  {
    index: 3,
    question: "What does velocity describe?",
    options: [
      "The rate of change of position",
      "The rate of change of speed",
      "The rate of change of distance",
      "The rate of change of time",
    ],
    correct_answer: "The rate of change of position",
  },
  {
    index: 4,
    question: "What is acceleration?",
    options: [
      "Change in velocity per unit time",
      "Change in speed per unit distance",
      "Change in distance per unit time",
      "Change in time per unit distance",
    ],
    correct_answer: "Change in velocity per unit time",
  },
  {
    index: 5,
    question:
      "A car moves along a straight road. Which of the following is NOT possible?",
    options: [
      "The car having constant speed and changing velocity",
      "The car having constant velocity and changing speed",
      "The car having both constant speed and constant velocity",
      "The car having neither constant speed nor constant velocity",
    ],
    correct_answer: "The car having both constant speed and constant velocity",
  },
  {
    index: 6,
    question:
      "If an object moves with a constant speed of 5 m/s, what can you say about its acceleration?",
    options: [
      "The acceleration is zero",
      "The acceleration is positive",
      "The acceleration is negative",
      "The acceleration is changing",
    ],
    correct_answer: "The acceleration is zero",
  },
  {
    index: 7,
    question: "A train travels 200 meters in 4 seconds. What is its speed?",
    options: ["50 m/s", "100 m/s", "20 m/s", "80 m/s"],
    correct_answer: "50 m/s",
  },
  {
    index: 8,
    question: "What is the SI unit of acceleration?",
    options: [
      "Meter per second (m/s)",
      "Meter per second squared (m/s^2)",
      "Meter per second cubed (m/s^3)",
      "Meter per second to the fourth power (m/s^4)",
    ],
    correct_answer: "Meter per second squared (m/s^2)",
  },
  {
    index: 9,
    question:
      "What happens to the velocity of an object if its acceleration is positive?",
    options: [
      "Velocity increases",
      "Velocity decreases",
      "Velocity remains constant",
      "Velocity becomes negative",
    ],
    correct_answer: "Velocity increases",
  },
  {
    index: 10,
    question:
      "An object is moving with a constant velocity of 10 m/s. What is its acceleration?",
    options: ["10 m/s^2", "0 m/s^2", "5 m/s^2", "Cannot be determined"],
    correct_answer: "0 m/s^2",
  },
  {
    index: 11,
    question:
      "What is the acceleration of a car that increases its velocity from 10 m/s to 30 m/s in 5 seconds?",
    options: ["4 m/s^2", "8 m/s^2", "10 m/s^2", "6 m/s^2"],
    correct_answer: "4 m/s^2",
  },
  {
    index: 12,
    question:
      "If a car is traveling at a constant velocity, what can you say about its acceleration?",
    options: [
      "Acceleration is zero",
      "Acceleration is positive",
      "Acceleration is negative",
      "Acceleration is constant",
    ],
    correct_answer: "Acceleration is zero",
  },
  {
    index: 13,
    question: "Which of the following is a vector quantity?",
    options: ["Distance", "Speed", "Time", "Velocity"],
    correct_answer: "Velocity",
  },
  {
    index: 14,
    question: "What is the difference between speed and velocity?",
    options: [
      "Speed has direction while velocity does not",
      "Velocity has direction while speed does not",
      "Speed and velocity are the same",
      "Speed and velocity both have direction",
    ],
    correct_answer: "Velocity has direction while speed does not",
  },
  {
    index: 15,
    question:
      "A car starts from rest and reaches a velocity of 20 m/s in 5 seconds. What is its acceleration?",
    options: ["4 m/s^2", "5 m/s^2", "10 m/s^2", "Cannot be determined"],
    correct_answer: "4 m/s^2",
  },
  {
    index: 16,
    question: "What does a negative acceleration indicate?",
    options: [
      "Deceleration",
      "Acceleration in the opposite direction",
      "Acceleration towards the origin",
      "No change in acceleration",
    ],
    correct_answer: "Deceleration",
  },
  {
    index: 17,
    question:
      "What happens when an object moves in a circular path at constant speed?",
    options: [
      "Its velocity changes",
      "Its speed changes",
      "Its acceleration changes",
      "It experiences no acceleration",
    ],
    correct_answer: "Its acceleration changes",
  },
  {
    index: 18,
    question:
      "A car travels 100 meters in 4 seconds, then accelerates uniformly and travels an additional 100 meters in the next 2 seconds. What is its average speed for the entire journey?",
    options: ["20 m/s", "25 m/s", "30 m/s", "35 m/s"],
    correct_answer: "20 m/s",
  },
  {
    index: 19,
    question: "Which of the following statements about acceleration is true?",
    options: [
      "Acceleration can be zero even if velocity is not zero",
      "Acceleration is always zero when velocity is zero",
      "Acceleration and velocity are independent of each other",
      "Acceleration is a scalar quantity",
    ],
    correct_answer: "Acceleration can be zero even if velocity is not zero",
  },
  {
    index: 20,
    question:
      "Which of Newton's laws states that an object at rest will remain at rest, and an object in motion will continue in motion with the same velocity unless acted on by an external force?",
    options: ["First law", "Second law", "Third law", "Zeroth law"],
    correct_answer: "First law",
  },
  {
    index: 21,
    question: "What is the SI unit of force?",
    options: ["Kilogram", "Newton", "Meter", "Second"],
    correct_answer: "Newton",
  },
  {
    index: 22,
    question:
      "What is the force that opposes the motion of objects through air called?",
    options: ["Tension", "Friction", "Gravity", "Inertia"],
    correct_answer: "Friction",
  },
  {
    index: 23,
    question: "What is the force that acts on an object due to gravity?",
    options: ["Friction", "Tension", "Normal force", "Weight"],
    correct_answer: "Weight",
  },
  {
    index: 24,
    question:
      "What is the force that keeps objects in a circular motion called?",
    options: [
      "Centripetal force",
      "Frictional force",
      "Gravitational force",
      "Inertial force",
    ],
    correct_answer: "Centripetal force",
  },
  {
    index: 25,
    question:
      "According to Newton's second law of motion, what is the relationship between force, mass, and acceleration?",
    options: ["F = ma", "F = m/a", "F = m + a", "F = m - a"],
    correct_answer: "F = ma",
  },
  {
    index: 26,
    question:
      "If a force of 10 Newtons is applied to an object with a mass of 2 kilograms, what is its acceleration?",
    options: ["2 m/s^2", "5 m/s^2", "20 m/s^2", "Cannot be determined"],
    correct_answer: "5 m/s^2",
  },
  {
    index: 27,
    question:
      "What is the acceleration of an object in free fall near the surface of the Earth?",
    options: ["9.8 m/s^2", "10 m/s^2", "1 m/s^2", "5 m/s^2"],
    correct_answer: "9.8 m/s^2",
  },
  {
    index: 28,
    question:
      "If you push against a wall with a force of 50 Newtons and the wall does not move, what is the net force acting on the wall?",
    options: ["50 N", "0 N", "100 N", "Cannot be determined"],
    correct_answer: "0 N",
  },
  {
    index: 29,
    question:
      "Which of Newton's laws states that for every action, there is an equal and opposite reaction?",
    options: ["First law", "Second law", "Third law", "Zeroth law"],
    correct_answer: "Third law",
  },
  {
    index: 30,
    question:
      "What is the force that acts on an object moving through a fluid, such as air or water?",
    options: ["Tension", "Friction", "Viscous drag", "Inertia"],
    correct_answer: "Viscous drag",
  },
  {
    index: 31,
    question:
      "What is the force that keeps an object at rest on a flat surface?",
    options: ["Tension", "Friction", "Gravity", "Normal force"],
    correct_answer: "Normal force",
  },
  {
    index: 32,
    question:
      "If the mass of an object increases, what happens to its acceleration when the same force is applied?",
    options: [
      "Acceleration increases",
      "Acceleration decreases",
      "Acceleration remains the same",
      "Cannot be determined",
    ],
    correct_answer: "Acceleration decreases",
  },
  {
    index: 33,
    question:
      "What type of force is required to keep an object moving in a circular path?",
    options: ["Tension", "Friction", "Centripetal force", "Gravity"],
    correct_answer: "Centripetal force",
  },
  {
    index: 34,
    question:
      "A force of 20 Newtons is applied to an object with a mass of 5 kilograms. What is its acceleration?",
    options: ["4 m/s^2", "10 m/s^2", "100 m/s^2", "Cannot be determined"],
    correct_answer: "4 m/s^2",
  },
  {
    index: 35,
    question:
      "Which of the following factors affect the frictional force between two surfaces?",
    options: [
      "Nature of surfaces and surface area",
      "Force applied and speed of the object",
      "Mass of the object and distance traveled",
      "None of the above",
    ],
    correct_answer: "Nature of surfaces and surface area",
  },
  {
    index: 36,
    question:
      "What is the minimum force required to keep an object moving at a constant velocity?",
    options: [
      "Frictional force",
      "Centripetal force",
      "Applied force",
      "No force required",
    ],
    correct_answer: "Frictional force",
  },
  {
    index: 37,
    question: "What is the force exerted by a stretched or compressed spring?",
    options: ["Friction", "Tension", "Normal force", "Spring force"],
    correct_answer: "Spring force",
  },
  {
    index: 38,
    question:
      "If an object is moving in a straight line with constant speed, what can you say about the net force acting on it?",
    options: [
      "Net force is zero",
      "Net force is non-zero",
      "Net force is increasing",
      "Net force is decreasing",
    ],
    correct_answer: "Net force is zero",
  },
  {
    index: 39,
    question:
      "Which law of motion explains why it is easier to push an empty shopping cart than a full one?",
    options: ["First law", "Second law", "Third law", "Zeroth law"],
    correct_answer: "First law",
  },
  {
    index: 40,
    question:
      "What is defined as the product of force and displacement in the direction of the force?",
    options: ["Power", "Work", "Energy", "Force"],
    correct_answer: "Work",
  },
  {
    index: 41,
    question: "What is the SI unit of work and energy?",
    options: ["Joule", "Newton", "Watt", "Pascal"],
    correct_answer: "Joule",
  },
  {
    index: 42,
    question: "Which of the following is a unit of power?",
    options: ["Joule", "Newton", "Watt", "Pascal"],
    correct_answer: "Watt",
  },
  {
    index: 43,
    question:
      "What type of energy is possessed by an object due to its position or configuration?",
    options: [
      "Kinetic energy",
      "Potential energy",
      "Mechanical energy",
      "Thermal energy",
    ],
    correct_answer: "Potential energy",
  },
  {
    index: 44,
    question: "What is the kinetic energy of an object?",
    options: [
      "Energy due to its position",
      "Energy due to its motion",
      "Energy due to its temperature",
      "Energy due to its size",
    ],
    correct_answer: "Energy due to its motion",
  },
  {
    index: 45,
    question: "What is the formula for kinetic energy?",
    options: ["KE = 1/2 mv^2", "KE = mgh", "KE = Fd", "KE = P/t"],
    correct_answer: "KE = 1/2 mv^2",
  },
  {
    index: 46,
    question:
      "Which of the following statements is true regarding the conservation of energy?",
    options: [
      "Energy can be created but not destroyed",
      "Energy can be destroyed but not created",
      "Energy can neither be created nor destroyed",
      "Energy can be both created and destroyed",
    ],
    correct_answer: "Energy can neither be created nor destroyed",
  },
  {
    index: 47,
    question:
      "What is the energy stored in an object due to its motion called?",
    options: [
      "Potential energy",
      "Mechanical energy",
      "Kinetic energy",
      "Thermal energy",
    ],
    correct_answer: "Kinetic energy",
  },
  {
    index: 48,
    question:
      "Which of the following factors affect the gravitational potential energy of an object?",
    options: [
      "Mass and velocity",
      "Height and velocity",
      "Height and mass",
      "Mass and acceleration",
    ],
    correct_answer: "Height and mass",
  },
  {
    index: 49,
    question:
      "What happens to the potential energy of an object when it is lifted to a greater height?",
    options: [
      "It increases",
      "It decreases",
      "It remains the same",
      "It becomes zero",
    ],
    correct_answer: "It increases",
  },
  {
    index: 50,
    question:
      "What is the work done on an object when a force is applied but the object does not move?",
    options: [
      "Positive work",
      "Negative work",
      "Zero work",
      "Work cannot be determined",
    ],
    correct_answer: "Zero work",
  },
  {
    index: 51,
    question: "What is the unit of power?",
    options: ["Joule", "Newton", "Watt", "Pascal"],
    correct_answer: "Watt",
  },
  {
    index: 52,
    question: "Which of the following is a form of potential energy?",
    options: [
      "Thermal energy",
      "Chemical energy",
      "Kinetic energy",
      "Sound energy",
    ],
    correct_answer: "Chemical energy",
  },
  {
    index: 53,
    question: "What is the energy of an object in motion called?",
    options: [
      "Potential energy",
      "Mechanical energy",
      "Kinetic energy",
      "Thermal energy",
    ],
    correct_answer: "Kinetic energy",
  },
  {
    index: 54,
    question:
      "What is the work done when a force is applied to an object and it moves in the direction of the force?",
    options: [
      "Positive work",
      "Negative work",
      "Zero work",
      "Work cannot be determined",
    ],
    correct_answer: "Positive work",
  },
  {
    index: 55,
    question: "Which of the following is an example of potential energy?",
    options: [
      "A moving car",
      "A stretched rubber band",
      "A flying bird",
      "A running athlete",
    ],
    correct_answer: "A stretched rubber band",
  },
  {
    index: 56,
    question:
      "What happens to the kinetic energy of an object when its velocity is doubled?",
    options: [
      "It doubles",
      "It quadruples",
      "It halves",
      "It remains the same",
    ],
    correct_answer: "It quadruples",
  },
  {
    index: 57,
    question:
      "What is the energy associated with the random motion of particles called?",
    options: [
      "Potential energy",
      "Mechanical energy",
      "Kinetic energy",
      "Thermal energy",
    ],
    correct_answer: "Thermal energy",
  },
  {
    index: 58,
    question:
      "Which of the following factors affect the kinetic energy of an object?",
    options: [
      "Mass and height",
      "Mass and speed",
      "Height and speed",
      "Mass and acceleration",
    ],
    correct_answer: "Mass and speed",
  },
  {
    index: 59,
    question:
      "What is the total energy of an object due to its motion and position?",
    options: [
      "Potential energy",
      "Mechanical energy",
      "Kinetic energy",
      "Thermal energy",
    ],
    correct_answer: "Mechanical energy",
  },
  {
    index: 60,
    question:
      "What is defined as the product of an object's mass and its velocity?",
    options: ["Energy", "Work", "Power", "Momentum"],
    correct_answer: "Momentum",
  },
  {
    index: 61,
    question: "Which of the following is a vector quantity?",
    options: ["Mass", "Velocity", "Temperature", "Energy"],
    correct_answer: "Velocity",
  },
  {
    index: 62,
    question:
      "Which law of motion states that the total momentum of a closed system remains constant before and after a collision?",
    options: [
      "First law",
      "Second law",
      "Third law",
      "Law of conservation of momentum",
    ],
    correct_answer: "Law of conservation of momentum",
  },
  {
    index: 63,
    question: "What is the SI unit of momentum?",
    options: ["Kilogram-meter", "Newton", "Watt", "Joule"],
    correct_answer: "Kilogram-meter",
  },
  {
    index: 64,
    question:
      "What happens to the total momentum of a system if no external forces act on it?",
    options: [
      "It increases",
      "It decreases",
      "It remains constant",
      "It becomes zero",
    ],
    correct_answer: "It remains constant",
  },
  {
    index: 65,
    question: "What is the momentum of an object at rest?",
    options: ["Zero", "Infinite", "Depends on mass", "Cannot be determined"],
    correct_answer: "Zero",
  },
  {
    index: 66,
    question: "What happens to the momentum of an object if its mass doubles?",
    options: [
      "It doubles",
      "It halves",
      "It remains the same",
      "It becomes zero",
    ],
    correct_answer: "It doubles",
  },
  {
    index: 67,
    question: "Which of the following is an example of an elastic collision?",
    options: [
      "Two cars colliding and sticking together",
      "Two cars colliding and bouncing off each other",
      "A car crashing into a wall",
      "A car skidding to a stop",
    ],
    correct_answer: "Two cars colliding and bouncing off each other",
  },
  {
    index: 68,
    question:
      "In an inelastic collision, what happens to the kinetic energy of the system?",
    options: [
      "It increases",
      "It decreases",
      "It remains constant",
      "It becomes zero",
    ],
    correct_answer: "It decreases",
  },
  {
    index: 69,
    question: "What is the momentum of a 2 kg object moving at 3 m/s?",
    options: ["6 kg m/s", "2 kg m/s", "5 kg m/s", "3 kg m/s"],
    correct_answer: "6 kg m/s",
  },
  {
    index: 70,
    question: "Which type of collision conserves kinetic energy?",
    options: [
      "Elastic collision",
      "Inelastic collision",
      "Perfectly inelastic collision",
      "All types of collisions conserve kinetic energy",
    ],
    correct_answer: "Elastic collision",
  },
  {
    index: 71,
    question:
      "What happens to the momentum of a system if the total external force acting on it is zero?",
    options: [
      "It increases",
      "It decreases",
      "It remains constant",
      "It becomes zero",
    ],
    correct_answer: "It remains constant",
  },
  {
    index: 72,
    question: "What is the momentum of a 500 g object moving at 4 m/s?",
    options: ["2 kg m/s", "2.5 kg m/s", "4 kg m/s", "8 kg m/s"],
    correct_answer: "2 kg m/s",
  },
  {
    index: 73,
    question:
      "Which law of motion is associated with the conservation of momentum?",
    options: [
      "First law",
      "Second law",
      "Third law",
      "Law of conservation of energy",
    ],
    correct_answer: "Third law",
  },
  {
    index: 74,
    question:
      "What happens to the momentum of an object if its velocity is doubled?",
    options: [
      "It doubles",
      "It quadruples",
      "It halves",
      "It remains the same",
    ],
    correct_answer: "It doubles",
  },
  {
    index: 75,
    question:
      "In a perfectly inelastic collision, what happens to the two colliding objects?",
    options: [
      "They stick together and move as one mass",
      "They bounce off each other",
      "One of them stops moving",
      "Their velocities remain the same",
    ],
    correct_answer: "They stick together and move as one mass",
  },
  {
    index: 76,
    question:
      "What is the momentum of a 10 N force acting on an object for 2 seconds?",
    options: ["5 kg m/s", "20 kg m/s", "2.5 kg m/s", "Cannot be determined"],
    correct_answer: "20 kg m/s",
  },
  {
    index: 77,
    question:
      "Which of the following factors affect the momentum of an object?",
    options: [
      "Mass and velocity",
      "Height and velocity",
      "Height and mass",
      "Mass and acceleration",
    ],
    correct_answer: "Mass and velocity",
  },
  {
    index: 78,
    question: "What is the momentum of a 1 kg object moving at 10 m/s?",
    options: ["5 kg m/s", "10 kg m/s", "15 kg m/s", "20 kg m/s"],
    correct_answer: "10 kg m/s",
  },
  {
    index: 79,
    question:
      "Which type of collision results in the maximum loss of kinetic energy?",
    options: [
      "Elastic collision",
      "Inelastic collision",
      "Perfectly inelastic collision",
      "Depends on the situation",
    ],
    correct_answer: "Perfectly inelastic collision",
  },
  {
    index: 80,
    question:
      "What is the force that keeps an object moving in a circular path called?",
    options: [
      "Centrifugal force",
      "Centripetal force",
      "Frictional force",
      "Gravitational force",
    ],
    correct_answer: "Centripetal force",
  },
  {
    index: 81,
    question:
      "What is the direction of the centripetal force acting on an object moving in a circular path?",
    options: [
      "Tangential to the path",
      "Radially inward",
      "Radially outward",
      "Parallel to the path",
    ],
    correct_answer: "Radially inward",
  },
  {
    index: 82,
    question:
      "Which of the following factors affects the magnitude of the centripetal force required to keep an object in circular motion?",
    options: [
      "Mass of the object",
      "Velocity of the object",
      "Radius of the circular path",
      "All of the above",
    ],
    correct_answer: "All of the above",
  },
  {
    index: 83,
    question:
      "What happens to the centripetal force required to keep an object in circular motion if its velocity doubles?",
    options: [
      "It doubles",
      "It quadruples",
      "It halves",
      "It remains the same",
    ],
    correct_answer: "It quadruples",
  },
  {
    index: 84,
    question: "What is the formula for centripetal force?",
    options: ["F = ma", "F = mv^2/r", "F = mgh", "F = P/t"],
    correct_answer: "F = mv^2/r",
  },
  {
    index: 85,
    question: "What is the SI unit of centripetal force?",
    options: ["Newton", "Kilogram", "Meter", "Second"],
    correct_answer: "Newton",
  },
  {
    index: 86,
    question:
      "Which of the following is not required to determine the magnitude of the centripetal force?",
    options: [
      "Mass of the object",
      "Velocity of the object",
      "Density of the medium",
      "Radius of the circular path",
    ],
    correct_answer: "Density of the medium",
  },
  {
    index: 87,
    question:
      "What is the centripetal force acting on a 2 kg object moving at 5 m/s in a circular path of radius 3 meters?",
    options: ["10 N", "20 N", "30 N", "40 N"],
    correct_answer: "10 N",
  },
  {
    index: 88,
    question:
      "Which of the following statements is true regarding the direction of the centripetal force?",
    options: [
      "It always points outward from the center",
      "It always points inward toward the center",
      "It is always tangential to the path",
      "It depends on the object's mass",
    ],
    correct_answer: "It always points inward toward the center",
  },
  {
    index: 89,
    question:
      "What happens to the centripetal force required to keep an object in circular motion if the radius of the circle is doubled?",
    options: [
      "It doubles",
      "It quadruples",
      "It halves",
      "It remains the same",
    ],
    correct_answer: "It halves",
  },
  {
    index: 90,
    question:
      "What happens to the centripetal force required to keep an object in circular motion if the mass of the object is doubled?",
    options: [
      "It doubles",
      "It quadruples",
      "It halves",
      "It remains the same",
    ],
    correct_answer: "It doubles",
  },
  {
    index: 91,
    question:
      "What type of motion does an object experience when the centripetal force acting on it is removed?",
    options: [
      "Uniform motion",
      "Linear motion",
      "Rotational motion",
      "Oscillatory motion",
    ],
    correct_answer: "Linear motion",
  },
  {
    index: 92,
    question:
      "What is the centripetal force required to keep a 500 g object moving at 10 m/s in a circular path of radius 2 meters?",
    options: ["25 N", "50 N", "100 N", "200 N"],
    correct_answer: "100 N",
  },
  {
    index: 93,
    question:
      "What is the centripetal force acting on a 1 kg object moving at 4 m/s in a circular path of radius 2 meters?",
    options: ["4 N", "8 N", "16 N", "32 N"],
    correct_answer: "16 N",
  },
  {
    index: 94,
    question:
      "What is the relationship between the velocity of an object and the centripetal force required to keep it in circular motion?",
    options: [
      "Directly proportional",
      "Inversely proportional",
      "No relationship",
      "Exponential relationship",
    ],
    correct_answer: "Directly proportional",
  },
  {
    index: 95,
    question:
      "What is the direction of the centripetal force acting on an object moving in a horizontal circular path?",
    options: [
      "Upward",
      "Downward",
      "Towards the center",
      "Tangential to the path",
    ],
    correct_answer: "Towards the center",
  },
  {
    index: 96,
    question:
      "Which of the following factors affect the magnitude of the centripetal force required to keep an object in circular motion?",
    options: [
      "Mass of the object",
      "Velocity of the object",
      "Radius of the circular path",
      "All of the above",
    ],
    correct_answer: "All of the above",
  },
  {
    index: 97,
    question:
      "What is the magnitude of the centripetal force required to keep a 10 kg object moving at 6 m/s in a circular path of radius 4 meters?",
    options: ["15 N", "30 N", "45 N", "60 N"],
    correct_answer: "45 N",
  },
  {
    index: 98,
    question:
      "What happens to the centripetal force required to keep an object in circular motion if its velocity is halved?",
    options: [
      "It doubles",
      "It quadruples",
      "It halves",
      "It remains the same",
    ],
    correct_answer: "It halves",
  },
  {
    index: 99,
    question:
      "What is the centripetal force acting on a 3 kg object moving at 4 m/s in a circular path of radius 2 meters?",
    options: ["6 N", "8 N", "12 N", "24 N"],
    correct_answer: "24 N",
  },
  {
    index: 100,
    question:
      "What is defined as the type of periodic motion where the restoring force is directly proportional to the displacement?",
    options: [
      "Uniform circular motion",
      "Simple harmonic motion",
      "Projectile motion",
      "Rotational motion",
    ],
    correct_answer: "Simple harmonic motion",
  },
  {
    index: 101,
    question: "What is the restoring force in a simple harmonic motion?",
    options: [
      "Frictional force",
      "Gravity",
      "Tension",
      "Force proportional to displacement",
    ],
    correct_answer: "Force proportional to displacement",
  },
  {
    index: 102,
    question:
      "What is the frequency of a simple harmonic motion with a period of 2 seconds?",
    options: ["0.5 Hz", "2 Hz", "4 Hz", "6 Hz"],
    correct_answer: "0.5 Hz",
  },
  {
    index: 103,
    question: "What is the amplitude of a simple harmonic motion?",
    options: [
      "Maximum displacement from equilibrium",
      "Total distance traveled",
      "Speed of the object",
      "Acceleration of the object",
    ],
    correct_answer: "Maximum displacement from equilibrium",
  },
  {
    index: 104,
    question: "What is the phase of a simple harmonic motion?",
    options: [
      "Position of the object at a specific time",
      "Time taken to complete one cycle",
      "Maximum displacement from equilibrium",
      "Speed of the object",
    ],
    correct_answer: "Position of the object at a specific time",
  },
  {
    index: 105,
    question: "What is the SI unit of frequency?",
    options: ["Hertz", "Newton", "Joule", "Watt"],
    correct_answer: "Hertz",
  },
  {
    index: 106,
    question: "What is the formula for the period of a simple harmonic motion?",
    options: ["T = 1/f", "T = f * A", "T = m * g", "T = F * d"],
    correct_answer: "T = 1/f",
  },
  {
    index: 107,
    question:
      "What happens to the period of a simple harmonic motion if the frequency doubles?",
    options: [
      "It doubles",
      "It quadruples",
      "It halves",
      "It remains the same",
    ],
    correct_answer: "It halves",
  },
  {
    index: 108,
    question: "What is the phase constant in a simple harmonic motion?",
    options: ["Initial displacement", "Amplitude", "Frequency", "Period"],
    correct_answer: "Initial displacement",
  },
  {
    index: 109,
    question:
      "Which of the following factors affect the period of a simple harmonic motion?",
    options: ["Amplitude", "Mass", "Spring constant", "All of the above"],
    correct_answer: "All of the above",
  },
  {
    index: 110,
    question:
      "What is the frequency of a simple harmonic motion with a period of 0.5 seconds?",
    options: ["0.25 Hz", "2 Hz", "4 Hz", "6 Hz"],
    correct_answer: "2 Hz",
  },
  {
    index: 111,
    question:
      "What is the maximum velocity of an object in simple harmonic motion?",
    options: [
      "At equilibrium position",
      "At maximum displacement",
      "At rest position",
      "At midpoint",
    ],
    correct_answer: "At equilibrium position",
  },
  {
    index: 112,
    question:
      "What is the maximum acceleration of an object in simple harmonic motion?",
    options: [
      "At equilibrium position",
      "At maximum displacement",
      "At rest position",
      "At midpoint",
    ],
    correct_answer: "At maximum displacement",
  },
  {
    index: 113,
    question:
      "Which of the following is a characteristic of simple harmonic motion?",
    options: [
      "Constant velocity",
      "Uniform acceleration",
      "Restoring force proportional to displacement",
      "All of the above",
    ],
    correct_answer: "Restoring force proportional to displacement",
  },
  {
    index: 114,
    question:
      "What is the phase difference between two objects in simple harmonic motion when they are in phase?",
    options: ["180 degrees", "90 degrees", "0 degrees", "45 degrees"],
    correct_answer: "0 degrees",
  },
  {
    index: 115,
    question:
      "What is the phase difference between two objects in simple harmonic motion when they are in antiphase?",
    options: ["180 degrees", "90 degrees", "0 degrees", "45 degrees"],
    correct_answer: "180 degrees",
  },
  {
    index: 116,
    question:
      "Which of the following factors does not affect the frequency of a simple harmonic motion?",
    options: ["Amplitude", "Mass", "Spring constant", "Phase constant"],
    correct_answer: "Phase constant",
  },
  {
    index: 117,
    question:
      "What happens to the frequency of a simple harmonic motion if the period doubles?",
    options: [
      "It doubles",
      "It quadruples",
      "It halves",
      "It remains the same",
    ],
    correct_answer: "It halves",
  },
  {
    index: 118,
    question:
      "What is the period of a simple harmonic motion with a frequency of 3 Hz?",
    options: ["0.33 seconds", "1/3 seconds", "3 seconds", "0.66 seconds"],
    correct_answer: "0.33 seconds",
  },
  {
    index: 119,
    question:
      "What is the formula for the angular frequency (ω) of a simple harmonic motion?",
    options: ["ω = 1/T", "ω = 2πf", "ω = m * g", "ω = F * d"],
    correct_answer: "ω = 2πf",
  },
  {
    index: 120,
    question:
      "What is the force of attraction between two objects due to their masses called?",
    options: [
      "Magnetic force",
      "Electrostatic force",
      "Gravitational force",
      "Nuclear force",
    ],
    correct_answer: "Gravitational force",
  },
  {
    index: 121,
    question: "What is the universal constant of gravitation denoted by?",
    options: ["G", "C", "K", "F"],
    correct_answer: "G",
  },
  {
    index: 122,
    question:
      "What happens to the gravitational force between two objects if the distance between them is doubled?",
    options: [
      "It doubles",
      "It quadruples",
      "It halves",
      "It decreases to one-fourth",
    ],
    correct_answer: "It decreases to one-fourth",
  },
  {
    index: 123,
    question:
      "What is the formula for the gravitational force between two objects?",
    options: [
      "F = G(m1 + m2)",
      "F = G(m1 * m2)",
      "F = G(m1 / m2)",
      "F = G(m1 - m2)",
    ],
    correct_answer: "F = G(m1 * m2)",
  },
  {
    index: 124,
    question: "What is the SI unit of the universal constant of gravitation?",
    options: ["N", "kg", "m/s^2", "N m^2/kg^2"],
    correct_answer: "N m^2/kg^2",
  },
  {
    index: 125,
    question:
      "What happens to the gravitational force between two objects if the mass of one object is doubled?",
    options: [
      "It doubles",
      "It quadruples",
      "It halves",
      "It remains the same",
    ],
    correct_answer: "It doubles",
  },
  {
    index: 126,
    question:
      "What is the relationship between the gravitational force and the distance between two objects?",
    options: [
      "Directly proportional",
      "Inversely proportional",
      "No relationship",
      "Exponential relationship",
    ],
    correct_answer: "Inversely proportional",
  },
  {
    index: 127,
    question:
      "What is the gravitational force between two objects if their masses are both doubled and the distance between them remains the same?",
    options: [
      "It doubles",
      "It quadruples",
      "It halves",
      "It remains the same",
    ],
    correct_answer: "It quadruples",
  },
  {
    index: 128,
    question:
      "What is the gravitational force between two objects if their masses are both halved and the distance between them remains the same?",
    options: [
      "It doubles",
      "It quadruples",
      "It halves",
      "It remains the same",
    ],
    correct_answer: "It remains the same",
  },
  {
    index: 129,
    question:
      "What is the gravitational force between two objects if the distance between them is tripled?",
    options: [
      "It triples",
      "It decreases to one-third",
      "It remains the same",
      "It increases by a factor of 9",
    ],
    correct_answer: "It decreases to one-third",
  },
  {
    index: 130,
    question:
      "What is the gravitational force between two objects if their masses are both doubled and the distance between them is also doubled?",
    options: [
      "It doubles",
      "It quadruples",
      "It halves",
      "It remains the same",
    ],
    correct_answer: "It remains the same",
  },
  {
    index: 131,
    question:
      "What is the formula for the gravitational force between two objects in terms of distance?",
    options: [
      "F = G(m1 + m2)",
      "F = G(m1 * m2)",
      "F = G(m1 / m2)",
      "F = G(m1 - m2)",
    ],
    correct_answer: "F = G(m1 * m2) / r^2",
  },
  {
    index: 132,
    question:
      "What is the acceleration due to gravity on the surface of Earth?",
    options: ["9.8 m/s^2", "5.0 m/s^2", "6.5 m/s^2", "10.2 m/s^2"],
    correct_answer: "9.8 m/s^2",
  },
  {
    index: 133,
    question:
      "What happens to the gravitational force between two objects if the distance between them is halved?",
    options: [
      "It doubles",
      "It quadruples",
      "It halves",
      "It decreases to one-fourth",
    ],
    correct_answer: "It quadruples",
  },
  {
    index: 134,
    question:
      "What is the acceleration due to gravity at a height twice the radius of Earth?",
    options: ["2.45 m/s^2", "4.9 m/s^2", "9.8 m/s^2", "19.6 m/s^2"],
    correct_answer: "4.9 m/s^2",
  },
  {
    index: 135,
    question:
      "What is the gravitational force between two objects if their masses are both halved and the distance between them is tripled?",
    options: [
      "It doubles",
      "It quadruples",
      "It halves",
      "It decreases to one-ninth",
    ],
    correct_answer: "It decreases to one-ninth",
  },
  {
    index: 136,
    question:
      "What is the gravitational force between two objects if their masses are both tripled and the distance between them is halved?",
    options: [
      "It doubles",
      "It quadruples",
      "It halves",
      "It remains the same",
    ],
    correct_answer: "It doubles",
  },
  {
    index: 137,
    question:
      "What is the gravitational force between two objects if the distance between them is doubled and the masses of both objects are tripled?",
    options: [
      "It doubles",
      "It quadruples",
      "It halves",
      "It remains the same",
    ],
    correct_answer: "It remains the same",
  },
  {
    index: 138,
    question:
      "What happens to the gravitational force between two objects if the distance between them is tripled and the masses of both objects are quadrupled?",
    options: [
      "It doubles",
      "It quadruples",
      "It halves",
      "It remains the same",
    ],
    correct_answer: "It halves",
  },
  {
    index: 139,
    question:
      "What is the gravitational force between two objects if their masses are both quadrupled and the distance between them is halved?",
    options: [
      "It doubles",
      "It quadruples",
      "It halves",
      "It remains the same",
    ],
    correct_answer: "It doubles",
  },
  {
    index: 140,
    question: "What is projectile motion?",
    options: [
      "Motion along a straight line",
      "Circular motion",
      "Motion under the influence of gravity",
      "Motion of an object thrown or launched into the air",
    ],
    correct_answer: "Motion of an object thrown or launched into the air",
  },
  {
    index: 141,
    question:
      "Which of the following is not a factor affecting the range of a projectile?",
    options: [
      "Initial velocity",
      "Angle of projection",
      "Height of projection",
      "Gravitational acceleration",
    ],
    correct_answer: "Height of projection",
  },
  {
    index: 142,
    question:
      "At what angle of projection will a projectile have the maximum range?",
    options: ["30 degrees", "45 degrees", "60 degrees", "90 degrees"],
    correct_answer: "45 degrees",
  },
  {
    index: 143,
    question: "What is the path followed by a projectile called?",
    options: ["Curve", "Straight line", "Parabola", "Ellipse"],
    correct_answer: "Parabola",
  },
  {
    index: 144,
    question:
      "What is the horizontal component of the velocity of a projectile at its highest point?",
    options: ["Maximum", "Zero", "Minimum", "Equal to the initial velocity"],
    correct_answer: "Zero",
  },
  {
    index: 145,
    question:
      "What happens to the vertical component of the velocity of a projectile at its highest point?",
    options: ["Maximum", "Zero", "Minimum", "Equal to the initial velocity"],
    correct_answer: "Zero",
  },
  {
    index: 146,
    question:
      "What is the acceleration of a projectile at the highest point of its trajectory?",
    options: [
      "Maximum",
      "Zero",
      "Minimum",
      "Equal to the gravitational acceleration",
    ],
    correct_answer: "Equal to the gravitational acceleration",
  },
  {
    index: 147,
    question: "What is the time of flight of a projectile?",
    options: [
      "The time taken to reach maximum height",
      "The time taken to complete one full cycle",
      "The total time the projectile is in the air",
      "The time taken to reach the final position",
    ],
    correct_answer: "The total time the projectile is in the air",
  },
  {
    index: 148,
    question: "What is the maximum height reached by a projectile?",
    options: [
      "Initial velocity",
      "Angle of projection",
      "Time of flight",
      "Vertical component of initial velocity squared divided by twice the gravitational acceleration",
    ],
    correct_answer:
      "Vertical component of initial velocity squared divided by twice the gravitational acceleration",
  },
  {
    index: 149,
    question:
      "What happens to the horizontal component of the velocity of a projectile throughout its motion?",
    options: [
      "It decreases",
      "It increases",
      "It remains constant",
      "It becomes zero",
    ],
    correct_answer: "It remains constant",
  },
  {
    index: 150,
    question:
      "Which of the following is true for the horizontal motion of a projectile?",
    options: [
      "There is no acceleration",
      "Acceleration is downward",
      "Acceleration is upward",
      "Acceleration is along the direction of velocity",
    ],
    correct_answer: "There is no acceleration",
  },
  {
    index: 151,
    question: "What is the range of a projectile?",
    options: [
      "The maximum height reached",
      "The distance covered horizontally",
      "The total distance traveled",
      "The time taken to reach maximum height",
    ],
    correct_answer: "The distance covered horizontally",
  },
  {
    index: 152,
    question:
      "What happens to the vertical component of the velocity of a projectile as it descends?",
    options: [
      "It decreases",
      "It increases",
      "It remains constant",
      "It becomes zero",
    ],
    correct_answer: "It decreases",
  },
  {
    index: 153,
    question:
      "What is the angle of projection of a projectile if its horizontal and vertical components of velocity are equal?",
    options: ["30 degrees", "45 degrees", "60 degrees", "90 degrees"],
    correct_answer: "45 degrees",
  },
  {
    index: 154,
    question: "What is the formula for the horizontal range of a projectile?",
    options: [
      "R = v0 * t",
      "R = v0 * sin(θ)",
      "R = v0 * cos(θ)",
      "R = v0^2 * sin(2θ) / g",
    ],
    correct_answer: "R = v0^2 * sin(2θ) / g",
  },
  {
    index: 155,
    question:
      "What is the formula for the maximum height reached by a projectile?",
    options: [
      "H = v0 * t",
      "H = v0 * sin(θ)",
      "H = v0 * cos(θ)",
      "H = v0^2 * sin^2(θ) / (2g)",
    ],
    correct_answer: "H = v0^2 * sin^2(θ) / (2g)",
  },
  {
    index: 156,
    question: "What is the formula for the time of flight of a projectile?",
    options: [
      "T = v0 * t",
      "T = v0 * sin(θ)",
      "T = v0 * cos(θ)",
      "T = 2 * v0 * sin(θ) / g",
    ],
    correct_answer: "T = 2 * v0 * sin(θ) / g",
  },
  {
    index: 157,
    question:
      "What is the formula for the velocity of a projectile at any point in its trajectory?",
    options: [
      "v = v0 + at",
      "v = v0 * sin(θ) - gt",
      "v = v0 * cos(θ) - gt",
      "v = v0 * sin(θ) + gt",
    ],
    correct_answer: "v = v0 * sin(θ) - gt",
  },
  {
    index: 158,
    question:
      "What is the formula for the vertical displacement of a projectile at any time t?",
    options: [
      "y = v0 * t",
      "y = v0 * sin(θ) * t - (1/2)gt^2",
      "y = v0 * cos(θ) * t - (1/2)gt^2",
      "y = v0 * sin(θ) * t + (1/2)gt^2",
    ],
    correct_answer: "y = v0 * sin(θ) * t - (1/2)gt^2",
  },
  {
    index: 159,
    question:
      "What is the formula for the horizontal displacement of a projectile at any time t?",
    options: [
      "x = v0 * t",
      "x = v0 * sin(θ) * t",
      "x = v0 * cos(θ) * t",
      "x = v0 * cos(θ) * t + (1/2)gt^2",
    ],
    correct_answer: "x = v0 * cos(θ) * t",
  },
  {
    index: 160,
    question: "What is temperature?",
    options: [
      "The measure of an object's internal energy",
      "The measure of an object's thermal conductivity",
      "The measure of an object's mass",
      "The measure of an object's kinetic energy",
    ],
    correct_answer: "The measure of an object's kinetic energy",
  },
  {
    index: 161,
    question: "What is the SI unit of temperature?",
    options: ["Kelvin", "Celsius", "Fahrenheit", "Rankine"],
    correct_answer: "Kelvin",
  },
  {
    index: 162,
    question: "What is absolute zero?",
    options: [
      "0 degrees Celsius",
      "0 degrees Fahrenheit",
      "0 Kelvin",
      "0 Rankine",
    ],
    correct_answer: "0 Kelvin",
  },
  {
    index: 163,
    question:
      "What is the process of transferring heat through direct contact called?",
    options: ["Convection", "Conduction", "Radiation", "Sublimation"],
    correct_answer: "Conduction",
  },
  {
    index: 164,
    question:
      "What is the transfer of heat through the movement of fluids called?",
    options: ["Convection", "Conduction", "Radiation", "Sublimation"],
    correct_answer: "Convection",
  },
  {
    index: 165,
    question: "Which of the following materials is a good conductor of heat?",
    options: ["Wood", "Rubber", "Glass", "Copper"],
    correct_answer: "Copper",
  },
  {
    index: 166,
    question:
      "What is the transfer of heat through electromagnetic waves called?",
    options: ["Convection", "Conduction", "Radiation", "Sublimation"],
    correct_answer: "Radiation",
  },
  {
    index: 167,
    question: "Which of the following has the highest specific heat capacity?",
    options: ["Water", "Steel", "Aluminum", "Copper"],
    correct_answer: "Water",
  },
  {
    index: 168,
    question: "What is specific heat capacity?",
    options: [
      "The amount of heat needed to raise the temperature of one kilogram of the substance by one degree Celsius",
      "The measure of how much a substance expands when heated",
      "The temperature at which a substance changes phase",
      "The amount of heat needed to change the phase of one kilogram of the substance",
    ],
    correct_answer:
      "The amount of heat needed to raise the temperature of one kilogram of the substance by one degree Celsius",
  },
  {
    index: 169,
    question: "What is the formula for calculating heat?",
    options: ["Q = mcΔT", "Q = mc^2", "Q = mv^2", "Q = Fd"],
    correct_answer: "Q = mcΔT",
  },
  {
    index: 170,
    question:
      "What happens to the temperature of a substance when heat is added to it?",
    options: [
      "It decreases",
      "It remains the same",
      "It fluctuates",
      "It increases",
    ],
    correct_answer: "It increases",
  },
  {
    index: 171,
    question:
      "What is the transfer of heat energy during a change of phase called?",
    options: ["Latent heat", "Sensible heat", "Specific heat", "Heat capacity"],
    correct_answer: "Latent heat",
  },
  {
    index: 172,
    question: "Which of the following is an example of sensible heat?",
    options: [
      "Melting of ice",
      "Boiling of water",
      "Heating of water from 20°C to 30°C",
      "Condensation of steam",
    ],
    correct_answer: "Heating of water from 20°C to 30°C",
  },
  {
    index: 173,
    question:
      "What is the heat required to change one kilogram of a substance from a solid to a liquid at its melting point called?",
    options: [
      "Latent heat of fusion",
      "Latent heat of vaporization",
      "Specific heat capacity",
      "Thermal conductivity",
    ],
    correct_answer: "Latent heat of fusion",
  },
  {
    index: 174,
    question:
      "What is the heat required to change one kilogram of a substance from a liquid to a gas at its boiling point called?",
    options: [
      "Latent heat of fusion",
      "Latent heat of vaporization",
      "Specific heat capacity",
      "Thermal conductivity",
    ],
    correct_answer: "Latent heat of vaporization",
  },
  {
    index: 175,
    question:
      "What is the relationship between the melting point and the boiling point of a substance and its latent heat of fusion and vaporization?",
    options: [
      "Directly proportional",
      "Inversely proportional",
      "No relationship",
      "Exponential relationship",
    ],
    correct_answer: "No relationship",
  },
  {
    index: 176,
    question:
      "What is the transfer of heat energy during a change of phase at constant temperature called?",
    options: [
      "Sensible heat",
      "Latent heat",
      "Specific heat",
      "Thermal conductivity",
    ],
    correct_answer: "Latent heat",
  },
  {
    index: 177,
    question: "Which of the following materials is an insulator?",
    options: ["Aluminum", "Copper", "Glass", "Rubber"],
    correct_answer: "Rubber",
  },
  {
    index: 178,
    question:
      "What is the phenomenon where a substance changes directly from a solid to a gas without passing through the liquid phase called?",
    options: ["Melting", "Vaporization", "Sublimation", "Condensation"],
    correct_answer: "Sublimation",
  },
  {
    index: 179,
    question: "What is the coefficient of linear expansion?",
    options: [
      "The ratio of the increase in volume to the increase in temperature",
      "The ratio of the increase in length to the increase in temperature",
      "The ratio of the increase in mass to the increase in temperature",
      "The ratio of the increase in area to the increase in temperature",
    ],
    correct_answer:
      "The ratio of the increase in length to the increase in temperature",
  },
  {
    index: 180,
    question: "Which state of matter has a definite shape and volume?",
    options: ["Solid", "Liquid", "Gas", "Plasma"],
    correct_answer: "Solid",
  },
  {
    index: 181,
    question:
      "What happens to the arrangement of particles in a substance as it changes from a solid to a liquid?",
    options: [
      "Particles become more tightly packed",
      "Particles become less tightly packed",
      "Particles remain the same distance apart",
      "Particles lose their kinetic energy",
    ],
    correct_answer: "Particles become less tightly packed",
  },
  {
    index: 182,
    question:
      "What is the process called when a solid changes directly to a gas without passing through the liquid state?",
    options: ["Melting", "Condensation", "Sublimation", "Evaporation"],
    correct_answer: "Sublimation",
  },
  {
    index: 183,
    question:
      "What is the process called when a gas changes directly to a solid without passing through the liquid state?",
    options: ["Melting", "Condensation", "Sublimation", "Deposition"],
    correct_answer: "Deposition",
  },
  {
    index: 184,
    question:
      "What is the temperature at which a substance changes from a liquid to a gas at atmospheric pressure called?",
    options: [
      "Freezing point",
      "Boiling point",
      "Melting point",
      "Condensation point",
    ],
    correct_answer: "Boiling point",
  },
  {
    index: 185,
    question: "What is the process called when a gas changes to a liquid?",
    options: ["Melting", "Vaporization", "Condensation", "Sublimation"],
    correct_answer: "Condensation",
  },
  {
    index: 186,
    question:
      "Which state of matter has a definite volume but no definite shape?",
    options: ["Solid", "Liquid", "Gas", "Plasma"],
    correct_answer: "Liquid",
  },
  {
    index: 187,
    question:
      "What is the process called when a liquid changes to a gas at the surface of the liquid?",
    options: ["Melting", "Vaporization", "Condensation", "Sublimation"],
    correct_answer: "Vaporization",
  },
  {
    index: 188,
    question:
      "What is the temperature at which a substance changes from a gas to a liquid at atmospheric pressure called?",
    options: [
      "Freezing point",
      "Boiling point",
      "Melting point",
      "Condensation point",
    ],
    correct_answer: "Boiling point",
  },
  {
    index: 189,
    question: "What is the process called when a liquid changes to a solid?",
    options: ["Melting", "Vaporization", "Condensation", "Freezing"],
    correct_answer: "Freezing",
  },
  {
    index: 190,
    question:
      "What is the temperature at which a substance changes from a solid to a liquid called?",
    options: [
      "Freezing point",
      "Boiling point",
      "Melting point",
      "Condensation point",
    ],
    correct_answer: "Melting point",
  },
  {
    index: 191,
    question: "Which state of matter has no definite shape or volume?",
    options: ["Solid", "Liquid", "Gas", "Plasma"],
    correct_answer: "Gas",
  },
  {
    index: 192,
    question:
      "What is the process called when a gas changes to a solid without passing through the liquid state?",
    options: ["Melting", "Condensation", "Sublimation", "Deposition"],
    correct_answer: "Deposition",
  },
  {
    index: 193,
    question:
      "What is the process called when a solid changes to a gas without passing through the liquid state?",
    options: ["Melting", "Condensation", "Sublimation", "Evaporation"],
    correct_answer: "Sublimation",
  },
  {
    index: 194,
    question: "What is the process called when a gas changes to a liquid?",
    options: ["Melting", "Vaporization", "Condensation", "Sublimation"],
    correct_answer: "Condensation",
  },
  {
    index: 195,
    question:
      "Which of the following is an example of a substance undergoing sublimation?",
    options: [
      "Water boiling",
      "Ice melting",
      "Dry ice turning into gas",
      "Water freezing",
    ],
    correct_answer: "Dry ice turning into gas",
  },
  {
    index: 196,
    question:
      "Which state of matter is characterized by having no definite shape or volume and consists of ions and free electrons?",
    options: ["Solid", "Liquid", "Gas", "Plasma"],
    correct_answer: "Plasma",
  },
  {
    index: 197,
    question:
      "What is the process called when a substance changes directly from a solid to a gas without passing through the liquid state?",
    options: ["Melting", "Condensation", "Sublimation", "Evaporation"],
    correct_answer: "Sublimation",
  },
  {
    index: 198,
    question:
      "What is the temperature at which a substance changes from a gas to a liquid called?",
    options: [
      "Freezing point",
      "Boiling point",
      "Melting point",
      "Condensation point",
    ],
    correct_answer: "Condensation point",
  },
  {
    index: 199,
    question:
      "Which of the following is an example of a substance undergoing deposition?",
    options: [
      "Water boiling",
      "Ice melting",
      "Dry ice turning into gas",
      "Water freezing",
    ],
    correct_answer: "Water freezing",
  },
  {
    index: 200,
    question: "What is the Ideal Gas Law equation?",
    options: ["PV = nRT", "PV = nkT", "P = nRT/V", "PV = RT/n"],
    correct_answer: "PV = nRT",
  },
  {
    index: 201,
    question: "What does 'P' represent in the Ideal Gas Law equation?",
    options: ["Pressure", "Volume", "Temperature", "Number of moles"],
    correct_answer: "Pressure",
  },
  {
    index: 202,
    question: "What does 'V' represent in the Ideal Gas Law equation?",
    options: ["Pressure", "Volume", "Temperature", "Number of moles"],
    correct_answer: "Volume",
  },
  {
    index: 203,
    question: "What does 'n' represent in the Ideal Gas Law equation?",
    options: ["Pressure", "Volume", "Temperature", "Number of moles"],
    correct_answer: "Number of moles",
  },
  {
    index: 204,
    question: "What does 'R' represent in the Ideal Gas Law equation?",
    options: [
      "Ideal gas constant",
      "Density",
      "Molar mass",
      "Specific heat capacity",
    ],
    correct_answer: "Ideal gas constant",
  },
  {
    index: 205,
    question: "What does 'T' represent in the Ideal Gas Law equation?",
    options: ["Pressure", "Volume", "Temperature", "Number of moles"],
    correct_answer: "Temperature",
  },
  {
    index: 206,
    question:
      "What is the unit of the ideal gas constant 'R' in the Ideal Gas Law equation when pressure is in atmosphere, volume in liters, temperature in Kelvin, and the number of moles is in moles?",
    options: ["atm L/mol K", "J/mol K", "Pa m^3/mol K", "N/m^2"],
    correct_answer: "atm L/mol K",
  },
  {
    index: 207,
    question: "What is Boyle's Law?",
    options: ["V ∝ T", "P ∝ T", "PV = constant", "P ∝ 1/V"],
    correct_answer: "P ∝ 1/V",
  },
  {
    index: 208,
    question:
      "According to Boyle's Law, if the volume of a gas is doubled while keeping the temperature constant, what happens to its pressure?",
    options: [
      "It is halved",
      "It is doubled",
      "It remains the same",
      "It quadruples",
    ],
    correct_answer: "It is halved",
  },
  {
    index: 209,
    question: "What is Charles's Law?",
    options: ["V ∝ T", "P ∝ T", "PV = constant", "P ∝ 1/V"],
    correct_answer: "V ∝ T",
  },
  {
    index: 210,
    question:
      "According to Charles's Law, if the temperature of a gas is doubled while keeping the pressure constant, what happens to its volume?",
    options: [
      "It is halved",
      "It is doubled",
      "It remains the same",
      "It quadruples",
    ],
    correct_answer: "It is doubled",
  },
  {
    index: 211,
    question: "What is Gay-Lussac's Law?",
    options: ["V ∝ T", "P ∝ T", "PV = constant", "P ∝ 1/V"],
    correct_answer: "P ∝ T",
  },
  {
    index: 212,
    question:
      "According to Gay-Lussac's Law, if the temperature of a gas is doubled while keeping the volume constant, what happens to its pressure?",
    options: [
      "It is halved",
      "It is doubled",
      "It remains the same",
      "It quadruples",
    ],
    correct_answer: "It is doubled",
  },
  {
    index: 213,
    question: "What is Avogadro's Law?",
    options: ["V ∝ T", "P ∝ T", "PV = constant", "V ∝ n"],
    correct_answer: "V ∝ n",
  },
  {
    index: 214,
    question:
      "According to Avogadro's Law, if the number of moles of a gas is doubled while keeping the temperature and pressure constant, what happens to its volume?",
    options: [
      "It is halved",
      "It is doubled",
      "It remains the same",
      "It quadruples",
    ],
    correct_answer: "It is doubled",
  },
  {
    index: 215,
    question: "Which of the following is NOT a statement of the Ideal Gas Law?",
    options: ["PV = nRT", "P ∝ 1/V", "V ∝ T", "P ∝ T"],
    correct_answer: "P ∝ T",
  },
  {
    index: 216,
    question: "What does 'n' represent in Avogadro's Law?",
    options: ["Pressure", "Volume", "Temperature", "Number of moles"],
    correct_answer: "Number of moles",
  },
  {
    index: 217,
    question:
      "According to the Ideal Gas Law, if the volume of a gas is halved while keeping the temperature constant, what happens to its pressure?",
    options: [
      "It is halved",
      "It is doubled",
      "It remains the same",
      "It quadruples",
    ],
    correct_answer: "It is doubled",
  },
  {
    index: 218,
    question:
      "According to the Ideal Gas Law, if the temperature of a gas is doubled while keeping the volume constant, what happens to its pressure?",
    options: [
      "It is halved",
      "It is doubled",
      "It remains the same",
      "It quadruples",
    ],
    correct_answer: "It is doubled",
  },
  {
    index: 219,
    question:
      "According to the Ideal Gas Law, if the number of moles of a gas is doubled while keeping the volume and temperature constant, what happens to its pressure?",
    options: [
      "It is halved",
      "It is doubled",
      "It remains the same",
      "It quadruples",
    ],
    correct_answer: "It is doubled",
  },
  {
    index: 220,
    question: "What is the primary purpose of a heat engine?",
    options: [
      "To convert heat into mechanical work",
      "To convert mechanical work into heat",
      "To transfer heat from a cold reservoir to a hot reservoir",
      "To maintain a constant temperature",
    ],
    correct_answer: "To convert heat into mechanical work",
  },
  {
    index: 221,
    question:
      "Which law of thermodynamics governs the operation of heat engines?",
    options: ["Zeroth law", "First law", "Second law", "Third law"],
    correct_answer: "Second law",
  },
  {
    index: 222,
    question: "What is the efficiency of a heat engine?",
    options: [
      "The ratio of output work to input heat",
      "The ratio of input heat to output work",
      "The total amount of work done",
      "The temperature difference between the reservoirs",
    ],
    correct_answer: "The ratio of output work to input heat",
  },
  {
    index: 223,
    question:
      "Which of the following statements is true about the efficiency of a heat engine?",
    options: [
      "It can exceed 100%",
      "It is always less than 100%",
      "It is independent of temperature",
      "It increases with decreasing temperature",
    ],
    correct_answer: "It is always less than 100%",
  },
  {
    index: 224,
    question: "What is the purpose of a refrigerator?",
    options: [
      "To convert heat into mechanical work",
      "To convert mechanical work into heat",
      "To transfer heat from a cold reservoir to a hot reservoir",
      "To transfer heat from a hot reservoir to a cold reservoir",
    ],
    correct_answer: "To transfer heat from a cold reservoir to a hot reservoir",
  },
  {
    index: 225,
    question:
      "Which law of thermodynamics governs the operation of refrigerators?",
    options: ["Zeroth law", "First law", "Second law", "Third law"],
    correct_answer: "Second law",
  },
  {
    index: 226,
    question: "What is the coefficient of performance (COP) of a refrigerator?",
    options: [
      "The ratio of output work to input heat",
      "The ratio of input work to output heat",
      "The ratio of input heat to output work",
      "The total amount of work done",
    ],
    correct_answer: "The ratio of output work to input heat",
  },
  {
    index: 227,
    question:
      "Which of the following statements is true about the coefficient of performance (COP) of a refrigerator?",
    options: [
      "It can exceed 100%",
      "It is always less than 100%",
      "It is independent of temperature",
      "It increases with decreasing temperature difference",
    ],
    correct_answer: "It can exceed 100%",
  },
  {
    index: 228,
    question: "What is the function of the working fluid in a heat engine?",
    options: [
      "To provide mechanical work",
      "To transfer heat",
      "To change temperature",
      "To maintain pressure",
    ],
    correct_answer: "To transfer heat",
  },
  {
    index: 229,
    question: "Which of the following is NOT a type of heat engine?",
    options: [
      "Steam engine",
      "Internal combustion engine",
      "Refrigerator",
      "Gas turbine",
    ],
    correct_answer: "Refrigerator",
  },
  {
    index: 230,
    question: "What is the Carnot cycle?",
    options: [
      "A theoretical cycle that represents the maximum efficiency of a heat engine",
      "A practical cycle used in refrigerators",
      "A type of gas turbine",
      "A type of internal combustion engine",
    ],
    correct_answer:
      "A theoretical cycle that represents the maximum efficiency of a heat engine",
  },
  {
    index: 231,
    question: "What is the purpose of the condenser in a refrigeration system?",
    options: [
      "To compress the refrigerant",
      "To transfer heat to the surroundings",
      "To expand the refrigerant",
      "To cool the surroundings",
    ],
    correct_answer: "To transfer heat to the surroundings",
  },
  {
    index: 232,
    question:
      "What is the purpose of the evaporator in a refrigeration system?",
    options: [
      "To compress the refrigerant",
      "To transfer heat to the surroundings",
      "To expand the refrigerant",
      "To cool the surroundings",
    ],
    correct_answer: "To cool the surroundings",
  },
  {
    index: 233,
    question: "What is the role of the compressor in a refrigeration system?",
    options: [
      "To compress the refrigerant",
      "To transfer heat to the surroundings",
      "To expand the refrigerant",
      "To cool the surroundings",
    ],
    correct_answer: "To compress the refrigerant",
  },
  {
    index: 234,
    question:
      "What is the role of the expansion valve in a refrigeration system?",
    options: [
      "To compress the refrigerant",
      "To transfer heat to the surroundings",
      "To expand the refrigerant",
      "To cool the surroundings",
    ],
    correct_answer: "To expand the refrigerant",
  },
  {
    index: 235,
    question:
      "Which of the following is a common working fluid used in heat engines?",
    options: ["Water", "Mercury", "Ethanol", "Steam"],
    correct_answer: "Steam",
  },
  {
    index: 236,
    question:
      "Which of the following is a common refrigerant used in refrigeration systems?",
    options: ["Water", "Mercury", "Ethanol", "Freon"],
    correct_answer: "Freon",
  },
  {
    index: 237,
    question:
      "What is the main limitation of the Carnot cycle in practical applications?",
    options: [
      "It requires a perfect vacuum",
      "It is too complex to implement",
      "It is limited by the properties of real working fluids",
      "It is not efficient enough",
    ],
    correct_answer: "It is limited by the properties of real working fluids",
  },
  {
    index: 238,
    question: "What is the role of the heat exchanger in a heat engine?",
    options: [
      "To compress the working fluid",
      "To transfer heat between the working fluid and its surroundings",
      "To expand the working fluid",
      "To cool the surroundings",
    ],
    correct_answer:
      "To transfer heat between the working fluid and its surroundings",
  },
  {
    index: 239,
    question:
      "What is the role of the throttle valve in a refrigeration system?",
    options: [
      "To compress the refrigerant",
      "To transfer heat to the surroundings",
      "To expand the refrigerant",
      "To control the flow of refrigerant into the evaporator",
    ],
    correct_answer: "To control the flow of refrigerant into the evaporator",
  },
  {
    index: 240,
    question: "What does entropy measure in thermodynamics?",
    options: [
      "The total energy of a system",
      "The disorder or randomness of a system",
      "The temperature of a system",
      "The pressure of a system",
    ],
    correct_answer: "The disorder or randomness of a system",
  },
  {
    index: 241,
    question:
      "Which law of thermodynamics states that the entropy of an isolated system always increases over time?",
    options: ["Zeroth law", "First law", "Second law", "Third law"],
    correct_answer: "Second law",
  },
  {
    index: 242,
    question:
      "In which direction does entropy tend to change in a closed system?",
    options: [
      "It tends to decrease",
      "It remains constant",
      "It tends to increase",
      "It oscillates",
    ],
    correct_answer: "It tends to increase",
  },
  {
    index: 243,
    question:
      "What is the statistical definition of entropy in terms of microstates and macrostates?",
    options: [
      "Entropy is a measure of the total energy of a system",
      "Entropy is a measure of the number of microstates corresponding to a particular macrostate",
      "Entropy is a measure of the temperature of a system",
      "Entropy is a measure of the pressure of a system",
    ],
    correct_answer:
      "Entropy is a measure of the number of microstates corresponding to a particular macrostate",
  },
  {
    index: 244,
    question:
      "Which of the following statements best describes the second law of thermodynamics?",
    options: [
      "Energy cannot be created or destroyed",
      "The entropy of an isolated system tends to increase",
      "Heat flows spontaneously from hot to cold objects",
      "All systems tend towards a state of minimum energy",
    ],
    correct_answer: "The entropy of an isolated system tends to increase",
  },
  {
    index: 245,
    question: "What is the change in entropy of a reversible process?",
    options: [
      "Positive",
      "Zero",
      "Negative",
      "Depends on the specific process",
    ],
    correct_answer: "Zero",
  },
  {
    index: 246,
    question:
      "What is the unit of entropy in the International System of Units (SI)?",
    options: [
      "Joules per kilogram-kelvin (J/kg·K)",
      "Joules (J)",
      "Kelvin (K)",
      "Joules per kelvin (J/K)",
    ],
    correct_answer: "Joules per kilogram-kelvin (J/kg·K)",
  },
  {
    index: 247,
    question:
      "What is the maximum possible efficiency of a heat engine operating between two reservoirs at temperatures T1 and T2, according to the Carnot efficiency formula?",
    options: ["T2 / T1", "(T1 - T2) / T1", "(T1 - T2) / T2", "1 - (T2 / T1)"],
    correct_answer: "1 - (T2 / T1)",
  },
  {
    index: 248,
    question:
      "What is the relationship between entropy and the availability of energy in a system?",
    options: [
      "Higher entropy corresponds to lower energy availability",
      "Higher entropy corresponds to higher energy availability",
      "Entropy is unrelated to energy availability",
      "Entropy and energy availability have an inverse relationship",
    ],
    correct_answer: "Higher entropy corresponds to lower energy availability",
  },
  {
    index: 249,
    question: "What is an example of an irreversible process?",
    options: [
      "Melting of ice",
      "Boiling of water",
      "Expansion of an ideal gas",
      "Friction between two surfaces",
    ],
    correct_answer: "Friction between two surfaces",
  },
  {
    index: 250,
    question:
      "What is the entropy change for an ideal gas undergoing an isothermal reversible expansion?",
    options: ["Zero", "Positive", "Negative", "Depends on the specific gas"],
    correct_answer: "Zero",
  },
  {
    index: 251,
    question:
      "Which of the following processes is associated with a decrease in entropy?",
    options: [
      "Condensation of steam",
      "Freezing of water",
      "Expansion of a gas",
      "Melting of ice",
    ],
    correct_answer: "Freezing of water",
  },
  {
    index: 252,
    question: "What is the entropy change when a gas expands into a vacuum?",
    options: ["Positive", "Zero", "Negative", "Depends on the specific gas"],
    correct_answer: "Positive",
  },
  {
    index: 253,
    question:
      "What is the entropy change when heat is transferred from a hot object to a cold object?",
    options: [
      "Positive",
      "Zero",
      "Negative",
      "Depends on the specific objects",
    ],
    correct_answer: "Positive",
  },
  {
    index: 254,
    question: "What is the entropy change when a liquid evaporates into a gas?",
    options: ["Positive", "Zero", "Negative", "Depends on the specific liquid"],
    correct_answer: "Positive",
  },
  {
    index: 255,
    question:
      "What is the entropy change when a gas is compressed isothermally and reversibly?",
    options: ["Positive", "Zero", "Negative", "Depends on the specific gas"],
    correct_answer: "Negative",
  },
  {
    index: 256,
    question:
      "What is the entropy change when a crystal lattice is formed from individual atoms?",
    options: ["Positive", "Zero", "Negative", "Depends on the specific atoms"],
    correct_answer: "Negative",
  },
  {
    index: 257,
    question:
      "What is the statistical basis for the second law of thermodynamics?",
    options: [
      "The law of large numbers",
      "The law of conservation of energy",
      "The law of conservation of momentum",
      "The law of universal gravitation",
    ],
    correct_answer: "The law of large numbers",
  },
  {
    index: 258,
    question:
      "What is the relationship between entropy and information theory?",
    options: [
      "Entropy measures disorder, while information measures order",
      "Entropy measures order, while information measures disorder",
      "Entropy and information are unrelated",
      "Entropy and information have an inverse relationship",
    ],
    correct_answer:
      "Entropy measures disorder, while information measures order",
  },
  {
    index: 259,
    question: "What is the entropy change when two gases mix together?",
    options: ["Positive", "Zero", "Negative", "Depends on the specific gases"],
    correct_answer: "Positive",
  },
  {
    index: 260,
    question: "What is a phase change?",
    options: [
      "A change in the state of matter",
      "A change in the chemical composition of a substance",
      "A change in the temperature of a substance",
      "A change in the pressure of a substance",
    ],
    correct_answer: "A change in the state of matter",
  },
  {
    index: 261,
    question: "What is melting?",
    options: [
      "The process of a solid turning into a gas",
      "The process of a gas turning into a liquid",
      "The process of a solid turning into a liquid",
      "The process of a liquid turning into a solid",
    ],
    correct_answer: "The process of a solid turning into a liquid",
  },
  {
    index: 262,
    question: "What is freezing?",
    options: [
      "The process of a solid turning into a gas",
      "The process of a gas turning into a liquid",
      "The process of a solid turning into a liquid",
      "The process of a liquid turning into a solid",
    ],
    correct_answer: "The process of a liquid turning into a solid",
  },
  {
    index: 263,
    question: "What is boiling?",
    options: [
      "The process of a solid turning into a gas",
      "The process of a gas turning into a liquid",
      "The process of a solid turning into a liquid",
      "The process of a liquid turning into a gas",
    ],
    correct_answer: "The process of a liquid turning into a gas",
  },
  {
    index: 264,
    question: "What is condensation?",
    options: [
      "The process of a solid turning into a gas",
      "The process of a gas turning into a liquid",
      "The process of a solid turning into a liquid",
      "The process of a liquid turning into a gas",
    ],
    correct_answer: "The process of a gas turning into a liquid",
  },
  {
    index: 265,
    question: "What is sublimation?",
    options: [
      "The process of a solid turning into a gas",
      "The process of a gas turning into a liquid",
      "The process of a solid turning into a liquid",
      "The process of a liquid turning into a solid",
    ],
    correct_answer: "The process of a solid turning into a gas",
  },
  {
    index: 266,
    question: "What is deposition?",
    options: [
      "The process of a solid turning into a gas",
      "The process of a gas turning into a liquid",
      "The process of a solid turning into a liquid",
      "The process of a gas turning into a solid",
    ],
    correct_answer: "The process of a gas turning into a solid",
  },
  {
    index: 267,
    question: "At what temperature does water boil at sea level?",
    options: ["0°C", "100°C", "-273.15°C", "373.15°C"],
    correct_answer: "100°C",
  },
  {
    index: 268,
    question: "At what temperature does water freeze at sea level?",
    options: ["0°C", "100°C", "-273.15°C", "373.15°C"],
    correct_answer: "0°C",
  },
  {
    index: 269,
    question:
      "What is the name of the process by which a solid changes directly into a gas without passing through the liquid state?",
    options: ["Evaporation", "Condensation", "Sublimation", "Melting"],
    correct_answer: "Sublimation",
  },
  {
    index: 270,
    question:
      "What happens to the temperature of a substance during a phase change?",
    options: [
      "It remains constant",
      "It decreases",
      "It increases",
      "It fluctuates randomly",
    ],
    correct_answer: "It remains constant",
  },
  {
    index: 271,
    question:
      "What is the term for the amount of heat required to change the phase of a substance?",
    options: [
      "Specific heat capacity",
      "Latent heat",
      "Thermal conductivity",
      "Heat of fusion",
    ],
    correct_answer: "Latent heat",
  },
  {
    index: 272,
    question:
      "What is the term for the amount of heat required to change one kilogram of a substance from a solid to a liquid at its melting point?",
    options: [
      "Specific heat capacity",
      "Latent heat of fusion",
      "Thermal conductivity",
      "Heat of vaporization",
    ],
    correct_answer: "Latent heat of fusion",
  },
  {
    index: 273,
    question:
      "What is the term for the amount of heat required to change one kilogram of a substance from a liquid to a gas at its boiling point?",
    options: [
      "Specific heat capacity",
      "Latent heat of fusion",
      "Thermal conductivity",
      "Heat of vaporization",
    ],
    correct_answer: "Heat of vaporization",
  },
  {
    index: 274,
    question: "Which of the following substances undergoes sublimation?",
    options: ["Water", "Mercury", "Carbon dioxide", "Alcohol"],
    correct_answer: "Carbon dioxide",
  },
  {
    index: 275,
    question:
      "What is the phase change called when a gas changes directly into a solid without passing through the liquid state?",
    options: ["Evaporation", "Condensation", "Sublimation", "Deposition"],
    correct_answer: "Deposition",
  },
  {
    index: 276,
    question:
      "What is the name of the phase change when a gas changes into a liquid?",
    options: ["Evaporation", "Condensation", "Sublimation", "Deposition"],
    correct_answer: "Condensation",
  },
  {
    index: 277,
    question:
      "Which of the following is an example of a substance that undergoes sublimation under normal conditions?",
    options: ["Gold", "Ice", "Dry ice (solid carbon dioxide)", "Wax"],
    correct_answer: "Dry ice (solid carbon dioxide)",
  },
  {
    index: 278,
    question:
      "What is the term for the change from a gas to a solid without passing through the liquid state?",
    options: ["Melting", "Freezing", "Sublimation", "Condensation"],
    correct_answer: "Deposition",
  },
  {
    index: 279,
    question:
      "Which of the following is an example of a phase change that absorbs heat from the surroundings?",
    options: ["Condensation", "Melting", "Freezing", "Deposition"],
    correct_answer: "Melting",
  },
  {
    index: 280,
    question: "What is electric charge?",
    options: [
      "The force between two charged objects",
      "The flow of electrons",
      "The ability to do work",
      "The property of matter that causes it to experience a force when near other electrically charged matter",
    ],
    correct_answer:
      "The property of matter that causes it to experience a force when near other electrically charged matter",
  },
  {
    index: 281,
    question: "What are the two types of electric charge?",
    options: [
      "Positive and negative",
      "Neutral and charged",
      "Protonic and electronic",
      "Conductor and insulator",
    ],
    correct_answer: "Positive and negative",
  },
  {
    index: 282,
    question: "What is the SI unit of electric charge?",
    options: ["Joule", "Volt", "Ampere", "Coulomb"],
    correct_answer: "Coulomb",
  },
  {
    index: 283,
    question: "What is the charge of a proton?",
    options: ["Positive", "Negative", "Neutral", "Variable"],
    correct_answer: "Positive",
  },
  {
    index: 284,
    question: "What is the charge of an electron?",
    options: ["Positive", "Negative", "Neutral", "Variable"],
    correct_answer: "Negative",
  },
  {
    index: 285,
    question: "What is an insulator?",
    options: [
      "A material that allows electric charges to flow freely",
      "A material that prevents electric charges from flowing freely",
      "A material that has no electric charge",
      "A material with variable charge",
    ],
    correct_answer:
      "A material that prevents electric charges from flowing freely",
  },
  {
    index: 286,
    question: "What is a conductor?",
    options: [
      "A material that allows electric charges to flow freely",
      "A material that prevents electric charges from flowing freely",
      "A material that has no electric charge",
      "A material with variable charge",
    ],
    correct_answer: "A material that allows electric charges to flow freely",
  },
  {
    index: 287,
    question:
      "What is the force between two point charges directly proportional to?",
    options: [
      "The product of their magnitudes",
      "The square of the distance between them",
      "The inverse square of the distance between them",
      "Their individual charges",
    ],
    correct_answer: "The product of their magnitudes",
  },
  {
    index: 288,
    question: "What is an electric field?",
    options: [
      "The region around a charged object where another charged object experiences a force",
      "The region around a charged object where the electric potential is zero",
      "The region around a charged object where no electric field lines exist",
      "The region around a charged object where the electric potential is maximum",
    ],
    correct_answer:
      "The region around a charged object where another charged object experiences a force",
  },
  {
    index: 289,
    question:
      "What is the direction of the electric field vector at a point due to a positive point charge?",
    options: [
      "Towards the point charge",
      "Away from the point charge",
      "Perpendicular to the point charge",
      "Radially outwards",
    ],
    correct_answer: "Away from the point charge",
  },
  {
    index: 290,
    question:
      "What is the direction of the electric field vector at a point due to a negative point charge?",
    options: [
      "Towards the point charge",
      "Away from the point charge",
      "Perpendicular to the point charge",
      "Radially outwards",
    ],
    correct_answer: "Towards the point charge",
  },
  {
    index: 291,
    question: "Which of the following is a property of electric field lines?",
    options: [
      "They do not cross each other",
      "They converge towards a positive charge",
      "They diverge away from a positive charge",
      "All of the above",
    ],
    correct_answer: "All of the above",
  },
  {
    index: 292,
    question:
      "What is the electric field inside a conductor at electrostatic equilibrium?",
    options: ["Zero", "Maximum", "Minimum", "Variable"],
    correct_answer: "Zero",
  },
  {
    index: 293,
    question:
      "What happens to the electric field strength between two point charges as the distance between them increases?",
    options: ["Increases", "Decreases", "Remains constant", "Becomes zero"],
    correct_answer: "Decreases",
  },
  {
    index: 294,
    question:
      "What is the magnitude of the electric field at a point due to a point charge q?",
    options: ["E = kq", "E = k / q", "E = q / k", "E = kq / r^2"],
    correct_answer: "E = kq / r^2",
  },
  {
    index: 295,
    question:
      "What is the electric field strength at a distance of 1 meter from a point charge of 1 coulomb?",
    options: ["8.9875 x 10^9 N/C", "1 N/C", "9 x 10^9 N/C", "9.81 N/C"],
    correct_answer: "8.9875 x 10^9 N/C",
  },
  {
    index: 296,
    question:
      "What is the formula for the force experienced by a charge q in an electric field E?",
    options: ["F = q / E", "F = E / q", "F = qE", "F = E^2"],
    correct_answer: "F = qE",
  },
  {
    index: 297,
    question:
      "What happens to the electric field strength between two point charges as the magnitude of the charges increases?",
    options: ["Increases", "Decreases", "Remains constant", "Becomes zero"],
    correct_answer: "Increases",
  },
  {
    index: 298,
    question:
      "What is the direction of the force experienced by a positive charge placed in an electric field?",
    options: [
      "In the direction of the electric field",
      "Opposite to the direction of the electric field",
      "Perpendicular to the direction of the electric field",
      "Parallel to the direction of the electric field",
    ],
    correct_answer: "In the direction of the electric field",
  },
  {
    index: 299,
    question:
      "What is the direction of the force experienced by a negative charge placed in an electric field?",
    options: [
      "In the direction of the electric field",
      "Opposite to the direction of the electric field",
      "Perpendicular to the direction of the electric field",
      "Parallel to the direction of the electric field",
    ],
    correct_answer: "Opposite to the direction of the electric field",
  },
  {
    index: 300,
    question:
      "Calculate the velocity of an object moving with a constant speed of 20 meters per second for 10 seconds.",
    options: ["200 m/s", "400 m/s", "260 m/s", "1200 m/s"],
    correct_answer: "200 m/s",
  },
  {
    index: 301,
    question:
      "Find the distance traveled by a car moving at a speed of 60 kilometers per hour for 2.5 hours.",
    options: ["250 km", "1250 km", "150 km", "1500 km"],
    correct_answer: "150 km",
  },
  {
    index: 302,
    question:
      "Determine the acceleration of a car that increases its velocity from 10 meters per second to 30 meters per second in 5 seconds.",
    options: ["9 m/s^2", "4 m/s^2", "5 m/s^2", "3 m/s^2"],
    correct_answer: "4 m/s^2",
  },
  {
    index: 303,
    question:
      "Calculate the force exerted by a mass of 50 kilograms when subjected to an acceleration of 5 meters per second squared.",
    options: ["350 N", "550 N", "450 N", "250 N"],
    correct_answer: "250 N",
  },
  {
    index: 304,
    question:
      "Find the momentum of an object with a mass of 2 kilograms moving at a velocity of 10 meters per second.",
    options: ["200 kg*m/s", "100 kg*m/s", "20 kg*m/s", "120 kg*m/s"],
    correct_answer: "20 kg*m/s",
  },
  {
    index: 305,
    question: "Define electric potential.",
    options: [
      "The electric charge of an object",
      "The amount of electric current flowing through a circuit",
      "The electric potential energy per unit charge at a point in an electric field",
      "The force experienced by a charge in an electric field",
    ],
    correct_answer:
      "The electric potential energy per unit charge at a point in an electric field",
  },
  {
    index: 306,
    question: "What is the SI unit of electric potential?",
    options: ["Volt", "Ampere", "Ohm", "Coulomb"],
    correct_answer: "Volt",
  },
  {
    index: 307,
    question:
      "Calculate the electric potential energy of a charge of 2 coulombs placed in an electric field of 5 volts.",
    options: ["10 Joules", "100 Joules", "20 Joules", "50 Joules"],
    correct_answer: "10 Joules",
  },
  {
    index: 308,
    question: "What does the term 'voltage' represent?",
    options: [
      "The electric charge of an object",
      "The amount of electric current flowing through a circuit",
      "The electric potential energy per unit charge at a point in an electric field",
      "The force experienced by a charge in an electric field",
    ],
    correct_answer:
      "The electric potential energy per unit charge at a point in an electric field",
  },
  {
    index: 309,
    question:
      "What is the voltage across a resistor with a resistance of 10 ohms when a current of 2 amperes flows through it?",
    options: ["10 Volts", "5 Volts", "20 Volts", "15 Volts"],
    correct_answer: "20 Volts",
  },
  {
    index: 310,
    question:
      "What is the relationship between electric potential difference and work done on a charge?",
    options: [
      "They are directly proportional",
      "They are inversely proportional",
      "There is no relationship between them",
      "Work done is unrelated to electric potential difference",
    ],
    correct_answer: "They are directly proportional",
  },
  {
    index: 311,
    question:
      "Calculate the electric potential difference across a capacitor with a charge of 50 microcoulombs and a capacitance of 0.002 farads.",
    options: ["125,000 Volts", "15,000 Volts", "25,000 Volts", "250,000 Volts"],
    correct_answer: "25,000 Volts",
  },
  {
    index: 312,
    question:
      "What happens to the electric potential as you move closer to a positive point charge?",
    options: [
      "It increases",
      "It decreases",
      "It remains constant",
      "It becomes zero",
    ],
    correct_answer: "It increases",
  },
  {
    index: 313,
    question:
      "What is the electric potential at a point located 2 meters from a point charge of +5 microcoulombs, if the electric potential at a point 1 meter away from the charge is 10 volts?",
    options: ["15 Volts", "5 Volts", "25 Volts", "35 Volts"],
    correct_answer: "5 Volts",
  },
  {
    index: 314,
    question: "Define equipotential surface.",
    options: [
      "A surface where the electric potential is the same at all points",
      "A surface where the electric field is zero",
      "A surface with varying electric potential",
      "A surface with no electric charges",
    ],
    correct_answer:
      "A surface where the electric potential is the same at all points",
  },
  {
    index: 315,
    question: "How is electric potential related to electric field?",
    options: [
      "They are directly proportional",
      "They are inversely proportional",
      "There is no relationship between them",
      "Electric potential is the same as electric field",
    ],
    correct_answer: "They are inversely proportional",
  },
  {
    index: 316,
    question:
      "What is the electric potential energy of a charge of 4 microcoulombs placed in an electric field of 50 volts?",
    options: [
      "2000 microjoules",
      "2100 microjoules",
      "100 microjoules",
      "200 microjoules",
    ],
    correct_answer: "200 microjoules",
  },
  {
    index: 317,
    question:
      "Calculate the voltage across a circuit element with a resistance of 20 ohms when a current of 4 amperes flows through it.",
    options: ["800 Volts", "80 Volts", "8000 Volts", "80000 Volts"],
    correct_answer: "80 Volts",
  },
  {
    index: 318,
    question:
      "What is the electric potential at a point located 3 meters from a point charge of -10 microcoulombs, if the electric potential at a point 1 meter away from the charge is -20 volts?",
    options: ["-60 Volts", "60 Volts", "120 Volts", "-120 Volts"],
    correct_answer: "-60 Volts",
  },
  {
    index: 319,
    question:
      "What is the work done on a charge of 3 coulombs moving from a point with an electric potential of 100 volts to a point with an electric potential of 50 volts?",
    options: ["-1500 Joules", "150 Joules", "-2150 Joules", "-150 Joules"],
    correct_answer: "-150 Joules",
  },
  {
    index: 320,
    question: "Define electric potential difference.",
    options: [
      "The difference in electric charge between two points",
      "The difference in electric potential energy between two points",
      "The difference in electric potential energy per unit charge between two points",
      "The difference in electric field strength between two points",
    ],
    correct_answer:
      "The difference in electric potential energy per unit charge between two points",
  },
  {
    index: 321,
    question:
      "Calculate the electric potential energy of a charge of 6 microcoulombs placed in an electric field of 30 volts.",
    options: [
      "280 microjoules",
      "80 microjoules",
      "1180 microjoules",
      "180 microjoules",
    ],
    correct_answer: "180 microjoules",
  },
  {
    index: 322,
    question:
      "What is the voltage drop across a resistor with a resistance of 15 ohms when a current of 3 amperes flows through it?",
    options: ["45 Volts", "56 Volts", "48 Volts", "145 Volts"],
    correct_answer: "45 Volts",
  },
  {
    index: 323,
    question: "How is electric potential energy related to electric potential?",
    options: [
      "They are directly proportional",
      "They are inversely proportional",
      "There is no relationship between them",
      "Electric potential energy is the same as electric potential",
    ],
    correct_answer: "They are inversely proportional",
  },
  {
    index: 324,
    question:
      "What is the electric potential at a point located 2 meters from a point charge of +8 microcoulombs, if the electric potential at a point 1 meter away from the charge is 20 volts?",
    options: ["10 Volts", "20 Volts", "30 Volts", "40 Volts"],
    correct_answer: "10 Volts",
  },
  {
    index: 325,
    question: "What is the SI unit of electric current?",
    options: ["Volt", "Ampere", "Ohm", "Coulomb"],
    correct_answer: "Ampere",
  },
  {
    index: 326,
    question: "Define electric current.",
    options: [
      "The amount of electric charge flowing through a circuit per unit time",
      "The difference in electric potential energy between two points in a circuit",
      "The resistance to the flow of electric charge in a circuit",
      "The force experienced by a charge in an electric field",
    ],
    correct_answer:
      "The amount of electric charge flowing through a circuit per unit time",
  },
  {
    index: 327,
    question:
      "Calculate the current flowing through a wire if 5 coulombs of charge pass through it in 2 seconds.",
    options: ["2.5 Amperes", "2 Amperes", "5 Amperes", "5.5 Amperes"],
    correct_answer: "2.5 Amperes",
  },
  {
    index: 328,
    question:
      "What is the relationship between electric current, voltage, and resistance in a circuit?",
    options: ["Ohm's Law", "Kirchhoff's Law", "Newton's Law", "Coulomb's Law"],
    correct_answer: "Ohm's Law",
  },
  {
    index: 329,
    question: "What does a resistor do in an electric circuit?",
    options: [
      "Increases current",
      "Decreases current",
      "Keeps current constant",
      "Has no effect on current",
    ],
    correct_answer: "Decreases current",
  },
  {
    index: 330,
    question: "Define resistance.",
    options: [
      "The amount of electric charge flowing through a circuit per unit time",
      "The difference in electric potential energy between two points in a circuit",
      "The resistance to the flow of electric charge in a circuit",
      "The force experienced by a charge in an electric field",
    ],
    correct_answer:
      "The resistance to the flow of electric charge in a circuit",
  },
  {
    index: 331,
    question:
      "Calculate the resistance of a resistor if a current of 2 amperes flows through it when a voltage of 10 volts is applied.",
    options: ["30 Ohms", "10 Ohms", "1 Ohms", "5 Ohms"],
    correct_answer: "5 Ohms",
  },
  {
    index: 332,
    question:
      "What is the equivalent resistance of resistors connected in series?",
    options: [
      "The sum of the individual resistances",
      "The reciprocal of the sum of the reciprocals of the individual resistances",
      "The product of the individual resistances",
      "The difference of the individual resistances",
    ],
    correct_answer: "The sum of the individual resistances",
  },
  {
    index: 333,
    question:
      "Calculate the total resistance of three resistors with values 5 ohms, 10 ohms, and 15 ohms connected in series.",
    options: ["300 Ohms", "30 Ohms", "120 Ohms", "200 Ohms"],
    correct_answer: "30 Ohms",
  },
  {
    index: 334,
    question:
      "What is the equivalent resistance of resistors connected in parallel?",
    options: [
      "The sum of the individual resistances",
      "The reciprocal of the sum of the reciprocals of the individual resistances",
      "The product of the individual resistances",
      "The difference of the individual resistances",
    ],
    correct_answer:
      "The reciprocal of the sum of the reciprocals of the individual resistances",
  },
  {
    index: 335,
    question:
      "Calculate the total resistance of three resistors with values 5 ohms, 10 ohms, and 15 ohms connected in parallel.",
    options: ["1.875 Ohms", "1.75 Ohms", "1.5 Ohms", "1 Ohms"],
    correct_answer: "1.875 Ohms",
  },
  {
    index: 336,
    question: "What is a short circuit?",
    options: [
      "A circuit with very high resistance",
      "A circuit with very low resistance",
      "A circuit with no resistance",
      "A circuit with no current",
    ],
    correct_answer: "A circuit with very low resistance",
  },
  {
    index: 337,
    question: "What is the purpose of a fuse in an electric circuit?",
    options: [
      "To increase current",
      "To decrease current",
      "To keep current constant",
      "To protect against overcurrent",
    ],
    correct_answer: "To protect against overcurrent",
  },
  {
    index: 338,
    question: "Define electric power.",
    options: [
      "The rate at which electric charge flows through a circuit",
      "The difference in electric potential energy between two points in a circuit",
      "The resistance to the flow of electric charge in a circuit",
      "The rate at which work is done or energy is transferred in an electric circuit",
    ],
    correct_answer:
      "The rate at which work is done or energy is transferred in an electric circuit",
  },
  {
    index: 339,
    question:
      "Calculate the power dissipated by a resistor with a resistance of 8 ohms when a current of 4 amperes flows through it.",
    options: ["28 Watts", "18 Watts", "128 Watts", "1028 Watts"],
    correct_answer: "128 Watts",
  },
  {
    index: 340,
    question:
      "What is the power rating of a device that operates at 120 volts and draws a current of 2.5 amperes?",
    options: ["300 Watts", "400 Watts", "500 Watts", "3000 Watts"],
    correct_answer: "300 Watts",
  },
  {
    index: 341,
    question:
      "What is the relationship between power, voltage, and current in a circuit?",
    options: ["P = VI", "P = V/I", "P = I/V", "P = V + I"],
    correct_answer: "P = VI",
  },
  {
    index: 342,
    question: "Define electric circuit.",
    options: [
      "A closed loop through which electric current can flow",
      "A device that measures electric current",
      "A device that generates electric charge",
      "A device that stores electric potential energy",
    ],
    correct_answer: "A closed loop through which electric current can flow",
  },
  {
    index: 343,
    question: "What is the purpose of a switch in an electric circuit?",
    options: [
      "To increase resistance",
      "To decrease resistance",
      "To control the flow of electric current",
      "To measure electric current",
    ],
    correct_answer: "To control the flow of electric current",
  },
  {
    index: 344,
    question:
      "What is the difference between alternating current (AC) and direct current (DC)?",
    options: [
      "AC changes direction periodically, whereas DC flows in one direction only",
      "AC flows in one direction only, whereas DC changes direction periodically",
      "AC has higher voltage than DC",
      "AC has higher current than DC",
    ],
    correct_answer:
      "AC changes direction periodically, whereas DC flows in one direction only",
  },
  {
    index: 345,
    question: "What is magnetism?",
    options: [
      "The force between two electric charges",
      "The force between two magnets",
      "The force between an electric charge and a magnet",
      "The property of certain materials to attract iron, nickel, and cobalt",
    ],
    correct_answer:
      "The property of certain materials to attract iron, nickel, and cobalt",
  },
  {
    index: 346,
    question: "What is a magnetic field?",
    options: [
      "A region around a magnet where magnetic forces are exerted",
      "A region where electric charges are stored",
      "A region where electric current flows",
      "A region where gravity is strongest",
    ],
    correct_answer:
      "A region around a magnet where magnetic forces are exerted",
  },
  {
    index: 347,
    question: "What are magnetic field lines?",
    options: [
      "Lines drawn on a map indicating magnetic north and south poles",
      "Lines representing the direction of magnetic force",
      "Lines representing the path of electric current",
      "Lines indicating the strength of a magnet",
    ],
    correct_answer: "Lines representing the direction of magnetic force",
  },
  {
    index: 348,
    question: "What is the SI unit of magnetic field?",
    options: ["Tesla", "Ohm", "Watt", "Ampere"],
    correct_answer: "Tesla",
  },
  {
    index: 349,
    question: "Define magnetic flux.",
    options: [
      "The total number of magnetic field lines passing through a surface",
      "The total magnetic field strength of an object",
      "The resistance of a material to magnetic fields",
      "The force experienced by a magnet in a magnetic field",
    ],
    correct_answer:
      "The total number of magnetic field lines passing through a surface",
  },
  {
    index: 350,
    question:
      "What is the relationship between magnetic field strength and distance from a magnet?",
    options: [
      "Inverse square law",
      "Direct proportionality",
      "Exponential decay",
      "No relationship",
    ],
    correct_answer: "Inverse square law",
  },
  {
    index: 351,
    question:
      "Calculate the magnetic field strength at a distance of 10 cm from a magnet with a magnetic flux of 20 T.",
    options: ["2 T", "3 T", "4 T", "5 T"],
    correct_answer: "2 T",
  },
  {
    index: 352,
    question:
      "What is the difference between a permanent magnet and a temporary magnet?",
    options: [
      "Permanent magnets have stronger magnetic fields",
      "Temporary magnets can be turned on and off",
      "Permanent magnets lose their magnetism over time",
      "Temporary magnets cannot attract other magnets",
    ],
    correct_answer: "Temporary magnets can be turned on and off",
  },
  {
    index: 353,
    question: "Define magnetic declination.",
    options: [
      "The angle between geographic north and magnetic north",
      "The angle between geographic north and the equator",
      "The angle between magnetic north and the equator",
      "The angle between magnetic north and the South Pole",
    ],
    correct_answer: "The angle between geographic north and magnetic north",
  },
  {
    index: 354,
    question: "What is the Earth's magnetic field caused by?",
    options: [
      "The rotation of the Earth",
      "The presence of magnetic rocks in the Earth's crust",
      "The movement of molten iron in the Earth's outer core",
      "The gravitational pull of the Moon",
    ],
    correct_answer: "The movement of molten iron in the Earth's outer core",
  },
  {
    index: 355,
    question: "What is a magnetic domain?",
    options: [
      "A region of a magnet where the magnetic field is strongest",
      "A region within a material where the magnetic fields of atoms are aligned",
      "A region of a magnet where magnetic flux is concentrated",
      "A region where there is no magnetic field",
    ],
    correct_answer:
      "A region within a material where the magnetic fields of atoms are aligned",
  },
  {
    index: 356,
    question: "What is magnetic permeability?",
    options: [
      "The ability of a material to become a magnet",
      "The resistance of a material to magnetic fields",
      "The ability of a material to conduct electricity",
      "The ability of a material to concentrate magnetic flux",
    ],
    correct_answer: "The ability of a material to become a magnet",
  },
  {
    index: 357,
    question: "What is magnetic hysteresis?",
    options: [
      "The tendency of a magnet to align with the Earth's magnetic field",
      "The tendency of a material to retain some magnetization after the external magnetic field is removed",
      "The resistance of a material to changes in its magnetization",
      "The tendency of a magnetic field to induce an electric current in a conductor",
    ],
    correct_answer:
      "The tendency of a material to retain some magnetization after the external magnetic field is removed",
  },
  {
    index: 358,
    question: "Define magnetic induction.",
    options: [
      "The process of creating a magnetic field by moving electric charges",
      "The process of aligning magnetic domains in a material",
      "The process of generating an electric current by moving a conductor in a magnetic field",
      "The process of inducing magnetization in a material by an external magnetic field",
    ],
    correct_answer:
      "The process of inducing magnetization in a material by an external magnetic field",
  },
  {
    index: 359,
    question:
      "What is the magnetic force experienced by a charge moving in a magnetic field?",
    options: [
      "Centripetal force",
      "Gravitational force",
      "Electrostatic force",
      "Lorentz force",
    ],
    correct_answer: "Lorentz force",
  },
  {
    index: 360,
    question:
      "Calculate the force experienced by a charge of 2 coulombs moving with a velocity of 5 m/s in a magnetic field of 0.2 Tesla.",
    options: ["6 N", "2 N", "16 N", "26 N"],
    correct_answer: "2 N",
  },
  {
    index: 361,
    question: "What is the right-hand rule in magnetism used for?",
    options: [
      "To determine the direction of magnetic field lines around a current-carrying wire",
      "To determine the direction of electric current in a circuit",
      "To determine the direction of magnetic north",
      "To determine the direction of gravitational force",
    ],
    correct_answer:
      "To determine the direction of magnetic field lines around a current-carrying wire",
  },
  {
    index: 362,
    question: "Define magnetic moment.",
    options: [
      "The total magnetic field strength of an object",
      "The total magnetic field strength of a material",
      "A measure of the strength and orientation of a magnet",
      "A measure of the resistance of a material to magnetic fields",
    ],
    correct_answer: "A measure of the strength and orientation of a magnet",
  },
  {
    index: 363,
    question:
      "What is the magnetic force experienced by a conductor carrying a current in a magnetic field?",
    options: [
      "Centripetal force",
      "Gravitational force",
      "Electrostatic force",
      "Lorentz force",
    ],
    correct_answer: "Lorentz force",
  },
  {
    index: 364,
    question:
      "Calculate the force experienced by a current-carrying wire of length 3 meters carrying a current of 4 amperes in a magnetic field of 0.5 Tesla.",
    options: ["1 N", "6 N", "5 N", "2 N"],
    correct_answer: "6 N",
  },
  {
    index: 365,
    question: "What is the SI unit of electric current?",
    options: ["Volt", "Ampere", "Ohm", "Coulomb"],
    correct_answer: "Ampere",
  },
  {
    index: 366,
    question: "Define electric resistance.",
    options: [
      "The flow of electric charge through a conductor",
      "The force experienced by a charge in an electric field",
      "The ability of a material to resist the flow of electric current",
      "The difference in electric potential energy between two points in a circuit",
    ],
    correct_answer:
      "The ability of a material to resist the flow of electric current",
  },
  {
    index: 367,
    question: "What is Ohm's Law?",
    options: ["V = IR", "P = VI", "I = V/R", "R = V/I"],
    correct_answer: "V = IR",
  },
  {
    index: 368,
    question:
      "Calculate the current flowing through a resistor with a voltage of 12 volts and a resistance of 4 ohms.",
    options: ["3 Amperes", "113 Amperes", "13 Amperes", "32 Amperes"],
    correct_answer: "3 Amperes",
  },
  {
    index: 369,
    question:
      "What happens to the resistance of a conductor as its temperature increases?",
    options: ["Decreases", "Increases", "Remains constant", "Becomes zero"],
    correct_answer: "Increases",
  },
  {
    index: 370,
    question: "Define electric power.",
    options: [
      "The rate at which electric charge flows through a circuit",
      "The difference in electric potential energy between two points in a circuit",
      "The resistance to the flow of electric charge in a circuit",
      "The rate at which work is done or energy is transferred in an electric circuit",
    ],
    correct_answer:
      "The rate at which work is done or energy is transferred in an electric circuit",
  },
  {
    index: 371,
    question:
      "Calculate the power dissipated by a resistor with a resistance of 10 ohms when a current of 2 amperes flows through it.",
    options: ["10 Watts", "40 Watts", "30 Watts", "20 Watts"],
    correct_answer: "40 Watts",
  },
  {
    index: 372,
    question:
      "What is the equivalent resistance of resistors connected in series?",
    options: [
      "The sum of the individual resistances",
      "The reciprocal of the sum of the reciprocals of the individual resistances",
      "The product of the individual resistances",
      "The difference of the individual resistances",
    ],
    correct_answer: "The sum of the individual resistances",
  },
  {
    index: 373,
    question:
      "Calculate the total resistance of three resistors with values 5 ohms, 10 ohms, and 15 ohms connected in series.",
    options: ["300 Ohms", "30 Ohms", "50 Ohms", "20 Ohms"],
    correct_answer: "30 Ohms",
  },
  {
    index: 374,
    question:
      "What is the equivalent resistance of resistors connected in parallel?",
    options: [
      "The sum of the individual resistances",
      "The reciprocal of the sum of the reciprocals of the individual resistances",
      "The product of the individual resistances",
      "The difference of the individual resistances",
    ],
    correct_answer:
      "The reciprocal of the sum of the reciprocals of the individual resistances",
  },
  {
    index: 375,
    question:
      "Calculate the total resistance of three resistors with values 5 ohms, 10 ohms, and 15 ohms connected in parallel.",
    options: ["1.875 Ohms", "2.875 Ohms", "3.875 Ohms", "4.875 Ohms"],
    correct_answer: "1.875 Ohms",
  },
  {
    index: 376,
    question: "What is the purpose of a fuse in an electric circuit?",
    options: [
      "To increase current",
      "To decrease current",
      "To keep current constant",
      "To protect against overcurrent",
    ],
    correct_answer: "To protect against overcurrent",
  },
  {
    index: 377,
    question:
      "What is the difference between alternating current (AC) and direct current (DC)?",
    options: [
      "AC changes direction periodically, whereas DC flows in one direction only",
      "AC flows in one direction only, whereas DC changes direction periodically",
      "AC has higher voltage than DC",
      "AC has higher current than DC",
    ],
    correct_answer:
      "AC changes direction periodically, whereas DC flows in one direction only",
  },
  {
    index: 378,
    question: "Define electric circuit.",
    options: [
      "A closed loop through which electric current can flow",
      "A device that measures electric current",
      "A device that generates electric charge",
      "A device that stores electric potential energy",
    ],
    correct_answer: "A closed loop through which electric current can flow",
  },
  {
    index: 379,
    question: "What is the purpose of a switch in an electric circuit?",
    options: [
      "To increase resistance",
      "To decrease resistance",
      "To control the flow of electric current",
      "To measure electric current",
    ],
    correct_answer: "To control the flow of electric current",
  },
  {
    index: 380,
    question: "What is magnetic induction?",
    options: [
      "The process of creating a magnetic field by moving electric charges",
      "The process of aligning magnetic domains in a material",
      "The process of generating an electric current by moving a conductor in a magnetic field",
      "The process of inducing magnetization in a material by an external magnetic field",
    ],
    correct_answer:
      "The process of inducing magnetization in a material by an external magnetic field",
  },
  {
    index: 381,
    question: "Define magnetic moment.",
    options: [
      "The total magnetic field strength of an object",
      "The total magnetic field strength of a material",
      "A measure of the strength and orientation of a magnet",
      "A measure of the resistance of a material to magnetic fields",
    ],
    correct_answer: "A measure of the strength and orientation of a magnet",
  },
  {
    index: 382,
    question:
      "What is the magnetic force experienced by a conductor carrying a current in a magnetic field?",
    options: [
      "Centripetal force",
      "Gravitational force",
      "Electrostatic force",
      "Lorentz force",
    ],
    correct_answer: "Lorentz force",
  },
  {
    index: 383,
    question:
      "Calculate the force experienced by a current-carrying wire of length 3 meters carrying a current of 4 amperes in a magnetic field of 0.5 Tesla.",
    options: ["2 N", "6 N", "4 N", "8 N"],
    correct_answer: "6 N",
  },
  {
    index: 384,
    question: "What is the right-hand rule in magnetism used for?",
    options: [
      "To determine the direction of magnetic field lines around a current-carrying wire",
      "To determine the direction of electric current in a circuit",
      "To determine the direction of magnetic north",
      "To determine the direction of gravitational force",
    ],
    correct_answer:
      "To determine the direction of magnetic field lines around a current-carrying wire",
  },
  {
    index: 385,
    question: "What is magnetic permeability?",
    options: [
      "The ability of a material to become a magnet",
      "The resistance of a material to magnetic fields",
      "The ability of a material to conduct electricity",
      "The ability of a material to concentrate magnetic flux",
    ],
    correct_answer: "The ability of a material to become a magnet",
  },
  {
    index: 386,
    question: "What is magnetic hysteresis?",
    options: [
      "The tendency of a magnet to align with the Earth's magnetic field",
      "The tendency of a material to retain some magnetization after the external magnetic field is removed",
      "The resistance of a material to changes in its magnetization",
      "The tendency of a magnetic field to induce an electric current in a conductor",
    ],
    correct_answer:
      "The tendency of a material to retain some magnetization after the external magnetic field is removed",
  },
  {
    index: 387,
    question: "Define magnetic induction.",
    options: [
      "The process of creating a magnetic field by moving electric charges",
      "The process of aligning magnetic domains in a material",
      "The process of generating an electric current by moving a conductor in a magnetic field",
      "The process of inducing magnetization in a material by an external magnetic field",
    ],
    correct_answer:
      "The process of inducing magnetization in a material by an external magnetic field",
  },
  {
    index: 388,
    question:
      "What is the magnetic force experienced by a charge moving in a magnetic field?",
    options: [
      "Centripetal force",
      "Gravitational force",
      "Electrostatic force",
      "Lorentz force",
    ],
    correct_answer: "Lorentz force",
  },
  {
    index: 389,
    question:
      "What is the difference between a permanent magnet and a temporary magnet?",
    options: [
      "Permanent magnets have stronger magnetic fields",
      "Temporary magnets can be turned on and off",
      "Permanent magnets lose their magnetism over time",
      "Temporary magnets cannot attract other magnets",
    ],
    correct_answer: "Temporary magnets can be turned on and off",
  },
  {
    index: 390,
    question: "Define magnetic declination.",
    options: [
      "The angle between geographic north and magnetic north",
      "The angle between geographic north and the equator",
      "The angle between magnetic north and the equator",
      "The angle between magnetic north and the South Pole",
    ],
    correct_answer: "The angle between geographic north and magnetic north",
  },
  {
    index: 391,
    question: "What is the Earth's magnetic field caused by?",
    options: [
      "The rotation of the Earth",
      "The presence of magnetic rocks in the Earth's crust",
      "The movement of molten iron in the Earth's outer core",
      "The gravitational pull of the Moon",
    ],
    correct_answer: "The movement of molten iron in the Earth's outer core",
  },
  {
    index: 392,
    question: "What are magnetic domain?",
    options: [
      "A region of a magnet where the magnetic field is strongest",
      "A region within a material where the magnetic fields of atoms are aligned",
      "A region of a magnet where magnetic flux is concentrated",
      "A region where there is no magnetic field",
    ],
    correct_answer:
      "A region within a material where the magnetic fields of atoms are aligned",
  },
  {
    index: 393,
    question: "What is magnetic permeability?",
    options: [
      "The ability of a material to become a magnet",
      "The resistance of a material to magnetic fields",
      "The ability of a material to conduct electricity",
      "The ability of a material to concentrate magnetic flux",
    ],
    correct_answer: "The ability of a material to become a magnet",
  },
  {
    index: 394,
    question: "What is magnetic hysteresis?",
    options: [
      "The tendency of a magnet to align with the Earth's magnetic field",
      "The tendency of a material to retain some magnetization after the external magnetic field is removed",
      "The resistance of a material to changes in its magnetization",
      "The tendency of a magnetic field to induce an electric current in a conductor",
    ],
    correct_answer:
      "The tendency of a material to retain some magnetization after the external magnetic field is removed",
  },
  {
    index: 395,
    question: "Define magnetic induction.",
    options: [
      "The process of creating a magnetic field by moving electric charges",
      "The process of aligning magnetic domains in a material",
      "The process of generating an electric current by moving a conductor in a magnetic field",
      "The process of inducing magnetization in a material by an external magnetic field",
    ],
    correct_answer:
      "The process of inducing magnetization in a material by an external magnetic field",
  },
  {
    index: 396,
    question:
      "What is the magnetic force experienced by a charge moving in a magnetic field?",
    options: [
      "Centripetal force",
      "Gravitational force",
      "Electrostatic force",
      "Lorentz force",
    ],
    correct_answer: "Lorentz force",
  },
  {
    index: 397,
    question:
      "What is the difference between a permanent magnet and a temporary magnet?",
    options: [
      "Permanent magnets have stronger magnetic fields",
      "Temporary magnets can be turned on and off",
      "Permanent magnets lose their magnetism over time",
      "Temporary magnets cannot attract other magnets",
    ],
    correct_answer: "Temporary magnets can be turned on and off",
  },
  {
    index: 398,
    question: "Define magnetic declination.",
    options: [
      "The angle between geographic north and magnetic north",
      "The angle between geographic north and the equator",
      "The angle between magnetic north and the equator",
      "The angle between magnetic north and the South Pole",
    ],
    correct_answer: "The angle between geographic north and magnetic north",
  },
  {
    index: 399,
    question: "What is the Earth's magnetic field caused by?",
    options: [
      "The rotation of the Earth",
      "The presence of magnetic rocks in the Earth's crust",
      "The movement of molten iron in the Earth's outer core",
      "The gravitational pull of the Moon",
    ],
    correct_answer: "The movement of molten iron in the Earth's outer core",
  },
  {
    index: 400,
    question: "What are magnetic domains?",
    options: [
      "A region of a magnet where the magnetic field is strongest",
      "A region within a material where the magnetic fields of atoms are aligned",
      "A region of a magnet where magnetic flux is concentrated",
      "A region where there is no magnetic field",
    ],
    correct_answer:
      "A region within a material where the magnetic fields of atoms are aligned",
  },
  {
    index: 401,
    question: "What is magnetic permeability?",
    options: [
      "The ability of a material to become a magnet",
      "The resistance of a material to magnetic fields",
      "The ability of a material to conduct electricity",
      "The ability of a material to concentrate magnetic flux",
    ],
    correct_answer: "The ability of a material to become a magnet",
  },
  {
    index: 402,
    question: "What is magnetic hysteresis?",
    options: [
      "The tendency of a magnet to align with the Earth's magnetic field",
      "The tendency of a material to retain some magnetization after the external magnetic field is removed",
      "The resistance of a material to changes in its magnetization",
      "The tendency of a magnetic field to induce an electric current in a conductor",
    ],
    correct_answer:
      "The tendency of a material to retain some magnetization after the external magnetic field is removed",
  },
  {
    index: 403,
    question: "Define magnetic induction.",
    options: [
      "The process of creating a magnetic field by moving electric charges",
      "The process of aligning magnetic domains in a material",
      "The process of generating an electric current by moving a conductor in a magnetic field",
      "The process of inducing magnetization in a material by an external magnetic field",
    ],
    correct_answer:
      "The process of inducing magnetization in a material by an external magnetic field",
  },
  {
    index: 404,
    question:
      "What is the magnetic force experienced by a charge moving in a magnetic field?",
    options: [
      "Centripetal force",
      "Gravitational force",
      "Electrostatic force",
      "Lorentz force",
    ],
    correct_answer: "Lorentz force",
  },
  {
    index: 405,
    question:
      "Calculate the force experienced by a charge of 2 coulombs moving with a velocity of 5 m/s in a magnetic field of 0.2 Tesla.",
    options: ["6 N", "4 N", "2 N", "1 N"],
    correct_answer: "2 N",
  },
  {
    index: 406,
    question:
      "What is the difference between a permanent magnet and a temporary magnet?",
    options: [
      "Permanent magnets have stronger magnetic fields",
      "Temporary magnets can be turned on and off",
      "Permanent magnets lose their magnetism over time",
      "Temporary magnets cannot attract other magnets",
    ],
    correct_answer: "Temporary magnets can be turned on and off",
  },
  {
    index: 407,
    question: "Define magnetic declination.",
    options: [
      "The angle between geographic north and magnetic north",
      "The angle between geographic north and the equator",
      "The angle between magnetic north and the equator",
      "The angle between magnetic north and the South Pole",
    ],
    correct_answer: "The angle between geographic north and magnetic north",
  },
  {
    index: 408,
    question: "What is the Earth's magnetic field caused by?",
    options: [
      "The rotation of the Earth",
      "The presence of magnetic rocks in the Earth's crust",
      "The movement of molten iron in the Earth's outer core",
      "The gravitational pull of the Moon",
    ],
    correct_answer: "The movement of molten iron in the Earth's outer core",
  },
  {
    index: 409,
    question: "What are magnetic domains?",
    options: [
      "A region of a magnet where the magnetic field is strongest",
      "A region within a material where the magnetic fields of atoms are aligned",
      "A region of a magnet where magnetic flux is concentrated",
      "A region where there is no magnetic field",
    ],
    correct_answer:
      "A region within a material where the magnetic fields of atoms are aligned",
  },
  {
    index: 410,
    question: "What is magnetic permeability?",
    options: [
      "The ability of a material to become a magnet",
      "The resistance of a material to magnetic fields",
      "The ability of a material to conduct electricity",
      "The ability of a material to concentrate magnetic flux",
    ],
    correct_answer: "The ability of a material to become a magnet",
  },
  {
    index: 411,
    question: "What is magnetic hysteresis?",
    options: [
      "The tendency of a magnet to align with the Earth's magnetic field",
      "The tendency of a material to retain some magnetization after the external magnetic field is removed",
      "The resistance of a material to changes in its magnetization",
      "The tendency of a magnetic field to induce an electric current in a conductor",
    ],
    correct_answer:
      "The tendency of a material to retain some magnetization after the external magnetic field is removed",
  },
  {
    index: 412,
    question: "Define magnetic induction.",
    options: [
      "The process of creating a magnetic field by moving electric charges",
      "The process of aligning magnetic domains in a material",
      "The process of generating an electric current by moving a conductor in a magnetic field",
      "The process of inducing magnetization in a material by an external magnetic field",
    ],
    correct_answer:
      "The process of inducing magnetization in a material by an external magnetic field",
  },
  {
    index: 413,
    question: "What is the speed of sound in air at room temperature?",
    options: ["343 m/s", "300,000,000 m/s", "1500 m/s", "0 m/s"],
    correct_answer: "343 m/s",
  },
  {
    index: 414,
    question: "Define frequency in the context of sound waves.",
    options: [
      "The distance between two consecutive wave crests",
      "The time it takes for one wave to pass a point",
      "The number of wave crests passing a point per unit time",
      "The amplitude of the sound wave",
    ],
    correct_answer: "The number of wave crests passing a point per unit time",
  },
  {
    index: 415,
    question:
      "What is the relationship between frequency and wavelength in sound waves?",
    options: [
      "They are inversely proportional",
      "They are directly proportional",
      "They are unrelated",
      "They are inversely related to the square root",
    ],
    correct_answer: "They are inversely proportional",
  },
  {
    index: 416,
    question: "What is the unit of measurement for sound intensity?",
    options: ["Decibel (dB)", "Hertz (Hz)", "Watt (W)", "Meter (m)"],
    correct_answer: "Decibel (dB)",
  },
  {
    index: 417,
    question: "What is the phenomenon of resonance in sound waves?",
    options: [
      "The tendency of a sound wave to reflect off a surface",
      "The increase in amplitude of a sound wave when its frequency matches the natural frequency of an object",
      "The bending of sound waves around obstacles",
      "The decrease in amplitude of a sound wave due to absorption",
    ],
    correct_answer:
      "The increase in amplitude of a sound wave when its frequency matches the natural frequency of an object",
  },
  {
    index: 418,
    question: "Define pitch in the context of sound waves.",
    options: [
      "The speed of sound in a medium",
      "The frequency of a sound wave",
      "The intensity of a sound wave",
      "The distance between two sound sources",
    ],
    correct_answer: "The frequency of a sound wave",
  },
  {
    index: 419,
    question: "What is the Doppler effect?",
    options: [
      "The bending of sound waves around obstacles",
      "The change in frequency of a wave in relation to an observer moving relative to the source of the wave",
      "The increase in amplitude of a sound wave when its frequency matches the natural frequency of an object",
      "The decrease in amplitude of a sound wave due to absorption",
    ],
    correct_answer:
      "The change in frequency of a wave in relation to an observer moving relative to the source of the wave",
  },
  {
    index: 420,
    question: "What is the speed of light in a vacuum?",
    options: ["343 m/s", "300,000,000 m/s", "1500 m/s", "0 m/s"],
    correct_answer: "300,000,000 m/s",
  },
  {
    index: 421,
    question: "Define refraction in the context of light waves.",
    options: [
      "The bending of light waves when passing from one medium to another",
      "The reflection of light waves off a surface",
      "The interference of light waves",
      "The absorption of light waves",
    ],
    correct_answer:
      "The bending of light waves when passing from one medium to another",
  },
  {
    index: 422,
    question: "What is the law of reflection?",
    options: [
      "The angle of reflection is equal to the angle of incidence",
      "The angle of reflection is double the angle of incidence",
      "The angle of reflection is half the angle of incidence",
      "The angle of reflection is perpendicular to the angle of incidence",
    ],
    correct_answer:
      "The angle of reflection is equal to the angle of incidence",
  },
  {
    index: 423,
    question: "What is total internal reflection?",
    options: [
      "When light waves pass from a medium of higher refractive index to a medium of lower refractive index",
      "When light waves pass from a medium of lower refractive index to a medium of higher refractive index",
      "When light waves reflect off a surface at an angle greater than the critical angle",
      "When light waves reflect off a surface at an angle less than the critical angle",
    ],
    correct_answer:
      "When light waves reflect off a surface at an angle greater than the critical angle",
  },
  {
    index: 424,
    question: "Define diffraction in the context of light waves.",
    options: [
      "The bending of light waves when passing from one medium to another",
      "The reflection of light waves off a surface",
      "The interference of light waves",
      "The spreading of light waves around obstacles",
    ],
    correct_answer: "The spreading of light waves around obstacles",
  },
  {
    index: 425,
    question:
      "What is the difference between constructive and destructive interference of light waves?",
    options: [
      "Constructive interference increases the amplitude, while destructive interference decreases the amplitude",
      "Constructive interference decreases the amplitude, while destructive interference increases the amplitude",
      "Constructive interference changes the wavelength, while destructive interference changes the frequency",
      "Constructive interference changes the frequency, while destructive interference changes the wavelength",
    ],
    correct_answer:
      "Constructive interference increases the amplitude, while destructive interference decreases the amplitude",
  },
  {
    index: 426,
    question: "Define convex lens.",
    options: [
      "A lens that converges light rays",
      "A lens that diverges light rays",
      "A lens with a flat surface",
      "A lens with a concave surface",
    ],
    correct_answer: "A lens that converges light rays",
  },
  {
    index: 427,
    question: "Define concave mirror.",
    options: [
      "A mirror that converges light rays",
      "A mirror that diverges light rays",
      "A mirror with a flat surface",
      "A mirror with a convex surface",
    ],
    correct_answer: "A mirror that converges light rays",
  },
  {
    index: 428,
    question: "What is virtual image?",
    options: [
      "An image formed by converging light rays",
      "An image formed by diverging light rays",
      "An image formed by reflection",
      "An image that cannot be projected onto a screen",
    ],
    correct_answer: "An image that cannot be projected onto a screen",
  },
  {
    index: 429,
    question: "What is wave-particle duality?",
    options: [
      "The ability of particles to exhibit wave-like behavior",
      "The ability of waves to exhibit particle-like behavior",
      "The interaction between waves and particles",
      "The observation that particles have both mass and energy",
    ],
    correct_answer: "The ability of particles to exhibit wave-like behavior",
  },
  {
    index: 430,
    question: "What is the photoelectric effect?",
    options: [
      "The emission of electrons from a material when light is shone on it",
      "The reflection of light off a surface",
      "The interference of light waves",
      "The absorption of light waves",
    ],
    correct_answer:
      "The emission of electrons from a material when light is shone on it",
  },
  {
    index: 431,
    question: "Define photon.",
    options: [
      "A particle of light",
      "A wave of light",
      "A particle of sound",
      "A wave of sound",
    ],
    correct_answer: "A particle of light",
  },
  {
    index: 432,
    question: "What is the electromagnetic spectrum?",
    options: [
      "The range of frequencies of electromagnetic radiation",
      "The range of wavelengths of electromagnetic radiation",
      "The range of energies of electromagnetic radiation",
      "The range of speeds of electromagnetic radiation",
    ],
    correct_answer: "The range of frequencies of electromagnetic radiation",
  },
  {
    index: 433,
    question: "What is ultraviolet radiation?",
    options: [
      "Electromagnetic radiation with wavelengths longer than visible light",
      "Electromagnetic radiation with wavelengths shorter than visible light",
      "Electromagnetic radiation with no wavelength",
      "Electromagnetic radiation with infinite wavelength",
    ],
    correct_answer:
      "Electromagnetic radiation with wavelengths shorter than visible light",
  },
  {
    index: 434,
    question: "Define infrared radiation.",
    options: [
      "Electromagnetic radiation with wavelengths longer than visible light",
      "Electromagnetic radiation with wavelengths shorter than visible light",
      "Electromagnetic radiation with no wavelength",
      "Electromagnetic radiation with infinite wavelength",
    ],
    correct_answer:
      "Electromagnetic radiation with wavelengths longer than visible light",
  },
  {
    index: 435,
    question:
      "What is the color of light with the longest wavelength in the visible spectrum?",
    options: ["Red", "Green", "Blue", "Violet"],
    correct_answer: "Red",
  },
  {
    index: 436,
    question:
      "What is the color of light with the shortest wavelength in the visible spectrum?",
    options: ["Red", "Green", "Blue", "Violet"],
    correct_answer: "Violet",
  },
  {
    index: 437,
    question: "What is the function of a convex lens?",
    options: [
      "To converge light rays",
      "To diverge light rays",
      "To block light rays",
      "To absorb light rays",
    ],
    correct_answer: "To converge light rays",
  },
  {
    index: 438,
    question: "What is the function of a concave lens?",
    options: [
      "To converge light rays",
      "To diverge light rays",
      "To block light rays",
      "To absorb light rays",
    ],
    correct_answer: "To diverge light rays",
  },
  {
    index: 439,
    question: "What is chromatic aberration?",
    options: [
      "A type of electromagnetic radiation",
      "A defect in lenses causing colors to be focused at different points",
      "A phenomenon of light wave interference",
      "A property of gravitational waves",
    ],
    correct_answer:
      "A defect in lenses causing colors to be focused at different points",
  },
  {
    index: 440,
    question: "Define diffraction grating.",
    options: [
      "A device used to produce polarized light",
      "A device used to measure the intensity of light",
      "A device used to disperse light into its component colors",
      "A device used to measure the speed of light",
    ],
    correct_answer: "A device used to disperse light into its component colors",
  },
  {
    index: 441,
    question: "What is polarization of light?",
    options: [
      "The alignment of light waves in a single plane",
      "The reflection of light off a surface",
      "The interference of light waves",
      "The absorption of light waves",
    ],
    correct_answer: "The alignment of light waves in a single plane",
  },
  {
    index: 442,
    question:
      "What is the difference between a transverse wave and a longitudinal wave?",
    options: [
      "Transverse waves oscillate perpendicular to the direction of wave propagation, while longitudinal waves oscillate parallel to the direction of wave propagation",
      "Transverse waves oscillate parallel to the direction of wave propagation, while longitudinal waves oscillate perpendicular to the direction of wave propagation",
      "Transverse waves have longer wavelengths than longitudinal waves",
      "Transverse waves have shorter wavelengths than longitudinal waves",
    ],
    correct_answer:
      "Transverse waves oscillate perpendicular to the direction of wave propagation, while longitudinal waves oscillate parallel to the direction of wave propagation",
  },
  {
    index: 443,
    question: "What is the principle of superposition in wave mechanics?",
    options: [
      "The interference of waves",
      "The bending of waves around obstacles",
      "The spreading of waves through a medium",
      "The combination of waves to form a resultant wave",
    ],
    correct_answer: "The combination of waves to form a resultant wave",
  },
  {
    index: 444,
    question: "Define coherence in the context of waves.",
    options: [
      "The property of waves having constant phase difference",
      "The property of waves having constant amplitude",
      "The property of waves having constant frequency",
      "The property of waves having constant speed",
    ],
    correct_answer: "The property of waves having constant phase difference",
  },
  {
    index: 445,
    question: "What is the principle of conservation of energy?",
    options: [
      "Energy cannot be created or destroyed, only transformed from one form to another",
      "Energy can be created or destroyed at will",
      "Energy is always increasing",
      "Energy is always decreasing",
    ],
    correct_answer:
      "Energy cannot be created or destroyed, only transformed from one form to another",
  },
  {
    index: 446,
    question: "What is the energy carried by electromagnetic waves called?",
    options: [
      "Mechanical energy",
      "Thermal energy",
      "Kinetic energy",
      "Radiant energy",
    ],
    correct_answer: "Radiant energy",
  },
  {
    index: 447,
    question: "What is the color of light with a wavelength of 700 nm?",
    options: ["Red", "Green", "Blue", "Violet"],
    correct_answer: "Red",
  },
  {
    index: 448,
    question: "What is the color of light with a wavelength of 500 nm?",
    options: ["Red", "Green", "Blue", "Violet"],
    correct_answer: "Green",
  },
  {
    index: 449,
    question: "Define diffraction limit in optics.",
    options: [
      "The limit to the resolution of an optical instrument due to the wave nature of light",
      "The maximum wavelength of light that can be diffracted",
      "The minimum wavelength of light that can be diffracted",
      "The limit to the brightness of an optical instrument",
    ],
    correct_answer:
      "The limit to the resolution of an optical instrument due to the wave nature of light",
  },
  {
    index: 450,
    question: "What is the phenomenon of dispersion in optics?",
    options: [
      "The spreading of light waves around obstacles",
      "The separation of light into its component colors",
      "The bending of light waves when passing from one medium to another",
      "The reflection of light off a surface",
    ],
    correct_answer: "The separation of light into its component colors",
  },
  {
    index: 451,
    question: "Define coherence length in optics.",
    options: [
      "The maximum distance over which waves maintain a constant phase relationship",
      "The minimum distance over which waves maintain a constant phase relationship",
      "The maximum distance over which waves maintain a constant amplitude",
      "The minimum distance over which waves maintain a constant amplitude",
    ],
    correct_answer:
      "The maximum distance over which waves maintain a constant phase relationship",
  },
  {
    index: 452,
    question: "What is the principle behind holography?",
    options: [
      "The interference of light waves",
      "The diffraction of light waves",
      "The polarization of light waves",
      "The refraction of light waves",
    ],
    correct_answer: "The interference of light waves",
  },
  {
    index: 453,
    question: "Define sound intensity.",
    options: [
      "The distance between two consecutive wave crests",
      "The time it takes for one wave to pass a point",
      "The number of wave crests passing a point per unit time",
      "The amplitude of the sound wave",
    ],
    correct_answer: "The amplitude of the sound wave",
  },
  {
    index: 454,
    question:
      "What is the unit of measurement for the frequency of sound waves?",
    options: ["Decibel (dB)", "Hertz (Hz)", "Watt (W)", "Meter (m)"],
    correct_answer: "Hertz (Hz)",
  },
  {
    index: 455,
    question: "Define resonance in the context of sound waves.",
    options: [
      "The bending of sound waves around obstacles",
      "The reflection of sound waves off a surface",
      "The increase in amplitude of a sound wave when its frequency matches the natural frequency of an object",
      "The decrease in amplitude of a sound wave due to absorption",
    ],
    correct_answer:
      "The increase in amplitude of a sound wave when its frequency matches the natural frequency of an object",
  },
  {
    index: 456,
    question: "What is the function of the eardrum?",
    options: [
      "To amplify sound waves",
      "To detect sound waves",
      "To transmit sound waves to the brain",
      "To protect the inner ear",
    ],
    correct_answer: "To transmit sound waves to the brain",
  },
  {
    index: 457,
    question: "Define electromagnetic radiation.",
    options: [
      "Energy carried by electromagnetic waves",
      "Energy carried by sound waves",
      "Energy carried by water waves",
      "Energy carried by seismic waves",
    ],
    correct_answer: "Energy carried by electromagnetic waves",
  },
  {
    index: 458,
    question:
      "What is the relationship between frequency and energy in electromagnetic waves?",
    options: [
      "They are inversely proportional",
      "They are directly proportional",
      "They are unrelated",
      "They are inversely related to the square root",
    ],
    correct_answer: "They are directly proportional",
  },
  {
    index: 459,
    question: "Define photon.",
    options: [
      "A particle of light",
      "A wave of light",
      "A particle of sound",
      "A wave of sound",
    ],
    correct_answer: "A particle of light",
  },
  {
    index: 460,
    question: "What is the range of wavelengths for visible light?",
    options: [
      "From 1 nm to 100 nm",
      "From 100 nm to 1000 nm",
      "From 400 nm to 700 nm",
      "From 700 nm to 1000 nm",
    ],
    correct_answer: "From 400 nm to 700 nm",
  },
  {
    index: 461,
    question:
      "What is the difference between constructive and destructive interference of light waves?",
    options: [
      "Constructive interference increases the amplitude, while destructive interference decreases the amplitude",
      "Constructive interference decreases the amplitude, while destructive interference increases the amplitude",
      "Constructive interference changes the wavelength, while destructive interference changes the frequency",
      "Constructive interference changes the frequency, while destructive interference changes the wavelength",
    ],
    correct_answer:
      "Constructive interference increases the amplitude, while destructive interference decreases the amplitude",
  },
  {
    index: 462,
    question:
      "What is the difference between a real image and a virtual image?",
    options: [
      "A real image can be projected onto a screen, while a virtual image cannot",
      "A real image cannot be projected onto a screen, while a virtual image can",
      "A real image is formed by converging light rays, while a virtual image is formed by diverging light rays",
      "A real image is formed by diverging light rays, while a virtual image is formed by converging light rays",
    ],
    correct_answer:
      "A real image can be projected onto a screen, while a virtual image cannot",
  },
  {
    index: 463,
    question:
      "What is the process by which unstable atomic nuclei emit radiation?",
    options: ["Fusion", "Fission", "Radioactivity", "Decay"],
    correct_answer: "Radioactivity",
  },
  {
    index: 464,
    question:
      "Which of the following particles is commonly emitted during radioactive decay?",
    options: ["Proton", "Electron", "Neutron", "Photon"],
    correct_answer: "Electron",
  },
  {
    index: 465,
    question: "What is the half-life of a radioactive substance?",
    options: [
      "The time it takes for half of the atoms in a sample to decay",
      "The time it takes for all the atoms in a sample to decay",
      "The time it takes for a sample to become completely stable",
      "The time it takes for a sample to emit radiation",
    ],
    correct_answer:
      "The time it takes for half of the atoms in a sample to decay",
  },
  {
    index: 466,
    question: "Define nuclear fission.",
    options: [
      "The splitting of atomic nuclei into smaller fragments",
      "The combination of atomic nuclei to form a larger nucleus",
      "The emission of radiation from unstable atomic nuclei",
      "The decay of atomic nuclei into stable isotopes",
    ],
    correct_answer: "The splitting of atomic nuclei into smaller fragments",
  },
  {
    index: 467,
    question: "What is the mass defect in nuclear reactions?",
    options: [
      "The difference between the mass of reactants and the mass of products",
      "The difference between the mass of a nucleus and the sum of the masses of its constituent nucleons",
      "The difference between the mass of a nucleus and the mass of its most stable isotope",
      "The difference between the mass of a nucleus and the mass of a neutron",
    ],
    correct_answer:
      "The difference between the mass of a nucleus and the sum of the masses of its constituent nucleons",
  },
  {
    index: 468,
    question: "What is nuclear fusion?",
    options: [
      "The splitting of atomic nuclei into smaller fragments",
      "The combination of atomic nuclei to form a larger nucleus",
      "The emission of radiation from unstable atomic nuclei",
      "The decay of atomic nuclei into stable isotopes",
    ],
    correct_answer: "The combination of atomic nuclei to form a larger nucleus",
  },
  {
    index: 469,
    question:
      "What is the most well-known equation derived from Einstein's theory of relativity?",
    options: ["Newton's Second Law", "Ohm's Law", "E = mc^2", "Hooke's Law"],
    correct_answer: "E = mc^2",
  },
  {
    index: 470,
    question: "What does the equation E = mc^2 represent?",
    options: [
      "The conservation of momentum",
      "The conservation of energy",
      "The relationship between force and acceleration",
      "The relationship between mass and velocity",
    ],
    correct_answer: "The relationship between mass and energy",
  },
  {
    index: 471,
    question: "What is time dilation?",
    options: [
      "The contraction of space in the direction of motion",
      "The slowing down of time for a moving object relative to a stationary observer",
      "The expansion of space in the direction of motion",
      "The acceleration of time for a moving object relative to a stationary observer",
    ],
    correct_answer:
      "The slowing down of time for a moving object relative to a stationary observer",
  },
  {
    index: 472,
    question: "What is length contraction?",
    options: [
      "The contraction of time in the direction of motion",
      "The slowing down of time for a moving object relative to a stationary observer",
      "The contraction of space in the direction of motion",
      "The expansion of space in the direction of motion",
    ],
    correct_answer: "The contraction of space in the direction of motion",
  },
  {
    index: 473,
    question: "What is the fundamental equation of quantum mechanics?",
    options: [
      "E = mc^2",
      "Schrodinger's Equation",
      "Newton's Second Law",
      "Einstein's Equation",
    ],
    correct_answer: "Schrodinger's Equation",
  },
  {
    index: 474,
    question: "What is a quantum state?",
    options: [
      "The energy level of an electron in an atom",
      "The position of a particle in space",
      "The probability distribution of a particle's properties",
      "The velocity of a particle",
    ],
    correct_answer: "The probability distribution of a particle's properties",
  },
  {
    index: 475,
    question: "What is the Heisenberg Uncertainty Principle?",
    options: [
      "The principle stating that it is impossible to measure both the position and momentum of a particle simultaneously with absolute certainty",
      "The principle stating that all physical quantities have discrete values",
      "The principle stating that energy is quantized",
      "The principle stating that the total energy of a closed system is conserved",
    ],
    correct_answer:
      "The principle stating that it is impossible to measure both the position and momentum of a particle simultaneously with absolute certainty",
  },
  {
    index: 476,
    question: "What is a quantum superposition?",
    options: [
      "The combination of multiple quantum states to form a new state",
      "The collapse of a quantum state into a definite value upon measurement",
      "The restriction of a particle's movement to a specific region of space",
      "The simultaneous existence of a particle in multiple states",
    ],
    correct_answer:
      "The simultaneous existence of a particle in multiple states",
  },
  {
    index: 477,
    question: "What is the phenomenon of quantum entanglement?",
    options: [
      "The interconnection of quantum states between particles",
      "The conversion of particles into waves",
      "The transfer of energy between particles",
      "The decay of particles",
    ],
    correct_answer: "The interconnection of quantum states between particles",
  },
  {
    index: 478,
    question: "What is a laser?",
    options: [
      "A device that emits coherent light through stimulated emission",
      "A device that emits light through spontaneous emission",
      "A device that emits incoherent light through spontaneous emission",
      "A device that absorbs light",
    ],
    correct_answer:
      "A device that emits coherent light through stimulated emission",
  },
  {
    index: 479,
    question: "What is the process of stimulated emission in a laser?",
    options: [
      "Atoms absorb energy and emit photons of light",
      "Atoms emit photons of light spontaneously",
      "Atoms emit photons of light in response to incident photons",
      "Atoms absorb photons of light and become excited",
    ],
    correct_answer:
      "Atoms emit photons of light in response to incident photons",
  },
  {
    index: 480,
    question: "What is the difference between a laser and a light bulb?",
    options: [
      "A laser emits coherent light, while a light bulb emits incoherent light",
      "A laser emits incoherent light, while a light bulb emits coherent light",
      "A laser emits visible light, while a light bulb emits ultraviolet light",
      "A laser emits ultraviolet light, while a light bulb emits visible light",
    ],
    correct_answer:
      "A laser emits coherent light, while a light bulb emits incoherent light",
  },
  {
    index: 481,
    question: "What is holography?",
    options: [
      "A technique for producing three-dimensional images using coherent light",
      "A technique for producing two-dimensional images using incoherent light",
      "A technique for producing three-dimensional images using incoherent light",
      "A technique for producing two-dimensional images using coherent light",
    ],
    correct_answer:
      "A technique for producing three-dimensional images using coherent light",
  },
  {
    index: 482,
    question: "What is the difference between a photograph and a hologram?",
    options: [
      "A photograph is two-dimensional, while a hologram is three-dimensional",
      "A photograph is three-dimensional, while a hologram is two-dimensional",
      "A photograph uses incoherent light, while a hologram uses coherent light",
      "A photograph uses coherent light, while a hologram uses incoherent light",
    ],
    correct_answer:
      "A photograph is two-dimensional, while a hologram is three-dimensional",
  },
  {
    index: 483,
    question: "What is a nuclear reaction?",
    options: [
      "A reaction involving changes in the atomic nucleus",
      "A reaction involving changes in the electron cloud",
      "A chemical reaction involving atoms",
      "A reaction involving changes in the atomic orbitals",
    ],
    correct_answer: "A reaction involving changes in the atomic nucleus",
  },
  {
    index: 484,
    question: "What is the primary source of energy in nuclear reactors?",
    options: ["Fusion", "Fission", "Combustion", "Chemical reactions"],
    correct_answer: "Fission",
  },
  {
    index: 485,
    question:
      "What is the fundamental equation of Einstein's theory of relativity?",
    options: ["E = mc^2", "F = ma", "PV = nRT", "V = IR"],
    correct_answer: "E = mc^2",
  },
  {
    index: 486,
    question: "What does the equation E = mc^2 represent?",
    options: [
      "The relationship between force and acceleration",
      "The relationship between pressure, volume, and temperature",
      "The conservation of momentum",
      "The equivalence of mass and energy",
    ],
    correct_answer: "The equivalence of mass and energy",
  },
  {
    index: 487,
    question:
      "What is the concept of time dilation in Einstein's theory of relativity?",
    options: [
      "The contraction of space in the direction of motion",
      "The slowing down of time for a moving object relative to a stationary observer",
      "The expansion of space in the direction of motion",
      "The acceleration of time for a moving object relative to a stationary observer",
    ],
    correct_answer:
      "The slowing down of time for a moving object relative to a stationary observer",
  },
  {
    index: 488,
    question:
      "What is length contraction according to Einstein's theory of relativity?",
    options: [
      "The contraction of time in the direction of motion",
      "The slowing down of time for a moving object relative to a stationary observer",
      "The contraction of space in the direction of motion",
      "The expansion of space in the direction of motion",
    ],
    correct_answer: "The contraction of space in the direction of motion",
  },
  {
    index: 489,
    question: "What is a quantum?",
    options: [
      "A discrete unit of energy",
      "A discrete unit of matter",
      "A particle of light",
      "A particle of sound",
    ],
    correct_answer: "A discrete unit of energy",
  },
  {
    index: 490,
    question:
      "What is the Heisenberg Uncertainty Principle in quantum mechanics?",
    options: [
      "The principle stating that it is impossible to measure both the position and momentum of a particle simultaneously with absolute certainty",
      "The principle stating that all physical quantities have discrete values",
      "The principle stating that energy is quantized",
      "The principle stating that the total energy of a closed system is conserved",
    ],
    correct_answer:
      "The principle stating that it is impossible to measure both the position and momentum of a particle simultaneously with absolute certainty",
  },
  {
    index: 491,
    question: "What is quantum entanglement?",
    options: [
      "The interconnection of quantum states between particles",
      "The conversion of particles into waves",
      "The transfer of energy between particles",
      "The decay of particles",
    ],
    correct_answer: "The interconnection of quantum states between particles",
  },
  {
    index: 492,
    question: "What is a laser beam?",
    options: [
      "A beam of coherent light",
      "A beam of incoherent light",
      "A beam of ultraviolet light",
      "A beam of gamma rays",
    ],
    correct_answer: "A beam of coherent light",
  },
  {
    index: 493,
    question: "What is the process of stimulated emission in lasers?",
    options: [
      "Atoms absorb energy and emit photons of light",
      "Atoms emit photons of light spontaneously",
      "Atoms emit photons of light in response to incident photons",
      "Atoms absorb photons of light and become excited",
    ],
    correct_answer:
      "Atoms emit photons of light in response to incident photons",
  },
  {
    index: 494,
    question: "What is the difference between a laser and a flashlight?",
    options: [
      "A laser emits coherent light, while a flashlight emits incoherent light",
      "A laser emits incoherent light, while a flashlight emits coherent light",
      "A laser emits visible light, while a flashlight emits ultraviolet light",
      "A laser emits ultraviolet light, while a flashlight emits visible light",
    ],
    correct_answer:
      "A laser emits coherent light, while a flashlight emits incoherent light",
  },
  {
    index: 495,
    question: "What is holography used for?",
    options: [
      "Producing three-dimensional images",
      "Producing two-dimensional images",
      "Producing images with a single color",
      "Producing images with multiple colors",
    ],
    correct_answer: "Producing three-dimensional images",
  },
  {
    index: 496,
    question: "What is the main principle behind holography?",
    options: [
      "Interference of light waves",
      "Reflection of light waves",
      "Refraction of light waves",
      "Diffraction of light waves",
    ],
    correct_answer: "Interference of light waves",
  },
  {
    index: 497,
    question: "What is nuclear decay?",
    options: [
      "The spontaneous emission of radiation from an unstable atomic nucleus",
      "The splitting of atomic nuclei into smaller fragments",
      "The combination of atomic nuclei to form a larger nucleus",
      "The decay of atomic nuclei into stable isotopes",
    ],
    correct_answer:
      "The spontaneous emission of radiation from an unstable atomic nucleus",
  },
  {
    index: 498,
    question: "What is a nuclear reactor?",
    options: [
      "A device that emits radiation",
      "A device that generates electricity from nuclear energy",
      "A device that accelerates particles",
      "A device that detects radiation",
    ],
    correct_answer: "A device that generates electricity from nuclear energy",
  },
  {
    index: 499,
    question:
      "What is the principle of relativity proposed by Albert Einstein?",
    options: [
      "All motion is relative",
      "The laws of physics are the same in all inertial reference frames",
      "The speed of light is constant in all frames of reference",
      "All of the above",
    ],
    correct_answer: "All of the above",
  },
  {
    index: 500,
    question:
      "What is the concept of mass-energy equivalence in Einstein's theory of relativity?",
    options: [
      "Energy can be converted into mass",
      "Mass can be converted into energy",
      "Both a and b",
      "None of the above",
    ],
    correct_answer: "Both a and b",
  },
  {
    index: 501,
    question: "What is quantum mechanics?",
    options: [
      "The study of small particles",
      "The study of energy quantization",
      "The study of wave-particle duality",
      "All of the above",
    ],
    correct_answer: "All of the above",
  },
  {
    index: 502,
    question: "What is a photon?",
    options: [
      "A particle of light",
      "A particle of sound",
      "A particle of matter",
      "A particle of energy",
    ],
    correct_answer: "A particle of light",
  },
  {
    index: 503,
    question: "What is the uncertainty principle in quantum mechanics?",
    options: [
      "The principle stating that the position and momentum of a particle cannot be simultaneously measured with absolute certainty",
      "The principle stating that all physical quantities have discrete values",
      "The principle stating that energy is quantized",
      "The principle stating that the total energy of a closed system is conserved",
    ],
    correct_answer:
      "The principle stating that the position and momentum of a particle cannot be simultaneously measured with absolute certainty",
  },
  {
    index: 504,
    question: "What is quantum entanglement?",
    options: [
      "The interconnection of quantum states between particles",
      "The conversion of particles into waves",
      "The transfer of energy between particles",
      "The decay of particles",
    ],
    correct_answer: "The interconnection of quantum states between particles",
  },
  {
    index: 505,
    question: "What is a laser?",
    options: [
      "A device that emits coherent light",
      "A device that emits incoherent light",
      "A device that absorbs light",
      "A device that reflects light",
    ],
    correct_answer: "A device that emits coherent light",
  },
  {
    index: 506,
    question: "What is the process of stimulated emission in lasers?",
    options: [
      "Atoms absorb energy and emit photons of light",
      "Atoms emit photons of light spontaneously",
      "Atoms emit photons of light in response to incident photons",
      "Atoms absorb photons of light and become excited",
    ],
    correct_answer:
      "Atoms emit photons of light in response to incident photons",
  },
  {
    index: 507,
    question: "What is the difference between a laser and a flashlight?",
    options: [
      "A laser emits coherent light, while a flashlight emits incoherent light",
      "A laser emits incoherent light, while a flashlight emits coherent light",
      "A laser emits ultraviolet light, while a flashlight emits visible light",
      "A laser emits visible light, while a flashlight emits ultraviolet light",
    ],
    correct_answer:
      "A laser emits coherent light, while a flashlight emits incoherent light",
  },
  {
    index: 508,
    question: "What is holography?",
    options: [
      "A technique for producing three-dimensional images using coherent light",
      "A technique for producing two-dimensional images using incoherent light",
      "A technique for producing three-dimensional images using incoherent light",
      "A technique for producing two-dimensional images using coherent light",
    ],
    correct_answer:
      "A technique for producing three-dimensional images using coherent light",
  },
  {
    index: 509,
    question: "What is the difference between a photograph and a hologram?",
    options: [
      "A photograph is two-dimensional, while a hologram is three-dimensional",
      "A photograph is three-dimensional, while a hologram is two-dimensional",
      "A photograph uses coherent light, while a hologram uses incoherent light",
      "A photograph uses incoherent light, while a hologram uses coherent light",
    ],
    correct_answer:
      "A photograph is two-dimensional, while a hologram is three-dimensional",
  },
  {
    index: 510,
    question: "What is the source of energy in nuclear reactions?",
    options: ["Fission", "Fusion", "Chemical reactions", "Thermal reactions"],
    correct_answer: "Fission",
  },
  {
    index: 511,
    question:
      "What is the principle of relativity according to Albert Einstein?",
    options: [
      "All motion is relative",
      "The laws of physics are the same in all inertial reference frames",
      "The speed of light is constant in all frames of reference",
      "All of the above",
    ],
    correct_answer: "All of the above",
  },
  {
    index: 512,
    question:
      "What is the concept of mass-energy equivalence in Einstein's theory of relativity?",
    options: [
      "Energy can be converted into mass",
      "Mass can be converted into energy",
      "Both a and b",
      "None of the above",
    ],
    correct_answer: "Both a and b",
  },
];