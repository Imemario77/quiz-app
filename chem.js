const chem = [
  {
    index: 1,
    question: "What is the scientific method?",
    options: [
      "A systematic approach to problem-solving in chemistry",
      "A series of unrelated experiments",
      "A method used only in biological research",
      "A method for conducting laboratory tests",
    ],
    correct_answer: "A systematic approach to problem-solving in chemistry",
  },
  {
    index: 2,
    question: "Why is the scientific method important in chemistry?",
    options: [
      "It ensures reproducibility of results",
      "It allows for the testing of hypotheses",
      "It promotes critical thinking and inquiry",
      "All of the above",
    ],
    correct_answer: "All of the above",
  },
  {
    index: 3,
    question: "What is the periodic table?",
    options: [
      "A chart displaying the elements in order of increasing atomic number",
      "A list of chemical compounds and their properties",
      "A tool used only in physics research",
      "A diagram showing the structure of an atom",
    ],
    correct_answer:
      "A chart displaying the elements in order of increasing atomic number",
  },
  {
    index: 4,
    question: "How are elements organized on the periodic table?",
    options: [
      "By increasing atomic mass",
      "By increasing atomic radius",
      "By increasing atomic number",
      "By increasing number of electrons",
    ],
    correct_answer: "By increasing atomic number",
  },
  {
    index: 5,
    question: "What are atoms?",
    options: [
      "The smallest units of matter that retain the properties of an element",
      "Subatomic particles found in the nucleus of an atom",
      "Electrons surrounding the nucleus of an atom",
      "A type of chemical bond",
    ],
    correct_answer:
      "The smallest units of matter that retain the properties of an element",
  },
  {
    index: 6,
    question: "How are atoms and molecules related?",
    options: [
      "Atoms are individual particles, while molecules are combinations of atoms",
      "Atoms and molecules are the same thing",
      "Molecules are larger than atoms",
      "Atoms cannot form molecules",
    ],
    correct_answer:
      "Atoms are individual particles, while molecules are combinations of atoms",
  },
  {
    index: 7,
    question: "What is a chemical bond?",
    options: [
      "A force that holds atoms together in a compound",
      "A type of subatomic particle",
      "A measurement of atomic size",
      "A type of chemical reaction",
    ],
    correct_answer: "A force that holds atoms together in a compound",
  },
  {
    index: 8,
    question: "What are the main types of chemical bonds?",
    options: [
      "Ionic, covalent, and metallic bonds",
      "Ionic, organic, and inorganic bonds",
      "Polar and nonpolar bonds",
      "Hydrogen and van der Waals bonds",
    ],
    correct_answer: "Ionic, covalent, and metallic bonds",
  },
  {
    index: 9,
    question: "Which of the following is a characteristic of alkynes?",
    options: [
      "Contain a triple bond",
      "Contain a double bond",
      "Highly reactive",
      "Contain a hydroxyl group",
    ],
    correct_answer: "Contain a triple bond",
  },
  {
    index: 10,
    question: "What is the functional group present in alcohols?",
    options: ["-OH", "-CO-", "-COOH", "-NH2"],
    correct_answer: "-OH",
  },
  {
    index: 11,
    question: "Which type of reaction converts an alcohol to an alkene?",
    options: ["Dehydration", "Hydration", "Oxidation", "Reduction"],
    correct_answer: "Dehydration",
  },
  {
    index: 12,
    question: "What is the general formula for aldehydes?",
    options: ["RCHO", "RCOOR'", "RCOOH", "ROH"],
    correct_answer: "RCHO",
  },
  {
    index: 13,
    question: "Which of the following is an alkene?",
    options: ["RCHOR'", "RCOOH", "RCOR'", "RCH=CHR'"],
    correct_answer: "RCH=CHR'",
  },
  {
    index: 14,
    question: "What is the functional group present in aldehydes?",
    options: ["-CHO", "-OH", "-CO-", "-COOH"],
    correct_answer: "-CHO",
  },
  {
    index: 15,
    question: "Which type of reaction converts an alkene to an alcohol?",
    options: ["Hydration", "Dehydration", "Oxidation", "Reduction"],
    correct_answer: "Hydration",
  },
  {
    index: 16,
    question: "What is the general formula for ketones?",
    options: ["RCOR'", "RCOOH", "RCHO", "ROH"],
    correct_answer: "RCOR'",
  },
  {
    index: 17,
    question: "What is the functional group present in esters?",
    options: ["-COOR'", "-CHO", "-OH", "-COOH"],
    correct_answer: "-COOR'",
  },
  {
    index: 18,
    question: "Which of the following is an alcohol?",
    options: ["R-COO-R'", "R-CHO", "R-COOR'", "R-OH"],
    correct_answer: "R-OH",
  },
  {
    index: 19,
    question: "What is the general formula for ethers?",
    options: ["ROR'", "RCOOH", "RCHO", "ROH"],
    correct_answer: "ROR'",
  },
  {
    index: 20,
    question: "What is the functional group present in ethers?",
    options: ["-O-", "-CO-", "-OH", "-COOH"],
    correct_answer: "-O-",
  },
  {
    index: 21,
    question: "Which of the following is a ketone?",
    options: ["RCHO", "RCOOR'", "RCOOH", "RCOR'"],
    correct_answer: "RCOR'",
  },
  {
    index: 22,
    question: "What type of bond is present in alkenes?",
    options: ["Double bond", "Single bond", "Triple bond", "Ionic bond"],
    correct_answer: "Double bond",
  },
  {
    index: 23,
    question: "What is the general formula for alcohols?",
    options: ["ROH", "RCOOH", "RCOR'", "RCOOR'"],
    correct_answer: "ROH",
  },
  {
    index: 24,
    question: "Which of the following is an ether?",
    options: ["RCHO", "RCOOR'", "RCOOH", "ROH"],
    correct_answer: "RCOOR'",
  },
  {
    index: 25,
    question: "What is the functional group present in alcohols?",
    options: ["-OH", "-CO-", "-CHO", "-COOH"],
    correct_answer: "-OH",
  },
  {
    index: 26,
    question: "Which type of reaction converts an alcohol to an aldehyde?",
    options: ["Oxidation", "Reduction", "Hydration", "Dehydration"],
    correct_answer: "Oxidation",
  },
  {
    index: 27,
    question:
      "Which functional group contains a carbon double-bonded to an oxygen and single-bonded to a hydrogen?",
    options: ["Aldehyde", "Ketone", "Carboxylic acid", "Ester"],
    correct_answer: "Aldehyde",
  },
  {
    index: 28,
    question: "What is the general formula for alkanes?",
    options: ["CnH2n+2", "CnH2n", "CnH2n-2", "CnHn"],
    correct_answer: "CnH2n+2",
  },
  {
    index: 29,
    question: "Which of the following is a characteristic of alcohols?",
    options: [
      "Hydroxyl group (-OH)",
      "Carbonyl group (>C=O)",
      "Amino group (-NH2)",
      "Carboxyl group (-COOH)",
    ],
    correct_answer: "Hydroxyl group (-OH)",
  },
  {
    index: 30,
    question: "What is the functional group present in ethers?",
    options: ["R-O-R'", "R-COOH", "R-CO-R'", "R-C=O"],
    correct_answer: "R-O-R'",
  },
  {
    index: 31,
    question:
      "Which of the following functional groups contains a carbon double-bonded to an oxygen?",
    options: ["Aldehyde", "Ketone", "Carboxylic acid", "Ester"],
    correct_answer: "Ketone",
  },
  {
    index: 32,
    question: "What type of bond is present in alkynes?",
    options: ["Triple bond", "Single bond", "Double bond", "Ionic bond"],
    correct_answer: "Triple bond",
  },
  {
    index: 33,
    question: "Which of the following is a carboxylic acid derivative?",
    options: ["Ester", "Alcohol", "Aldehyde", "Ketone"],
    correct_answer: "Ester",
  },
  {
    index: 34,
    question: "What is the functional group present in carboxylic acids?",
    options: ["-COOH", "-OH", "-C=O", "-NH2"],
    correct_answer: "-COOH",
  },
  {
    index: 35,
    question: "What is the general formula for alkenes?",
    options: ["CnH2n+2", "CnH2n", "CnH2n-2", "CnHn"],
    correct_answer: "CnH2n",
  },
  {
    index: 36,
    question: "What is the functional group present in aldehydes?",
    options: ["-CHO", "-OH", "-COOH", "-NH2"],
    correct_answer: "-CHO",
  },
  {
    index: 37,
    question: "Which of the following is an alcohol?",
    options: ["R-O-R'", "R-COOH", "R-CO-R'", "R-OH"],
    correct_answer: "R-OH",
  },
  {
    index: 38,
    question: "Which type of reaction converts an alkane to an alkene?",
    options: ["Dehydrogenation", "Hydrogenation", "Oxidation", "Reduction"],
    correct_answer: "Dehydrogenation",
  },
  {
    index: 39,
    question: "What is the general formula for alkynes?",
    options: ["CnH2n+2", "CnH2n", "CnH2n-2", "CnHn"],
    correct_answer: "CnH2n-2",
  },
  {
    index: 40,
    question: "Which functional group is present in esters?",
    options: ["R-COO-R'", "R-O-R'", "R-CO-R'", "R-OH"],
    correct_answer: "R-COO-R'",
  },
  {
    index: 41,
    question: "What is the functional group present in alcohols?",
    options: ["-OH", "-CHO", "-COOH", "-NH2"],
    correct_answer: "-OH",
  },
  {
    index: 42,
    question: "Which of the following is a characteristic of alkanes?",
    options: [
      "Single bonds only",
      "Contain a carbonyl group",
      "Highly reactive",
      "Acidic properties",
    ],
    correct_answer: "Single bonds only",
  },
  {
    index: 43,
    question: "What is the general formula for alcohols?",
    options: ["CnH2n+2O", "CnH2n+1OH", "CnH2n-1OH", "CnH2n"],
    correct_answer: "CnH2n+1OH",
  },
  {
    index: 44,
    question: "Which type of reaction converts an alkene to an alkane?",
    options: ["Hydrogenation", "Dehydrogenation", "Oxidation", "Reduction"],
    correct_answer: "Hydrogenation",
  },
  {
    index: 45,
    question: "What is the functional group present in carboxylic acids?",
    options: ["-COOH", "-OH", "-CHO", "-NH2"],
    correct_answer: "-COOH",
  },
  {
    index: 46,
    question: "Which functional group is present in esters?",
    options: ["R-COO-R'", "R-O-R'", "R-CO-R'", "R-OH"],
    correct_answer: "R-COO-R'",
  },
  {
    index: 47,
    question: "What is the functional group present in ketones?",
    options: ["-CO-", "-CHO", "-COOH", "-OH"],
    correct_answer: "-CO-",
  },
  {
    index: 48,
    question: "Which of the following is an ether?",
    options: ["R-O-R'", "R-COOH", "R-CO-R'", "R-OH"],
    correct_answer: "R-O-R'",
  },
  {
    index: 49,
    question: "What type of bond is present in alkenes?",
    options: ["Double bond", "Single bond", "Triple bond", "Ionic bond"],
    correct_answer: "Double bond",
  },
  {
    index: 50,
    question: "Which of the following is a carboxylic acid derivative?",
    options: ["Ester", "Alcohol", "Aldehyde", "Ketone"],
    correct_answer: "Ester",
  },
  {
    index: 51,
    question: "What is the functional group present in alcohols?",
    options: ["-OH", "-CHO", "-COOH", "-NH2"],
    correct_answer: "-OH",
  },
  {
    index: 52,
    question:
      "Which of the following functional groups contains a carbon double-bonded to an oxygen?",
    options: ["Aldehyde", "Ketone", "Carboxylic acid", "Ester"],
    correct_answer: "Ketone",
  },
  {
    index: 53,
    question: "What is the general formula for alkanes?",
    options: ["CnH2n+2", "CnH2n", "CnH2n-2", "CnHn"],
    correct_answer: "CnH2n+2",
  },
  {
    index: 54,
    question: "Which of the following is an alcohol?",
    options: ["R-O-R'", "R-COOH", "R-CO-R'", "R-OH"],
    correct_answer: "R-OH",
  },
  {
    index: 55,
    question:
      "Which functional group contains a carbon double-bonded to an oxygen and single-bonded to a hydrogen?",
    options: ["Aldehyde", "Ketone", "Carboxylic acid", "Ester"],
    correct_answer: "Aldehyde",
  },
  {
    index: 56,
    question: "What is the functional group present in ethers?",
    options: ["R-O-R'", "R-COOH", "R-CO-R'", "R-C=O"],
    correct_answer: "R-O-R'",
  },
  {
    index: 57,
    question:
      "Which of the following functional groups contains a carbon double-bonded to an oxygen?",
    options: ["Aldehyde", "Ketone", "Carboxylic acid", "Ester"],
    correct_answer: "Ketone",
  },
  {
    index: 58,
    question: "What type of bond is present in alkynes?",
    options: ["Triple bond", "Single bond", "Double bond", "Ionic bond"],
    correct_answer: "Triple bond",
  },
  {
    index: 59,
    question: "What is the functional group present in carboxylic acids?",
    options: ["-COOH", "-OH", "-C=O", "-NH2"],
    correct_answer: "-COOH",
  },
  {
    index: 60,
    question: "Which of the following is a characteristic of alkanes?",
    options: [
      "Single bonds only",
      "Contain a carbonyl group",
      "Highly reactive",
      "Acidic properties",
    ],
    correct_answer: "Single bonds only",
  },
  {
    index: 61,
    question: "What is the general formula for alcohols?",
    options: ["CnH2n+2O", "CnH2n+1OH", "CnH2n-1OH", "CnH2n"],
    correct_answer: "CnH2n+1OH",
  },
  {
    index: 62,
    question: "What is the general formula for aldehydes?",
    options: ["RCHO", "RCOOR'", "RCOOH", "ROH"],
    correct_answer: "RCHO",
  },
  {
    index: 63,
    question: "Which of the following is an alkane?",
    options: ["RCHOR'", "RCOOH", "RCOR'", "RCH3"],
    correct_answer: "RCH3",
  },
  {
    index: 64,
    question: "What is the functional group present in aldehydes?",
    options: ["-CHO", "-OH", "-CO-", "-COOH"],
    correct_answer: "-CHO",
  },
  {
    index: 65,
    question: "How are chemical equations used in chemistry?",
    options: [
      "To represent chemical reactions",
      "To predict the outcome of reactions",
      "To balance the number of atoms in reactants and products",
      "All of the above",
    ],
    correct_answer: "All of the above",
  },
  {
    index: 66,
    question: "Why is it important to balance chemical equations?",
    options: [
      "To satisfy the law of conservation of mass",
      "To ensure the reaction proceeds correctly",
      "To determine the stoichiometry of the reaction",
      "All of the above",
    ],
    correct_answer: "All of the above",
  },
  {
    index: 67,
    question: "What is stoichiometry?",
    options: [
      "The study of the behavior of gases",
      "The study of reaction rates",
      "The study of the composition of matter",
      "The study of the quantities of substances involved in chemical reactions",
    ],
    correct_answer:
      "The study of the quantities of substances involved in chemical reactions",
  },
  {
    index: 68,
    question: "How do you calculate the molar mass of a compound?",
    options: [
      "By adding up the atomic masses of all the atoms in the compound",
      "By dividing the mass of the compound by its volume",
      "By multiplying the number of moles by Avogadro's number",
      "By dividing the mass of the compound by its density",
    ],
    correct_answer:
      "By adding up the atomic masses of all the atoms in the compound",
  },
  {
    index: 69,
    question: "What is Avogadro's number?",
    options: ["6.02 x 10^23", "3.14 x 10^8", "9.81 m/s^2", "1.67 x 10^-27"],
    correct_answer: "6.02 x 10^23",
  },
  {
    index: 70,
    question: "What is a mole in chemistry?",
    options: [
      "A small furry animal",
      "A unit of measurement for mass",
      "A unit of measurement for volume",
      "A unit of measurement for the number of particles",
    ],
    correct_answer: "A unit of measurement for the number of particles",
  },
  {
    index: 71,
    question: "What is the ideal gas law?",
    options: ["PV = nRT", "F = ma", "E = mc^2", "E = hf"],
    correct_answer: "PV = nRT",
  },
  {
    index: 72,
    question: "What does the ideal gas law represent?",
    options: [
      "The relationship between pressure, volume, and temperature of gases",
      "The relationship between force, mass, and acceleration",
      "The relationship between energy, mass, and the speed of light",
      "The relationship between energy and frequency of electromagnetic waves",
    ],
    correct_answer:
      "The relationship between pressure, volume, and temperature of gases",
  },
  {
    index: 73,
    question:
      "What is the difference between an exothermic and endothermic reaction?",
    options: [
      "Exothermic reactions release heat, while endothermic reactions absorb heat",
      "Exothermic reactions absorb heat, while endothermic reactions release heat",
      "Exothermic reactions produce light, while endothermic reactions produce heat",
      "There is no difference between them",
    ],
    correct_answer:
      "Exothermic reactions release heat, while endothermic reactions absorb heat",
  },
  {
    index: 74,
    question: "What is the pH scale used to measure?",
    options: [
      "Acidity or alkalinity of a solution",
      "Pressure of a gas",
      "Concentration of solutes in a solution",
      "Temperature of a solution",
    ],
    correct_answer: "Acidity or alkalinity of a solution",
  },
  {
    index: 75,
    question: "What does a pH of 7 indicate?",
    options: [
      "Neutral solution",
      "Acidic solution",
      "Basic solution",
      "Saturated solution",
    ],
    correct_answer: "Neutral solution",
  },
  {
    index: 76,
    question: "What is the chemical formula for water?",
    options: ["H2O2", "H3O+", "CO2", "H2O"],
    correct_answer: "H2O",
  },
  {
    index: 77,
    question: "What is an acid?",
    options: [
      "A substance that donates protons",
      "A substance that accepts protons",
      "A substance that contains only hydrogen atoms",
      "A substance that dissolves in water",
    ],
    correct_answer: "A substance that donates protons",
  },
  {
    index: 78,
    question: "What is a base?",
    options: [
      "A substance that accepts protons",
      "A substance that donates protons",
      "A substance that contains only hydroxide ions",
      "A substance that does not dissolve in water",
    ],
    correct_answer: "A substance that accepts protons",
  },
  {
    index: 79,
    question: "What is the chemical formula for hydrochloric acid?",
    options: ["HCl", "H2SO4", "NaOH", "CO2"],
    correct_answer: "HCl",
  },
  {
    index: 80,
    question: "What is the chemical formula for sodium hydroxide?",
    options: ["NaOH", "HCl", "H2O", "CO2"],
    correct_answer: "NaOH",
  },
  {
    index: 81,
    question:
      "What is the process of turning a solid into a gas without passing through the liquid state called?",
    options: ["Sublimation", "Evaporation", "Condensation", "Melting"],
    correct_answer: "Sublimation",
  },
  {
    index: 82,
    question:
      "What is the term for a substance that speeds up a chemical reaction without being consumed in the reaction?",
    options: ["Catalyst", "Reactant", "Product", "Enzyme"],
    correct_answer: "Catalyst",
  },
  {
    index: 83,
    question:
      "What is the difference between a physical change and a chemical change?",
    options: [
      "Physical changes only affect the physical properties of a substance, while chemical changes result in the formation of new substances",
      "Physical changes involve changes in temperature, while chemical changes do not",
      "Physical changes are reversible, while chemical changes are irreversible",
      "There is no difference between them",
    ],
    correct_answer:
      "Physical changes only affect the physical properties of a substance, while chemical changes result in the formation of new substances",
  },
  {
    index: 84,
    question: "What is the oxidation state of oxygen in most compounds?",
    options: ["-2", "+2", "0", "-1"],
    correct_answer: "-2",
  },
  {
    index: 85,
    question: "What is the oxidation state of hydrogen in most compounds?",
    options: ["+1", "-1", "0", "+2"],
    correct_answer: "+1",
  },
  {
    index: 86,
    question: "What is the chemical symbol for iron?",
    options: ["Fe", "Ir", "In", "Fr"],
    correct_answer: "Fe",
  },
  {
    index: 87,
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Al", "Ar"],
    correct_answer: "Au",
  },
  {
    index: 88,
    question: "What is the chemical symbol for lead?",
    options: ["Pb", "Pl", "Pd", "Pe"],
    correct_answer: "Pb",
  },
  {
    index: 89,
    question: "What is the chemical symbol for copper?",
    options: ["Cu", "Co", "Cp", "Cr"],
    correct_answer: "Cu",
  },
  {
    index: 90,
    question: "What is the chemical symbol for silver?",
    options: ["Ag", "Au", "Al", "Ar"],
    correct_answer: "Ag",
  },
  {
    index: 91,
    question: "What is the chemical symbol for nitrogen?",
    options: ["N", "Ni", "Ne", "Na"],
    correct_answer: "N",
  },
  {
    index: 92,
    question: "What is the chemical symbol for oxygen?",
    options: ["O", "Os", "Oh", "Om"],
    correct_answer: "O",
  },
  {
    index: 93,
    question: "What is the chemical symbol for carbon?",
    options: ["C", "Ca", "Cr", "Co"],
    correct_answer: "C",
  },
  {
    index: 94,
    question: "What is the chemical symbol for sodium?",
    options: ["Na", "No", "Ne", "Nu"],
    correct_answer: "Na",
  },
  {
    index: 95,
    question: "What is the chemical symbol for potassium?",
    options: ["K", "Ka", "Kp", "Ko"],
    correct_answer: "K",
  },
  {
    index: 96,
    question: "What is the chemical symbol for hydrogen?",
    options: ["H", "Hy", "Ho", "Ha"],
    correct_answer: "H",
  },
  {
    index: 97,
    question: "What is the law of conservation of mass?",
    options: [
      "Mass cannot be created or destroyed in a chemical reaction",
      "Mass can be created or destroyed in a chemical reaction",
      "Mass remains constant only in physical reactions",
      "Mass remains constant only in nuclear reactions",
    ],
    correct_answer:
      "Mass cannot be created or destroyed in a chemical reaction",
  },
  {
    index: 98,
    question: "What is an element?",
    options: [
      "A pure substance made of only one type of atom",
      "A pure substance made of two or more types of atoms",
      "A combination of different elements",
      "A compound with variable composition",
    ],
    correct_answer: "A pure substance made of only one type of atom",
  },
  {
    index: 99,
    question: "What are the main groups of elements on the periodic table?",
    options: [
      "Alkali metals, alkaline earth metals, transition metals, halogens, noble gases",
      "Metals, metalloids, nonmetals, inert gases",
      "Organic, inorganic, synthetic, natural",
      "S, P, D, F",
    ],
    correct_answer:
      "Alkali metals, alkaline earth metals, transition metals, halogens, noble gases",
  },
  {
    index: 100,
    question: "What is an isotope?",
    options: [
      "Atoms of the same element with different numbers of neutrons",
      "Atoms of different elements with the same number of protons",
      "Atoms with the same number of protons and electrons",
      "Atoms with the same number of electrons but different number of protons",
    ],
    correct_answer:
      "Atoms of the same element with different numbers of neutrons",
  },
  {
    index: 101,
    question: "What is a covalent bond?",
    options: [
      "A bond formed by the transfer of electrons",
      "A bond formed by the sharing of electrons",
      "A bond formed by the attraction between oppositely charged ions",
      "A bond formed by the attraction between a metal and a nonmetal",
    ],
    correct_answer: "A bond formed by the sharing of electrons",
  },
  {
    index: 102,
    question: "What is an ionic bond?",
    options: [
      "A bond formed by the transfer of electrons",
      "A bond formed by the sharing of electrons",
      "A bond formed by the attraction between oppositely charged ions",
      "A bond formed by the attraction between a metal and a nonmetal",
    ],
    correct_answer:
      "A bond formed by the attraction between oppositely charged ions",
  },
  {
    index: 103,
    question: "What is electronegativity?",
    options: [
      "The ability of an atom to attract electrons in a chemical bond",
      "The ability of an atom to lose electrons",
      "The ability of an atom to form ions",
      "The ability of an atom to bond with other atoms",
    ],
    correct_answer:
      "The ability of an atom to attract electrons in a chemical bond",
  },
  {
    index: 104,
    question: "What is a polar covalent bond?",
    options: [
      "A covalent bond in which electrons are shared equally between atoms",
      "A covalent bond in which electrons are shared unequally between atoms",
      "A covalent bond in which electrons are completely transferred",
      "A covalent bond in which no electrons are shared",
    ],
    correct_answer:
      "A covalent bond in which electrons are shared unequally between atoms",
  },
  {
    index: 105,
    question: "What is a nonpolar covalent bond?",
    options: [
      "A covalent bond in which electrons are shared equally between atoms",
      "A covalent bond in which electrons are shared unequally between atoms",
      "A covalent bond in which electrons are completely transferred",
      "A covalent bond in which no electrons are shared",
    ],
    correct_answer:
      "A covalent bond in which electrons are shared equally between atoms",
  },
  {
    index: 106,
    question: "What is a chemical reaction?",
    options: [
      "A process that rearranges atoms to form new substances",
      "A process that changes the physical state of a substance",
      "A process that breaks down molecules into smaller units",
      "A process that creates energy from matter",
    ],
    correct_answer: "A process that rearranges atoms to form new substances",
  },
  {
    index: 107,
    question: "What is an exothermic reaction?",
    options: [
      "A reaction that absorbs heat from the surroundings",
      "A reaction that releases heat to the surroundings",
      "A reaction that produces light",
      "A reaction that occurs spontaneously",
    ],
    correct_answer: "A reaction that releases heat to the surroundings",
  },
  {
    index: 108,
    question: "What is an endothermic reaction?",
    options: [
      "A reaction that absorbs heat from the surroundings",
      "A reaction that releases heat to the surroundings",
      "A reaction that produces light",
      "A reaction that occurs spontaneously",
    ],
    correct_answer: "A reaction that absorbs heat from the surroundings",
  },
  {
    index: 109,
    question: "What is activation energy?",
    options: [
      "The energy required to start a chemical reaction",
      "The energy released during a chemical reaction",
      "The energy stored in chemical bonds",
      "The energy produced by a chemical reaction",
    ],
    correct_answer: "The energy required to start a chemical reaction",
  },
  {
    index: 110,
    question: "What is an enzyme?",
    options: [
      "A type of metal",
      "A biological catalyst",
      "A type of acid",
      "A type of salt",
    ],
    correct_answer: "A biological catalyst",
  },
  {
    index: 111,
    question: "What is an ion?",
    options: [
      "An atom with a positive or negative charge",
      "An atom with no charge",
      "A molecule with a positive or negative charge",
      "A molecule with no charge",
    ],
    correct_answer: "An atom with a positive or negative charge",
  },
  {
    index: 112,
    question: "What is a solution?",
    options: [
      "A mixture of two or more substances in which the molecules of the substances are evenly distributed",
      "A pure substance made up of only one type of atom",
      "A substance that cannot be broken down into simpler substances by chemical means",
      "A substance formed by the chemical combination of two or more elements in definite proportions",
    ],
    correct_answer:
      "A mixture of two or more substances in which the molecules of the substances are evenly distributed",
  },
  {
    index: 113,
    question: "What is a solvent?",
    options: [
      "The substance that is dissolved in a solution",
      "The substance that does the dissolving in a solution",
      "A substance that cannot dissolve in water",
      "A substance that forms a homogeneous mixture with another substance",
    ],
    correct_answer: "The substance that does the dissolving in a solution",
  },
  {
    index: 114,
    question: "What is a solute?",
    options: [
      "The substance that is dissolved in a solution",
      "The substance that does the dissolving in a solution",
      "A substance that cannot dissolve in water",
      "A substance that forms a homogeneous mixture with another substance",
    ],
    correct_answer: "The substance that is dissolved in a solution",
  },
  {
    index: 115,
    question: "What is concentration?",
    options: [
      "The amount of solute dissolved in a solvent",
      "The amount of solvent dissolved in a solute",
      "The temperature at which a solute dissolves in a solvent",
      "The speed at which a solute dissolves in a solvent",
    ],
    correct_answer: "The amount of solute dissolved in a solvent",
  },
  {
    index: 116,
    question: "What is a chemical equilibrium?",
    options: [
      "A state in which the rate of the forward reaction equals the rate of the reverse reaction",
      "A state in which the rate of the forward reaction is faster than the rate of the reverse reaction",
      "A state in which the rate of the reverse reaction is faster than the rate of the forward reaction",
      "A state in which there is no reaction occurring",
    ],
    correct_answer:
      "A state in which the rate of the forward reaction equals the rate of the reverse reaction",
  },
  {
    index: 117,
    question: "What is a redox reaction?",
    options: [
      "A reaction in which electrons are transferred between reactants",
      "A reaction in which heat is absorbed",
      "A reaction in which light is produced",
      "A reaction in which gas is released",
    ],
    correct_answer:
      "A reaction in which electrons are transferred between reactants",
  },
  {
    index: 118,
    question: "What is oxidation?",
    options: [
      "The gain of electrons by a substance",
      "The loss of electrons by a substance",
      "The gain of protons by a substance",
      "The loss of protons by a substance",
    ],
    correct_answer: "The loss of electrons by a substance",
  },
  {
    index: 119,
    question: "What is reduction?",
    options: [
      "The gain of electrons by a substance",
      "The loss of electrons by a substance",
      "The gain of protons by a substance",
      "The loss of protons by a substance",
    ],
    correct_answer: "The gain of electrons by a substance",
  },
  {
    index: 120,
    question: "What is the defining characteristic of a solid?",
    options: [
      "It has a fixed shape and volume",
      "It takes the shape of its container",
      "It has a fixed volume but takes the shape of its container",
      "It has neither fixed shape nor volume",
    ],
    correct_answer: "It has a fixed shape and volume",
  },
  {
    index: 121,
    question: "At what temperature does water freeze?",
    options: ["0°C", "100°C", "25°C", "-273°C"],
    correct_answer: "0°C",
  },
  {
    index: 122,
    question:
      "What happens to the arrangement of particles in a substance when it changes from a liquid to a gas?",
    options: [
      "Particles move farther apart",
      "Particles move closer together",
      "Particles vibrate in fixed positions",
      "Particles lose energy",
    ],
    correct_answer: "Particles move farther apart",
  },
  {
    index: 123,
    question:
      "What is the process called when a gas changes directly into a solid?",
    options: ["Deposition", "Condensation", "Sublimation", "Evaporation"],
    correct_answer: "Deposition",
  },
  {
    index: 124,
    question:
      "What is the process called when a solid changes directly into a gas?",
    options: ["Sublimation", "Deposition", "Condensation", "Evaporation"],
    correct_answer: "Sublimation",
  },
  {
    index: 125,
    question:
      "What is the term for the process of a liquid turning into a gas at the surface?",
    options: ["Evaporation", "Condensation", "Vaporization", "Boiling"],
    correct_answer: "Evaporation",
  },
  {
    index: 126,
    question:
      "What happens to the temperature of a substance during a phase change?",
    options: [
      "It remains constant",
      "It increases continuously",
      "It decreases continuously",
      "It fluctuates randomly",
    ],
    correct_answer: "It remains constant",
  },
  {
    index: 127,
    question:
      "What is the term for the process of a gas turning into a liquid?",
    options: ["Condensation", "Evaporation", "Sublimation", "Vaporization"],
    correct_answer: "Condensation",
  },
  {
    index: 128,
    question:
      "What is the term for the process of a solid turning into a liquid?",
    options: ["Melting", "Freezing", "Vaporization", "Condensation"],
    correct_answer: "Melting",
  },
  {
    index: 129,
    question:
      "What happens to the density of a substance when it changes from a liquid to a gas?",
    options: [
      "It decreases",
      "It increases",
      "It remains the same",
      "It becomes zero",
    ],
    correct_answer: "It decreases",
  },
  {
    index: 130,
    question:
      "What is the term for the process of a liquid turning into a solid?",
    options: ["Freezing", "Melting", "Condensation", "Evaporation"],
    correct_answer: "Freezing",
  },
  {
    index: 131,
    question:
      "What is the process called when a gas changes directly into a liquid?",
    options: ["Condensation", "Evaporation", "Vaporization", "Sublimation"],
    correct_answer: "Condensation",
  },
  {
    index: 132,
    question: "Which of the following is an example of a suspension?",
    options: ["Muddy water", "Saltwater", "Soda", "Tea"],
    correct_answer: "Muddy water",
  },
  {
    index: 133,
    question: "Which of the following is an example of a colloid?",
    options: ["Milk", "Tap water", "Lemonade", "Clear soup"],
    correct_answer: "Milk",
  },
  {
    index: 134,
    question: "What is chromatography used for?",
    options: [
      "Separating components of mixtures based on their properties",
      "Creating chemical compounds",
      "Measuring the density of substances",
      "Determining the pH of solutions",
    ],
    correct_answer:
      "Separating components of mixtures based on their properties",
  },
  {
    index: 135,
    question: "Which of the following is an example of a homogeneous mixture?",
    options: ["Saltwater", "Sand and water", "Milk", "Salad dressing"],
    correct_answer: "Saltwater",
  },
  {
    index: 136,
    question:
      "What is the term for a mixture in which the particles settle out over time?",
    options: ["Suspension", "Colloid", "Solution", "Compound"],
    correct_answer: "Suspension",
  },
  {
    index: 137,
    question: "What is the Tyndall effect?",
    options: [
      "Scattering of light by colloidal particles",
      "Formation of a precipitate",
      "Formation of a gas",
      "Change in temperature during a reaction",
    ],
    correct_answer: "Scattering of light by colloidal particles",
  },
  {
    index: 138,
    question:
      "What is the term for a mixture with particles larger than those in a solution but smaller than those in a suspension?",
    options: ["Colloid", "Suspension", "Compound", "Element"],
    correct_answer: "Colloid",
  },
  {
    index: 139,
    question:
      "What is the difference between a solute and a solvent in a solution?",
    options: [
      "Solute is the substance being dissolved, and solvent is the substance doing the dissolving",
      "Solute is the substance doing the dissolving, and solvent is the substance being dissolved",
      "Solute is a solid, and solvent is a liquid",
      "Solute is a liquid, and solvent is a solid",
    ],
    correct_answer:
      "Solute is the substance being dissolved, and solvent is the substance doing the dissolving",
  },
  {
    index: 140,
    question: "What is the critical point of a substance?",
    options: [
      "The temperature and pressure above which a gas cannot be liquefied",
      "The temperature and pressure at which all three phases of a substance coexist",
      "The temperature and pressure at which a gas becomes a liquid",
      "The temperature and pressure at which a solid becomes a liquid",
    ],
    correct_answer:
      "The temperature and pressure above which a gas cannot be liquefied",
  },
  {
    index: 141,
    question:
      "What is the term for the process of a liquid turning into a gas at a temperature below its boiling point?",
    options: ["Evaporation", "Condensation", "Sublimation", "Vaporization"],
    correct_answer: "Evaporation",
  },
  {
    index: 142,
    question:
      "What is the term for a solid changing directly into a gas without passing through the liquid state?",
    options: ["Sublimation", "Deposition", "Condensation", "Evaporation"],
    correct_answer: "Sublimation",
  },
  {
    index: 143,
    question: "Which of the following has the highest kinetic energy?",
    options: ["Gas", "Liquid", "Solid", "Depends on the substance"],
    correct_answer: "Gas",
  },
  {
    index: 144,
    question:
      "What is the term for the phenomenon when a gas changes directly into a solid without passing through the liquid state?",
    options: ["Deposition", "Sublimation", "Evaporation", "Condensation"],
    correct_answer: "Deposition",
  },
  {
    index: 145,
    question:
      "What is the process called when a solid changes directly into a gas without passing through the liquid state?",
    options: ["Sublimation", "Deposition", "Condensation", "Evaporation"],
    correct_answer: "Sublimation",
  },
  {
    index: 146,
    question:
      "What is the term for the force exerted by a gas on the walls of its container?",
    options: ["Pressure", "Temperature", "Volume", "Density"],
    correct_answer: "Pressure",
  },
  {
    index: 147,
    question: "What is the term for the amount of space occupied by matter?",
    options: ["Volume", "Pressure", "Temperature", "Density"],
    correct_answer: "Volume",
  },
  {
    index: 148,
    question:
      "What is the term for the average kinetic energy of particles in a substance?",
    options: ["Temperature", "Pressure", "Volume", "Density"],
    correct_answer: "Temperature",
  },
  {
    index: 149,
    question:
      "What is the term for the ratio of mass to volume for a substance?",
    options: ["Density", "Pressure", "Temperature", "Volume"],
    correct_answer: "Density",
  },
  {
    index: 150,
    question:
      "What happens to the volume of a gas when pressure is increased, assuming temperature remains constant?",
    options: [
      "It decreases",
      "It remains the same",
      "It increases",
      "It depends on the gas",
    ],
    correct_answer: "It decreases",
  },
  {
    index: 151,
    question: "What is Boyle's Law?",
    options: [
      "The pressure of a gas is inversely proportional to its volume, provided the temperature remains constant",
      "The volume of a gas is directly proportional to its temperature, provided the pressure remains constant",
      "The pressure of a gas is directly proportional to its temperature, provided the volume remains constant",
      "The volume of a gas is inversely proportional to its pressure, provided the temperature remains constant",
    ],
    correct_answer:
      "The volume of a gas is inversely proportional to its pressure, provided the temperature remains constant",
  },
  {
    index: 152,
    question: "What is Charles's Law?",
    options: [
      "The volume of a gas is directly proportional to its temperature, provided the pressure remains constant",
      "The pressure of a gas is inversely proportional to its volume, provided the temperature remains constant",
      "The volume of a gas is inversely proportional to its pressure, provided the temperature remains constant",
      "The pressure of a gas is directly proportional to its temperature, provided the volume remains constant",
    ],
    correct_answer:
      "The volume of a gas is directly proportional to its temperature, provided the pressure remains constant",
  },
  {
    index: 153,
    question: "What is Gay-Lussac's Law?",
    options: [
      "The pressure of a gas is directly proportional to its temperature, provided the volume remains constant",
      "The volume of a gas is inversely proportional to its pressure, provided the temperature remains constant",
      "The volume of a gas is directly proportional to its temperature, provided the pressure remains constant",
      "The pressure of a gas is inversely proportional to its volume, provided the temperature remains constant",
    ],
    correct_answer:
      "The pressure of a gas is directly proportional to its temperature, provided the volume remains constant",
  },
  {
    index: 154,
    question:
      "What is the term for the point at which a substance changes from a liquid to a gas?",
    options: [
      "Boiling point",
      "Freezing point",
      "Melting point",
      "Condensation point",
    ],
    correct_answer: "Boiling point",
  },
  {
    index: 155,
    question:
      "What is the term for the point at which a substance changes from a gas to a liquid?",
    options: [
      "Condensation point",
      "Boiling point",
      "Melting point",
      "Freezing point",
    ],
    correct_answer: "Condensation point",
  },
  {
    index: 156,
    question:
      "What is the term for the point at which a substance changes from a liquid to a solid?",
    options: [
      "Freezing point",
      "Boiling point",
      "Melting point",
      "Condensation point",
    ],
    correct_answer: "Freezing point",
  },
  {
    index: 157,
    question:
      "What is the term for the point at which a substance changes from a solid to a liquid?",
    options: [
      "Melting point",
      "Freezing point",
      "Boiling point",
      "Condensation point",
    ],
    correct_answer: "Melting point",
  },
  {
    index: 158,
    question:
      "What is the term for the process of a solid changing directly into a gas without passing through the liquid state?",
    options: ["Sublimation", "Deposition", "Condensation", "Evaporation"],
    correct_answer: "Sublimation",
  },
  {
    index: 159,
    question:
      "What is the term for the process of a gas changing directly into a solid without passing through the liquid state?",
    options: ["Deposition", "Sublimation", "Evaporation", "Condensation"],
    correct_answer: "Deposition",
  },
  {
    index: 160,
    question:
      "What is the term for the process of a liquid turning into a gas?",
    options: ["Vaporization", "Condensation", "Sublimation", "Evaporation"],
    correct_answer: "Vaporization",
  },
  {
    index: 161,
    question:
      "What is the term for the process of a gas turning into a liquid?",
    options: ["Condensation", "Vaporization", "Sublimation", "Evaporation"],
    correct_answer: "Condensation",
  },
  {
    index: 162,
    question:
      "What is the term for the process of a solid turning into a liquid?",
    options: ["Melting", "Freezing", "Vaporization", "Condensation"],
    correct_answer: "Melting",
  },
  {
    index: 163,
    question:
      "What is the term for the process of a liquid turning into a solid?",
    options: ["Freezing", "Melting", "Vaporization", "Condensation"],
    correct_answer: "Freezing",
  },
  {
    index: 164,
    question:
      "What is the term for the process of a solid changing directly into a gas without passing through the liquid state?",
    options: ["Sublimation", "Deposition", "Condensation", "Evaporation"],
    correct_answer: "Sublimation",
  },
  {
    index: 165,
    question:
      "What is the term for the process of a gas changing directly into a solid without passing through the liquid state?",
    options: ["Deposition", "Sublimation", "Condensation", "Evaporation"],
    correct_answer: "Deposition",
  },
  {
    index: 166,
    question:
      "What is the term for the process of a liquid turning into a gas at a temperature below its boiling point?",
    options: ["Evaporation", "Condensation", "Vaporization", "Sublimation"],
    correct_answer: "Evaporation",
  },
  {
    index: 167,
    question:
      "What is the term for a solid changing directly into a gas without passing through the liquid state?",
    options: ["Sublimation", "Deposition", "Condensation", "Evaporation"],
    correct_answer: "Sublimation",
  },
  {
    index: 168,
    question:
      "What is the term for the process of a liquid turning into a gas?",
    options: ["Evaporation", "Condensation", "Vaporization", "Sublimation"],
    correct_answer: "Evaporation",
  },
  {
    index: 169,
    question:
      "What is the term for the process of a gas turning into a liquid?",
    options: ["Condensation", "Vaporization", "Sublimation", "Evaporation"],
    correct_answer: "Condensation",
  },
  {
    index: 170,
    question:
      "What type of reaction involves the combination of two or more substances to form a new compound?",
    options: [
      "Synthesis",
      "Decomposition",
      "Single displacement",
      "Double displacement",
    ],
    correct_answer: "Synthesis",
  },
  {
    index: 171,
    question: "In a double displacement reaction, what occurs?",
    options: [
      "Exchange of ions between two compounds",
      "Formation of a new compound from a single reactant",
      "Breakdown of a compound into simpler substances",
      "Transfer of electrons between reactants",
    ],
    correct_answer: "Exchange of ions between two compounds",
  },
  {
    index: 172,
    question:
      "What type of reaction involves a single element displacing another element from a compound?",
    options: [
      "Single displacement",
      "Double displacement",
      "Synthesis",
      "Decomposition",
    ],
    correct_answer: "Single displacement",
  },
  {
    index: 173,
    question:
      "When a compound breaks down into simpler substances, what type of reaction is occurring?",
    options: [
      "Decomposition",
      "Synthesis",
      "Single displacement",
      "Double displacement",
    ],
    correct_answer: "Decomposition",
  },
  {
    index: 174,
    question: "In a redox reaction, what is happening?",
    options: [
      "Transfer of electrons between reactants",
      "Formation of a new compound from two reactants",
      "Exchange of ions between two compounds",
      "Breakdown of a compound into simpler substances",
    ],
    correct_answer: "Transfer of electrons between reactants",
  },
  {
    index: 175,
    question:
      "What happens to the oxidation state of an element during oxidation?",
    options: [
      "It increases",
      "It decreases",
      "It remains the same",
      "It becomes zero",
    ],
    correct_answer: "It increases",
  },
  {
    index: 176,
    question: "In a neutralization reaction, what is produced?",
    options: [
      "Water and a salt",
      "Carbon dioxide and water",
      "Hydrogen gas and oxygen gas",
      "Carbon dioxide and a salt",
    ],
    correct_answer: "Water and a salt",
  },
  {
    index: 177,
    question: "What are acids known for?",
    options: [
      "They donate protons",
      "They accept protons",
      "They have a pH above 7",
      "They have a bitter taste",
    ],
    correct_answer: "They donate protons",
  },
  {
    index: 178,
    question: "What are bases known for?",
    options: [
      "They accept protons",
      "They donate protons",
      "They have a pH below 7",
      "They have a sour taste",
    ],
    correct_answer: "They accept protons",
  },
  {
    index: 179,
    question: "What is the pH range of acidic solutions?",
    options: ["0 to 6", "7 to 14", "0 to 14", "6 to 14"],
    correct_answer: "0 to 6",
  },
  {
    index: 180,
    question: "What is the pH range of basic solutions?",
    options: ["8 to 14", "0 to 7", "7 to 14", "0 to 14"],
    correct_answer: "8 to 14",
  },
  {
    index: 181,
    question:
      "Which substance is commonly used as an indicator for acidity or alkalinity?",
    options: ["Litmus", "Salt", "Sugar", "Oxygen"],
    correct_answer: "Litmus",
  },
  {
    index: 182,
    question: "What is the color of litmus paper in an acidic solution?",
    options: ["Red", "Blue", "Purple", "Green"],
    correct_answer: "Red",
  },
  {
    index: 183,
    question: "What is the color of litmus paper in a basic solution?",
    options: ["Blue", "Red", "Purple", "Green"],
    correct_answer: "Blue",
  },
  {
    index: 184,
    question:
      "What factor affects the rate of a chemical reaction by increasing the frequency of collisions between particles?",
    options: ["Concentration", "Temperature", "Pressure", "Catalyst"],
    correct_answer: "Concentration",
  },
  {
    index: 185,
    question:
      "How does an increase in temperature affect the rate of a chemical reaction?",
    options: [
      "It increases the rate",
      "It decreases the rate",
      "It has no effect",
      "It depends on the reaction",
    ],
    correct_answer: "It increases the rate",
  },
  {
    index: 186,
    question: "What does a catalyst do in a chemical reaction?",
    options: [
      "Speeds up the reaction without being consumed",
      "Slows down the reaction without being consumed",
      "Consumes the reactants",
      "Produces more products",
    ],
    correct_answer: "Speeds up the reaction without being consumed",
  },
  {
    index: 187,
    question: "In a synthesis reaction, what is produced?",
    options: [
      "A single compound from two or more reactants",
      "Two or more compounds from a single reactant",
      "A compound breaking down into simpler substances",
      "A single element displacing another element from a compound",
    ],
    correct_answer: "A single compound from two or more reactants",
  },
  {
    index: 188,
    question:
      "Which of the following is an example of a single displacement reaction?",
    options: [
      "Zinc reacting with hydrochloric acid to produce zinc chloride and hydrogen gas",
      "Burning of magnesium ribbon to produce magnesium oxide",
      "Decomposition of hydrogen peroxide into water and oxygen gas",
      "Combination of iron and sulfur to form iron(II) sulfide",
    ],
    correct_answer:
      "Zinc reacting with hydrochloric acid to produce zinc chloride and hydrogen gas",
  },
  {
    index: 189,
    question:
      "What is the product of the reaction between sodium hydroxide (NaOH) and hydrochloric acid (HCl)?",
    options: [
      "Water and sodium chloride",
      "Water and hydrochloric acid",
      "Sodium hydroxide and chlorine gas",
      "Sodium chloride and hydroxyl group",
    ],
    correct_answer: "Water and sodium chloride",
  },
  {
    index: 190,
    question:
      "In a double displacement reaction, what type of compounds are typically formed as products?",
    options: [
      "Two salts",
      "An acid and a base",
      "A metal and a nonmetal",
      "Two elements",
    ],
    correct_answer: "Two salts",
  },
  {
    index: 191,
    question:
      "What is the product of the decomposition of hydrogen peroxide (H2O2)?",
    options: [
      "Water and oxygen gas",
      "Hydrogen gas and oxygen gas",
      "Water and hydrogen gas",
      "Oxygen gas and nitrogen gas",
    ],
    correct_answer: "Water and oxygen gas",
  },
  {
    index: 192,
    question:
      "What happens to the oxidation state of an element during reduction?",
    options: [
      "It decreases",
      "It increases",
      "It remains the same",
      "It becomes zero",
    ],
    correct_answer: "It decreases",
  },
  {
    index: 193,
    question:
      "What is the product of the reaction between sulfuric acid (H2SO4) and potassium hydroxide (KOH)?",
    options: [
      "Water and potassium sulfate",
      "Water and sulfur dioxide",
      "Potassium sulfate and sulfuric acid",
      "Potassium hydroxide and sulfuric acid",
    ],
    correct_answer: "Water and potassium sulfate",
  },
  {
    index: 194,
    question: "What is the role of acids in a neutralization reaction?",
    options: [
      "Donate protons",
      "Accept protons",
      "Produce hydroxide ions",
      "Produce hydrogen gas",
    ],
    correct_answer: "Donate protons",
  },
  {
    index: 195,
    question:
      "Which substance is commonly used as an indicator for acidity or alkalinity in the form of pH paper?",
    options: [
      "Universal indicator",
      "Bromothymol blue",
      "Phenolphthalein",
      "Methyl orange",
    ],
    correct_answer: "Universal indicator",
  },
  {
    index: 196,
    question: "What is the color of phenolphthalein in a basic solution?",
    options: ["Pink", "Colorless", "Yellow", "Blue"],
    correct_answer: "Pink",
  },
  {
    index: 197,
    question: "What is the color of methyl orange in an acidic solution?",
    options: ["Red", "Yellow", "Blue", "Colorless"],
    correct_answer: "Red",
  },
  {
    index: 198,
    question: "Which factor does not affect the rate of a chemical reaction?",
    options: ["Color of reactants", "Concentration", "Temperature", "Catalyst"],
    correct_answer: "Color of reactants",
  },
  {
    index: 199,
    question:
      "How does a decrease in temperature affect the rate of a chemical reaction?",
    options: [
      "It decreases the rate",
      "It increases the rate",
      "It has no effect",
      "It depends on the reaction",
    ],
    correct_answer: "It decreases the rate",
  },
  {
    index: 200,
    question: "What does a catalyst provide for a chemical reaction to occur?",
    options: [
      "Alternative reaction pathway with lower activation energy",
      "Higher concentration of reactants",
      "More products",
      "More energy",
    ],
    correct_answer: "Alternative reaction pathway with lower activation energy",
  },
  {
    index: 201,
    question:
      "In a double displacement reaction, what happens to the ions in the reactants?",
    options: [
      "Exchange places with ions in the other reactant",
      "Combine to form a new compound",
      "Break apart into simpler substances",
      "React with the solvent",
    ],
    correct_answer: "Exchange places with ions in the other reactant",
  },
  {
    index: 202,
    question:
      "What is the product of the reaction between hydrochloric acid (HCl) and sodium hydroxide (NaOH)?",
    options: [
      "Water and sodium chloride",
      "Hydrogen gas and sodium hydroxide",
      "Water and sodium hydroxide",
      "Hydrochloric acid and sodium chloride",
    ],
    correct_answer: "Water and sodium chloride",
  },
  {
    index: 203,
    question: "What is the oxidation state of an element in its free state?",
    options: ["Zero", "Positive", "Negative", "Variable"],
    correct_answer: "Zero",
  },
  {
    index: 204,
    question:
      "What is the product of the reaction between sulfuric acid (H2SO4) and calcium hydroxide (Ca(OH)2)?",
    options: [
      "Water and calcium sulfate",
      "Water and calcium hydroxide",
      "Calcium sulfate and sulfuric acid",
      "Calcium hydroxide and sulfuric acid",
    ],
    correct_answer: "Water and calcium sulfate",
  },
  {
    index: 205,
    question: "What is the pH of a neutral solution?",
    options: ["7", "0", "14", "Depends on the temperature"],
    correct_answer: "7",
  },
  {
    index: 206,
    question:
      "What is the pH of a solution with a high concentration of hydrogen ions?",
    options: [
      "Low (below 7)",
      "High (above 7)",
      "Neutral (7)",
      "Depends on the temperature",
    ],
    correct_answer: "Low (below 7)",
  },
  {
    index: 207,
    question:
      "Which of the following is not a common indicator for acidity or alkalinity?",
    options: [
      "Bromothymol blue",
      "Phenolphthalein",
      "Methyl orange",
      "Hydrochloric acid",
    ],
    correct_answer: "Hydrochloric acid",
  },
  {
    index: 208,
    question: "What is the role of bases in a neutralization reaction?",
    options: [
      "Accept protons",
      "Donate protons",
      "Produce hydroxide ions",
      "Produce hydrogen gas",
    ],
    correct_answer: "Accept protons",
  },
  {
    index: 209,
    question:
      "What is the product of the reaction between nitric acid (HNO3) and sodium hydroxide (NaOH)?",
    options: [
      "Water and sodium nitrate",
      "Water and sodium hydroxide",
      "Sodium nitrate and nitric acid",
      "Nitric acid and sodium hydroxide",
    ],
    correct_answer: "Water and sodium nitrate",
  },
  {
    index: 210,
    question: "What is the color of bromothymol blue in a basic solution?",
    options: ["Blue", "Yellow", "Green", "Colorless"],
    correct_answer: "Blue",
  },
  {
    index: 211,
    question:
      "What is the color of universal indicator in a slightly acidic solution?",
    options: ["Orange", "Green", "Blue", "Red"],
    correct_answer: "Orange",
  },
  {
    index: 212,
    question: "What is the role of water in a neutralization reaction?",
    options: [
      "It forms as a product",
      "It acts as a catalyst",
      "It provides energy",
      "It prevents the reaction from occurring",
    ],
    correct_answer: "It forms as a product",
  },
  {
    index: 213,
    question: "Which factor has the greatest influence on reaction rate?",
    options: ["Temperature", "Concentration", "Catalyst", "Surface area"],
    correct_answer: "Temperature",
  },
  {
    index: 214,
    question:
      "What is the product of the reaction between hydrochloric acid (HCl) and potassium hydroxide (KOH)?",
    options: [
      "Water and potassium chloride",
      "Water and hydrochloric acid",
      "Potassium hydroxide and hydrochloric acid",
      "Potassium chloride and hydroxyl group",
    ],
    correct_answer: "Water and potassium chloride",
  },
  {
    index: 215,
    question:
      "In a single displacement reaction, what happens to the cation of the reacting compound?",
    options: [
      "It remains unchanged",
      "It is displaced by another cation",
      "It forms a new compound",
      "It combines with the anion of the other reactant",
    ],
    correct_answer: "It is displaced by another cation",
  },
  {
    index: 216,
    question:
      "What is the product of the reaction between hydrochloric acid (HCl) and magnesium hydroxide [Mg(OH)2]?",
    options: [
      "Water and magnesium chloride",
      "Water and hydrochloric acid",
      "Magnesium hydroxide and hydrochloric acid",
      "Magnesium chloride and hydroxyl group",
    ],
    correct_answer: "Water and magnesium chloride",
  },
  {
    index: 217,
    question: "What is the role of oxygen in a redox reaction?",
    options: [
      "It acts as a catalyst",
      "It accepts electrons",
      "It donates electrons",
      "It remains unchanged",
    ],
    correct_answer: "It accepts electrons",
  },
  {
    index: 218,
    question:
      "What is the product of the reaction between hydrochloric acid (HCl) and calcium carbonate (CaCO3)?",
    options: [
      "Carbon dioxide, water, and calcium chloride",
      "Carbon dioxide, water, and calcium hydroxide",
      "Calcium carbonate and hydrochloric acid",
      "Calcium chloride and hydroxyl group",
    ],
    correct_answer: "Carbon dioxide, water, and calcium chloride",
  },
  {
    index: 219,
    question:
      "What is the product of the reaction between sulfuric acid (H2SO4) and sodium carbonate (Na2CO3)?",
    options: [
      "Water, carbon dioxide, and sodium sulfate",
      "Water, carbon dioxide, and sodium hydroxide",
      "Sodium sulfate and sulfuric acid",
      "Sodium carbonate and sulfuric acid",
    ],
    correct_answer: "Water, carbon dioxide, and sodium sulfate",
  },
  {
    index: 220,
    question:
      "How many moles of hydrogen atoms are there in 5 moles of water (H2O)?",
    options: ["10 moles", "5 moles", "15 moles", "20 moles"],
    correct_answer: "10 moles",
  },
  {
    index: 221,
    question: "What is the mass of 3 moles of methane (CH4)?",
    options: ["36.03 grams", "48.04 grams", "27.03 grams", "18.02 grams"],
    correct_answer: "36.03 grams",
  },
  {
    index: 222,
    question:
      "In the reaction 2H2 + O2 -> 2H2O, if 6 moles of hydrogen gas (H2) react, how many moles of water (H2O) are produced?",
    options: ["12 moles", "6 moles", "18 moles", "24 moles"],
    correct_answer: "12 moles",
  },
  {
    index: 223,
    question:
      "What is the stoichiometric coefficient of water (H2O) in the balanced equation 4H2 + 2O2 -> 4H2O?",
    options: ["2", "4", "1", "8"],
    correct_answer: "4",
  },
  {
    index: 224,
    question:
      "What is the product of the reaction between 3 moles of hydrogen gas (H2) and 1 mole of oxygen gas (O2)?",
    options: [
      "3 moles of water (H2O)",
      "1 mole of water (H2O)",
      "6 moles of water (H2O)",
      "9 moles of water (H2O)",
    ],
    correct_answer: "3 moles of water (H2O)",
  },
  {
    index: 225,
    question:
      "What is the limiting reactant in the reaction if 2 moles of hydrogen gas (H2) react with 3 moles of oxygen gas (O2)?",
    options: [
      "Hydrogen gas (H2)",
      "Oxygen gas (O2)",
      "Water (H2O)",
      "Both reactants are limiting",
    ],
    correct_answer: "Oxygen gas (O2)",
  },
  {
    index: 226,
    question:
      "What is the percent yield of a reaction if the actual yield is 60 grams and the theoretical yield is 80 grams?",
    options: ["75%", "50%", "125%", "60%"],
    correct_answer: "75%",
  },
  {
    index: 227,
    question: "What is the definition of percent yield in a chemical reaction?",
    options: [
      "The ratio of actual yield to theoretical yield, expressed as a percentage",
      "The ratio of theoretical yield to actual yield, expressed as a percentage",
      "The ratio of moles of product to moles of reactant, expressed as a percentage",
      "The ratio of grams of product to grams of reactant, expressed as a percentage",
    ],
    correct_answer:
      "The ratio of actual yield to theoretical yield, expressed as a percentage",
  },
  {
    index: 228,
    question:
      "What is the empirical formula of a compound with 25% carbon, 5% hydrogen, and 70% oxygen by mass?",
    options: ["CH2O", "C2H5O", "CH3O", "C3H6O2"],
    correct_answer: "CH3O",
  },
  {
    index: 229,
    question:
      "What is the molecular formula of a compound with an empirical formula of CH2O and a molar mass of approximately 180 g/mol?",
    options: ["C3H6O3", "C2H4O2", "C6H12O6", "C4H8O4"],
    correct_answer: "C6H12O6",
  },
  {
    index: 230,
    question:
      "How many moles of oxygen atoms are there in 6 moles of water (H2O)?",
    options: ["12 moles", "6 moles", "24 moles", "18 moles"],
    correct_answer: "12 moles",
  },
  {
    index: 231,
    question: "What is the mass of 4 moles of carbon dioxide (CO2)?",
    options: ["88.02 grams", "44.01 grams", "22.01 grams", "176.04 grams"],
    correct_answer: "176.04 grams",
  },
  {
    index: 232,
    question:
      "In the balanced chemical equation 2H2 + O2 -> 2H2O, how many moles of oxygen are required to react with 4 moles of hydrogen?",
    options: ["2 moles", "4 moles", "8 moles", "16 moles"],
    correct_answer: "2 moles",
  },
  {
    index: 233,
    question:
      "What is the stoichiometric coefficient of hydrogen gas (H2) in the balanced equation 3H2 + N2 -> 2NH3?",
    options: ["3", "2", "0", "1"],
    correct_answer: "3",
  },
  {
    index: 234,
    question:
      "What is the product of the reaction between 4 moles of hydrogen gas (H2) and 3 moles of nitrogen gas (N2)?",
    options: [
      "6 moles of ammonia (NH3)",
      "4 moles of ammonia (NH3)",
      "3 moles of ammonia (NH3)",
      "12 moles of ammonia (NH3)",
    ],
    correct_answer: "6 moles of ammonia (NH3)",
  },
  {
    index: 235,
    question:
      "What is the limiting reactant in the reaction if 5 moles of hydrogen gas (H2) react with 3 moles of nitrogen gas (N2)?",
    options: [
      "Hydrogen gas (H2)",
      "Nitrogen gas (N2)",
      "Ammonia (NH3)",
      "Both reactants are limiting",
    ],
    correct_answer: "Nitrogen gas (N2)",
  },
  {
    index: 236,
    question:
      "What is the percent yield of a reaction if the actual yield is 25 grams and the theoretical yield is 30 grams?",
    options: ["83.33%", "75%", "125%", "30%"],
    correct_answer: "83.33%",
  },
  {
    index: 237,
    question:
      "What is the empirical formula of a compound with 40% carbon, 6.7% hydrogen, and 53.3% oxygen by mass?",
    options: ["CH2O", "C2H4O2", "CH3O", "C3H6O3"],
    correct_answer: "CH2O",
  },
  {
    index: 238,
    question:
      "What is the molecular formula of a compound with an empirical formula of CH2O and a molar mass of approximately 180 g/mol?",
    options: ["C6H12O6", "C3H6O3", "C4H8O4", "C2H4O2"],
    correct_answer: "C6H12O6",
  },
  {
    index: 239,
    question:
      "How many moles of oxygen atoms are there in 2 moles of water (H2O)?",
    options: ["4 moles", "2 moles", "1 mole", "0.5 moles"],
    correct_answer: "4 moles",
  },
  {
    index: 240,
    question: "What is the mass of 2 moles of carbon dioxide (CO2)?",
    options: ["88.02 grams", "44.01 grams", "22.01 grams", "66.02 grams"],
    correct_answer: "88.02 grams",
  },
  {
    index: 241,
    question:
      "In the balanced chemical equation 2H2 + O2 -> 2H2O, how many moles of water are produced from 2 moles of oxygen?",
    options: ["4 moles", "2 moles", "1 mole", "0.5 moles"],
    correct_answer: "4 moles",
  },
  {
    index: 242,
    question:
      "What is the stoichiometric coefficient of hydrogen gas (H2) in the balanced equation 2H2 + O2 -> 2H2O?",
    options: ["2", "1", "0", "4"],
    correct_answer: "2",
  },
  {
    index: 243,
    question:
      "What is the product of the reaction between 2 moles of hydrogen gas (H2) and 1 mole of oxygen gas (O2)?",
    options: [
      "2 moles of water (H2O)",
      "1 mole of water (H2O)",
      "4 moles of water (H2O)",
      "3 moles of water (H2O)",
    ],
    correct_answer: "2 moles of water (H2O)",
  },
  {
    index: 244,
    question:
      "What is the limiting reactant in the reaction if 3 moles of hydrogen gas (H2) react with 2 moles of oxygen gas (O2)?",
    options: [
      "Hydrogen gas (H2)",
      "Oxygen gas (O2)",
      "Water (H2O)",
      "Both reactants are limiting",
    ],
    correct_answer: "Hydrogen gas (H2)",
  },
  {
    index: 245,
    question:
      "What is the percent yield of a reaction if the actual yield is 40 grams and the theoretical yield is 50 grams?",
    options: ["80%", "60%", "125%", "40%"],
    correct_answer: "80%",
  },
  {
    index: 246,
    question: "What is the definition of percent yield in a chemical reaction?",
    options: [
      "The ratio of actual yield to theoretical yield, expressed as a percentage",
      "The ratio of theoretical yield to actual yield, expressed as a percentage",
      "The ratio of moles of product to moles of reactant, expressed as a percentage",
      "The ratio of grams of product to grams of reactant, expressed as a percentage",
    ],
    correct_answer:
      "The ratio of actual yield to theoretical yield, expressed as a percentage",
  },
  {
    index: 247,
    question:
      "What is the empirical formula of a compound with 40% carbon, 6.7% hydrogen, and 53.3% oxygen by mass?",
    options: ["CH2O", "C2H4O2", "CH3O", "C3H6O3"],
    correct_answer: "CH2O",
  },
  {
    index: 248,
    question:
      "What is the molecular formula of a compound with an empirical formula of CH2O and a molar mass of approximately 180 g/mol?",
    options: ["C6H12O6", "C3H6O3", "C4H8O4", "C2H4O2"],
    correct_answer: "C6H12O6",
  },
  {
    index: 249,
    question:
      "How many moles of oxygen atoms are there in 2 moles of water (H2O)?",
    options: ["4 moles", "2 moles", "1 mole", "0.5 moles"],
    correct_answer: "4 moles",
  },
  {
    index: 250,
    question: "What is the mass of 2 moles of carbon dioxide (CO2)?",
    options: ["88.02 grams", "44.01 grams", "22.01 grams", "66.02 grams"],
    correct_answer: "88.02 grams",
  },
  {
    index: 251,
    question:
      "In the balanced chemical equation 2H2 + O2 -> 2H2O, how many moles of water are produced from 2 moles of oxygen?",
    options: ["4 moles", "2 moles", "1 mole", "0.5 moles"],
    correct_answer: "4 moles",
  },
  {
    index: 252,
    question:
      "What is the stoichiometric coefficient of hydrogen gas (H2) in the balanced equation 2H2 + O2 -> 2H2O?",
    options: ["2", "1", "0", "4"],
    correct_answer: "2",
  },
  {
    index: 253,
    question:
      "What is the product of the reaction between 2 moles of hydrogen gas (H2) and 1 mole of oxygen gas (O2)?",
    options: [
      "2 moles of water (H2O)",
      "1 mole of water (H2O)",
      "4 moles of water (H2O)",
      "3 moles of water (H2O)",
    ],
    correct_answer: "2 moles of water (H2O)",
  },
  {
    index: 254,
    question:
      "What is the limiting reactant in the reaction if 3 moles of hydrogen gas (H2) react with 2 moles of oxygen gas (O2)?",
    options: [
      "Hydrogen gas (H2)",
      "Oxygen gas (O2)",
      "Water (H2O)",
      "Both reactants are limiting",
    ],
    correct_answer: "Hydrogen gas (H2)",
  },
  {
    index: 255,
    question:
      "What is the percent yield of a reaction if the actual yield is 40 grams and the theoretical yield is 50 grams?",
    options: ["80%", "60%", "125%", "40%"],
    correct_answer: "80%",
  },
  {
    index: 256,
    question: "What is the definition of percent yield in a chemical reaction?",
    options: [
      "The ratio of actual yield to theoretical yield, expressed as a percentage",
      "The ratio of theoretical yield to actual yield, expressed as a percentage",
      "The ratio of moles of product to moles of reactant, expressed as a percentage",
      "The ratio of grams of product to grams of reactant, expressed as a percentage",
    ],
    correct_answer:
      "The ratio of actual yield to theoretical yield, expressed as a percentage",
  },
  {
    index: 257,
    question: "What is the definition of a mole in chemistry?",
    options: [
      "The amount of a substance that contains Avogadro's number of particles",
      "The mass of an atom in atomic mass units",
      "The volume of a gas at standard temperature and pressure",
      "The number of atoms in a molecule",
    ],
    correct_answer:
      "The amount of a substance that contains Avogadro's number of particles",
  },
  {
    index: 258,
    question: "How many atoms are present in one mole of carbon (C)?",
    options: ["6.02 × 10^23 atoms", "12 atoms", "1 atom", "24 atoms"],
    correct_answer: "6.02 × 10^23 atoms",
  },
  {
    index: 259,
    question: "What is the molar mass of water (H2O)?",
    options: ["18.02 g/mol", "20.01 g/mol", "16.00 g/mol", "22.99 g/mol"],
    correct_answer: "18.02 g/mol",
  },
  {
    index: 260,
    question:
      "In the reaction 2H2 + O2 → 2H2O, what is the stoichiometric coefficient for oxygen (O2)?",
    options: ["1", "2", "0", "3"],
    correct_answer: "1",
  },
  {
    index: 261,
    question:
      "What is the balanced chemical equation for the reaction between hydrogen gas (H2) and oxygen gas (O2) to form water (H2O)?",
    options: [
      "2H2 + O2 → 2H2O",
      "H2 + O2 → H2O",
      "H2O → H2 + O2",
      "H2O → H2 + O",
    ],
    correct_answer: "2H2 + O2 → 2H2O",
  },
  {
    index: 262,
    question: "What is the mass of one mole of oxygen gas (O2)?",
    options: ["32.00 g", "16.00 g", "2.00 g", "8.00 g"],
    correct_answer: "32.00 g",
  },
  {
    index: 263,
    question:
      "In the reaction 4NH3 + 5O2 → 4NO + 6H2O, what is the limiting reactant if 20 moles of NH3 and 25 moles of O2 are available?",
    options: ["NH3", "O2", "NO", "H2O"],
    correct_answer: "NH3",
  },
  {
    index: 264,
    question:
      "What is the definition of a limiting reactant in a chemical reaction?",
    options: [
      "The reactant that is consumed first and determines the amount of product formed",
      "The reactant with the highest molar mass",
      "The reactant with the lowest molar mass",
      "The reactant present in the largest quantity",
    ],
    correct_answer:
      "The reactant that is consumed first and determines the amount of product formed",
  },
  {
    index: 265,
    question:
      "What is the percent yield of a reaction if the actual yield is 85.0 g and the theoretical yield is 100.0 g?",
    options: ["85.0%", "15.0%", "170.0%", "100.0%"],
    correct_answer: "85.0%",
  },
  {
    index: 266,
    question:
      "What is the purpose of calculating percent yield in a chemical reaction?",
    options: [
      "To determine the efficiency of the reaction",
      "To balance the chemical equation",
      "To calculate the molar mass of the product",
      "To determine the number of moles produced",
    ],
    correct_answer: "To determine the efficiency of the reaction",
  },
  {
    index: 267,
    question:
      "What is the empirical formula of a compound if its molecular formula is C6H12O6?",
    options: ["CH2O", "C2H4O2", "C6H12O6", "C12H24O12"],
    correct_answer: "CH2O",
  },
  {
    index: 268,
    question:
      "What is the molecular formula of a compound if its empirical formula is CH2O and its molar mass is 180 g/mol?",
    options: ["C6H12O6", "C3H6O3", "C2H4O2", "C12H24O12"],
    correct_answer: "C6H12O6",
  },
  {
    index: 269,
    question:
      "How many moles of oxygen atoms are there in 3 moles of carbon dioxide (CO2)?",
    options: ["6 moles", "3 moles", "1 mole", "0.5 moles"],
    correct_answer: "6 moles",
  },
  {
    index: 270,
    question: "What is the mass of 3 moles of water (H2O)?",
    options: ["99.03 grams", "33.01 grams", "18.02 grams", "54.06 grams"],
    correct_answer: "54.06 grams",
  },
  {
    index: 271,
    question:
      "In the balanced chemical equation 2H2 + O2 -> 2H2O, how many moles of water are produced from 3 moles of oxygen?",
    options: ["6 moles", "3 moles", "1.5 moles", "0.5 moles"],
    correct_answer: "6 moles",
  },
  {
    index: 272,
    question:
      "What is the stoichiometric coefficient of oxygen gas (O2) in the balanced equation 2H2 + O2 -> 2H2O?",
    options: ["1", "2", "0", "4"],
    correct_answer: "1",
  },
  {
    index: 273,
    question:
      "What is the product of the reaction between 3 moles of hydrogen gas (H2) and 2 moles of oxygen gas (O2)?",
    options: [
      "3 moles of water (H2O)",
      "2 moles of water (H2O)",
      "6 moles of water (H2O)",
      "9 moles of water (H2O)",
    ],
    correct_answer: "6 moles of water (H2O)",
  },
  {
    index: 274,
    question:
      "What is the limiting reactant in the reaction if 4 moles of hydrogen gas (H2) react with 3 moles of oxygen gas (O2)?",
    options: [
      "Hydrogen gas (H2)",
      "Oxygen gas (O2)",
      "Water (H2O)",
      "Both reactants are limiting",
    ],
    correct_answer: "Oxygen gas (O2)",
  },
  {
    index: 275,
    question:
      "What is the percent yield of a reaction if the actual yield is 45 grams and the theoretical yield is 60 grams?",
    options: ["75%", "60%", "112.5%", "45%"],
    correct_answer: "75%",
  },
  {
    index: 276,
    question: "What is the definition of percent yield in a chemical reaction?",
    options: [
      "The ratio of actual yield to theoretical yield, expressed as a percentage",
      "The ratio of theoretical yield to actual yield, expressed as a percentage",
      "The ratio of moles of product to moles of reactant, expressed as a percentage",
      "The ratio of grams of product to grams of reactant, expressed as a percentage",
    ],
    correct_answer:
      "The ratio of actual yield to theoretical yield, expressed as a percentage",
  },
  {
    index: 277,
    question:
      "What is the empirical formula of a compound with 50% carbon, 11.1% hydrogen, and 38.9% oxygen by mass?",
    options: ["C2H5O", "CH3O2", "C3H7O", "C5H11O3"],
    correct_answer: "C2H5O",
  },
  {
    index: 278,
    question:
      "What is the molecular formula of a compound with an empirical formula of C2H5O and a molar mass of approximately 90 g/mol?",
    options: ["C4H10O2", "C6H12O3", "C3H7O2", "C8H18O4"],
    correct_answer: "C4H10O2",
  },
  {
    index: 279,
    question:
      "How many moles of oxygen atoms are there in 4 moles of carbon dioxide (CO2)?",
    options: ["8 moles", "4 moles", "2 moles", "1 mole"],
    correct_answer: "8 moles",
  },
  {
    index: 280,
    question: "What is the mass of 4 moles of water (H2O)?",
    options: ["132.08 grams", "66.04 grams", "36.04 grams", "108.12 grams"],
    correct_answer: "108.12 grams",
  },
  {
    index: 281,
    question:
      "In the balanced chemical equation 2H2 + O2 -> 2H2O, how many moles of water are produced from 4 moles of oxygen?",
    options: ["8 moles", "4 moles", "2 moles", "1 mole"],
    correct_answer: "8 moles",
  },
  {
    index: 282,
    question:
      "What is the stoichiometric coefficient of hydrogen gas (H2) in the balanced equation 2H2 + O2 -> 2H2O?",
    options: ["4", "1", "0", "2"],
    correct_answer: "2",
  },
  {
    index: 283,
    question:
      "What is the product of the reaction between 4 moles of hydrogen gas (H2) and 3 moles of oxygen gas (O2)?",
    options: [
      "4 moles of water (H2O)",
      "3 moles of water (H2O)",
      "6 moles of water (H2O)",
      "9 moles of water (H2O)",
    ],
    correct_answer: "6 moles of water (H2O)",
  },
  {
    index: 284,
    question:
      "What is the limiting reactant in the reaction if 5 moles of hydrogen gas (H2) react with 4 moles of oxygen gas (O2)?",
    options: [
      "Hydrogen gas (H2)",
      "Oxygen gas (O2)",
      "Water (H2O)",
      "Both reactants are limiting",
    ],
    correct_answer: "Hydrogen gas (H2)",
  },
  {
    index: 285,
    question:
      "What is the percent yield of a reaction if the actual yield is 50 grams and the theoretical yield is 70 grams?",
    options: ["71.43%", "50%", "85.7%", "42.86%"],
    correct_answer: "71.43%",
  },
  {
    index: 286,
    question:
      "What is the empirical formula of a compound with 60% carbon, 10% hydrogen, and 30% oxygen by mass?",
    options: ["C3H5O", "CH2O", "C2H3O", "C6H10O3"],
    correct_answer: "CH2O",
  },
  {
    index: 287,
    question:
      "What is the molecular formula of a compound with an empirical formula of CH2O and a molar mass of approximately 90 g/mol?",
    options: ["C4H8O4", "C3H6O3", "C5H10O5", "C6H12O6"],
    correct_answer: "C6H12O6",
  },
  {
    index: 288,
    question:
      "How many moles of oxygen atoms are there in 5 moles of carbon dioxide (CO2)?",
    options: ["10 moles", "5 moles", "2.5 moles", "1 mole"],
    correct_answer: "10 moles",
  },
  {
    index: 289,
    question: "What type of reaction absorbs heat from its surroundings?",
    options: ["Endothermic", "Exothermic", "Isothermic", "Adiabatic"],
    correct_answer: "Endothermic",
  },
  {
    index: 290,
    question:
      "In which type of reaction does the temperature of the surroundings increase?",
    options: ["Exothermic", "Endothermic", "Isothermic", "Adiabatic"],
    correct_answer: "Exothermic",
  },
  {
    index: 291,
    question:
      "What is the energy change in a chemical reaction that occurs at constant pressure?",
    options: [
      "Enthalpy change",
      "Entropy change",
      "Gibbs free energy change",
      "Internal energy change",
    ],
    correct_answer: "Enthalpy change",
  },
  {
    index: 292,
    question:
      "What type of change involves the rearrangement of atoms or molecules but does not change their internal structures?",
    options: [
      "Physical change",
      "Chemical change",
      "Phase change",
      "Thermal change",
    ],
    correct_answer: "Physical change",
  },
  {
    index: 293,
    question: "Which of the following is an example of a chemical change?",
    options: [
      "Burning wood",
      "Melting ice",
      "Dissolving salt in water",
      "Boiling water",
    ],
    correct_answer: "Burning wood",
  },
  {
    index: 294,
    question:
      "What is the process of measuring heat changes in chemical reactions?",
    options: [
      "Calorimetry",
      "Thermometry",
      "Thermodynamics",
      "Thermobarometry",
    ],
    correct_answer: "Calorimetry",
  },
  {
    index: 295,
    question:
      "What is the enthalpy change for a reaction when it is written in reverse?",
    options: [
      "Negative of the forward reaction",
      "Equal to the forward reaction",
      "Zero",
      "Positive of the forward reaction",
    ],
    correct_answer: "Negative of the forward reaction",
  },
  {
    index: 296,
    question:
      "What principle states that the total enthalpy change for a reaction is independent of the pathway taken?",
    options: [
      "Hess's Law",
      "Le Chatelier's Principle",
      "Boyle's Law",
      "Charles's Law",
    ],
    correct_answer: "Hess's Law",
  },
  {
    index: 297,
    question:
      "What is the minimum amount of energy required to start a chemical reaction?",
    options: [
      "Activation energy",
      "Gibbs free energy",
      "Enthalpy change",
      "Entropy",
    ],
    correct_answer: "Activation energy",
  },
  {
    index: 298,
    question:
      "Which of the following factors affects the rate of a chemical reaction?",
    options: [
      "Temperature",
      "Concentration of reactants",
      "Presence of catalysts",
      "All of the above",
    ],
    correct_answer: "All of the above",
  },
  {
    index: 299,
    question:
      "What is the term for a reaction that absorbs heat from its surroundings?",
    options: ["Endothermic", "Exothermic", "Isothermic", "Adiabatic"],
    correct_answer: "Endothermic",
  },
  {
    index: 300,
    question:
      "In which type of reaction does the temperature of the surroundings decrease?",
    options: ["Endothermic", "Exothermic", "Isothermic", "Adiabatic"],
    correct_answer: "Endothermic",
  },
  {
    index: 301,
    question:
      "What is the energy change in a chemical reaction that occurs at constant volume?",
    options: [
      "Internal energy change",
      "Enthalpy change",
      "Entropy change",
      "Gibbs free energy change",
    ],
    correct_answer: "Internal energy change",
  },
  {
    index: 302,
    question:
      "What type of change alters the composition or chemical properties of a substance?",
    options: [
      "Chemical change",
      "Physical change",
      "Phase change",
      "Thermal change",
    ],
    correct_answer: "Chemical change",
  },
  {
    index: 303,
    question: "Which of the following is an example of a physical change?",
    options: [
      "Melting ice",
      "Burning wood",
      "Dissolving salt in water",
      "Boiling water",
    ],
    correct_answer: "Melting ice",
  },
  {
    index: 304,
    question: "What is the process of measuring heat changes in reactions?",
    options: [
      "Calorimetry",
      "Thermometry",
      "Thermodynamics",
      "Thermobarometry",
    ],
    correct_answer: "Calorimetry",
  },
  {
    index: 305,
    question:
      "What is the enthalpy change for a reaction when it is written in reverse?",
    options: [
      "Negative of the forward reaction",
      "Equal to the forward reaction",
      "Zero",
      "Positive of the forward reaction",
    ],
    correct_answer: "Negative of the forward reaction",
  },
  {
    index: 306,
    question:
      "What principle states that the total enthalpy change for a reaction is independent of the pathway taken?",
    options: [
      "Hess's Law",
      "Le Chatelier's Principle",
      "Boyle's Law",
      "Charles's Law",
    ],
    correct_answer: "Hess's Law",
  },
  {
    index: 307,
    question:
      "What is the minimum amount of energy required to start a chemical reaction?",
    options: [
      "Activation energy",
      "Gibbs free energy",
      "Enthalpy change",
      "Entropy",
    ],
    correct_answer: "Activation energy",
  },
  {
    index: 308,
    question:
      "Which of the following factors affects the rate of a chemical reaction?",
    options: [
      "Temperature",
      "Concentration of reactants",
      "Presence of catalysts",
      "All of the above",
    ],
    correct_answer: "All of the above",
  },
  {
    index: 309,
    question:
      "What is the term for a reaction that absorbs heat from its surroundings?",
    options: ["Endothermic", "Exothermic", "Isothermic", "Adiabatic"],
    correct_answer: "Endothermic",
  },
  {
    index: 310,
    question:
      "In which type of reaction does the temperature of the surroundings decrease?",
    options: ["Endothermic", "Exothermic", "Isothermic", "Adiabatic"],
    correct_answer: "Endothermic",
  },
  {
    index: 311,
    question:
      "What is the energy change in a chemical reaction that occurs at constant volume?",
    options: [
      "Internal energy change",
      "Enthalpy change",
      "Entropy change",
      "Gibbs free energy change",
    ],
    correct_answer: "Internal energy change",
  },
  {
    index: 312,
    question:
      "What type of change alters the composition or chemical properties of a substance?",
    options: [
      "Chemical change",
      "Physical change",
      "Phase change",
      "Thermal change",
    ],
    correct_answer: "Chemical change",
  },
  {
    index: 313,
    question: "Which of the following is an example of a physical change?",
    options: [
      "Melting ice",
      "Burning wood",
      "Dissolving salt in water",
      "Boiling water",
    ],
    correct_answer: "Melting ice",
  },
  {
    index: 314,
    question: "What is the process of measuring heat changes in reactions?",
    options: [
      "Calorimetry",
      "Thermometry",
      "Thermodynamics",
      "Thermobarometry",
    ],
    correct_answer: "Calorimetry",
  },
  {
    index: 315,
    question:
      "What is the enthalpy change for a reaction when it is written in reverse?",
    options: [
      "Negative of the forward reaction",
      "Equal to the forward reaction",
      "Zero",
      "Positive of the forward reaction",
    ],
    correct_answer: "Negative of the forward reaction",
  },
  {
    index: 316,
    question:
      "What principle states that the total enthalpy change for a reaction is independent of the pathway taken?",
    options: [
      "Hess's Law",
      "Le Chatelier's Principle",
      "Boyle's Law",
      "Charles's Law",
    ],
    correct_answer: "Hess's Law",
  },
  {
    index: 317,
    question:
      "What is the minimum amount of energy required to start a chemical reaction?",
    options: [
      "Activation energy",
      "Gibbs free energy",
      "Enthalpy change",
      "Entropy",
    ],
    correct_answer: "Activation energy",
  },
  {
    index: 318,
    question:
      "Which of the following factors affects the rate of a chemical reaction?",
    options: [
      "Temperature",
      "Concentration of reactants",
      "Presence of catalysts",
      "All of the above",
    ],
    correct_answer: "All of the above",
  },
  {
    index: 319,
    question: "Which of the following is a primary source of air pollution?",
    options: [
      "Vehicle emissions",
      "Natural wildfires",
      "Ocean currents",
      "Volcanic eruptions",
    ],
    correct_answer: "Vehicle emissions",
  },
  {
    index: 320,
    question: "What is the main contributor to acid rain?",
    options: [
      "Sulfur dioxide and nitrogen oxides",
      "Carbon monoxide",
      "Methane",
      "Volatile organic compounds",
    ],
    correct_answer: "Sulfur dioxide and nitrogen oxides",
  },
  {
    index: 321,
    question:
      "Which pollutant is known to cause respiratory problems and lung diseases?",
    options: [
      "Particulate matter",
      "Carbon dioxide",
      "Ozone",
      "Sulfur dioxide",
    ],
    correct_answer: "Particulate matter",
  },
  {
    index: 322,
    question: "What is the primary cause of eutrophication in water bodies?",
    options: [
      "Excessive nutrients like nitrogen and phosphorus",
      "Heavy metal contamination",
      "Industrial waste discharge",
      "Oil spills",
    ],
    correct_answer: "Excessive nutrients like nitrogen and phosphorus",
  },
  {
    index: 323,
    question: "Which of the following is a method of water treatment?",
    options: [
      "Chlorination",
      "Ocean dumping",
      "Untreated discharge",
      "Littering",
    ],
    correct_answer: "Chlorination",
  },
  {
    index: 324,
    question:
      "What is the process of removing salt and other impurities from seawater to make it suitable for drinking?",
    options: ["Desalination", "Filtration", "Eutrophication", "Chlorination"],
    correct_answer: "Desalination",
  },
  {
    index: 325,
    question:
      "Which chemical process converts harmful pollutants into less harmful or non-toxic substances?",
    options: [
      "Detoxification",
      "Incineration",
      "Fossilization",
      "Desalination",
    ],
    correct_answer: "Detoxification",
  },
  {
    index: 326,
    question:
      "Which renewable energy source converts sunlight into electricity?",
    options: ["Solar power", "Wind power", "Hydropower", "Geothermal energy"],
    correct_answer: "Solar power",
  },
  {
    index: 327,
    question: "What is the most abundant greenhouse gas?",
    options: [
      "Carbon dioxide (CO2)",
      "Methane (CH4)",
      "Nitrous oxide (N2O)",
      "Water vapor (H2O)",
    ],
    correct_answer: "Water vapor (H2O)",
  },
  {
    index: 328,
    question: "Which type of radiation is emitted during nuclear fission?",
    options: ["Gamma rays", "Alpha particles", "Beta particles", "Neutrons"],
    correct_answer: "Gamma rays",
  },
  {
    index: 329,
    question:
      "What is the primary source of greenhouse gases released from human activities?",
    options: [
      "Burning fossil fuels",
      "Volcanic eruptions",
      "Deforestation",
      "Methane from livestock",
    ],
    correct_answer: "Burning fossil fuels",
  },
  {
    index: 330,
    question: "Which of the following is a greenhouse gas?",
    options: [
      "Carbon dioxide (CO2)",
      "Oxygen (O2)",
      "Nitrogen (N2)",
      "Argon (Ar)",
    ],
    correct_answer: "Carbon dioxide (CO2)",
  },
  {
    index: 331,
    question:
      "What is the process of capturing and storing carbon dioxide emissions from industrial sources?",
    options: [
      "Carbon capture and storage (CCS)",
      "Desalination",
      "Chlorination",
      "Eutrophication",
    ],
    correct_answer: "Carbon capture and storage (CCS)",
  },
  {
    index: 332,
    question: "Which of the following is a consequence of ocean acidification?",
    options: [
      "Coral bleaching",
      "Increased fish populations",
      "Algal blooms",
      "Higher pH levels",
    ],
    correct_answer: "Coral bleaching",
  },
  {
    index: 333,
    question:
      "What is the process of breaking down organic matter in the absence of oxygen, leading to the production of methane gas?",
    options: [
      "Anaerobic digestion",
      "Fermentation",
      "Incineration",
      "Pyrolysis",
    ],
    correct_answer: "Anaerobic digestion",
  },
  {
    index: 334,
    question:
      "Which of the following pollutants is a result of incomplete combustion of fossil fuels?",
    options: [
      "Carbon monoxide (CO)",
      "Ozone (O3)",
      "Sulfur dioxide (SO2)",
      "Nitrogen dioxide (NO2)",
    ],
    correct_answer: "Carbon monoxide (CO)",
  },
  {
    index: 335,
    question:
      "What is the primary source of mercury pollution in aquatic ecosystems?",
    options: [
      "Coal-fired power plants",
      "Agricultural runoff",
      "Nuclear power plants",
      "Landfills",
    ],
    correct_answer: "Coal-fired power plants",
  },
  {
    index: 336,
    question: "Which of the following is a characteristic of green chemistry?",
    options: [
      "Minimizing waste",
      "Maximizing resource use",
      "Promoting pollution",
      "Using non-renewable resources",
    ],
    correct_answer: "Minimizing waste",
  },
  {
    index: 337,
    question:
      "What is the primary greenhouse gas emitted from agricultural activities?",
    options: [
      "Methane (CH4)",
      "Carbon dioxide (CO2)",
      "Nitrous oxide (N2O)",
      "Water vapor (H2O)",
    ],
    correct_answer: "Methane (CH4)",
  },
  {
    index: 338,
    question:
      "Which of the following is an example of a non-point source of water pollution?",
    options: [
      "Agricultural runoff",
      "Wastewater treatment plant",
      "Industrial discharge pipe",
      "Oil spill",
    ],
    correct_answer: "Agricultural runoff",
  },
  {
    index: 339,
    question: "What is the primary source of indoor air pollution?",
    options: [
      "Cooking stoves",
      "Industrial emissions",
      "Automobile exhaust",
      "Volcanic eruptions",
    ],
    correct_answer: "Cooking stoves",
  },
  {
    index: 340,
    question:
      "Which of the following pollutants is a major contributor to smog formation?",
    options: [
      "Nitrogen oxides (NOx)",
      "Carbon dioxide (CO2)",
      "Sulfur dioxide (SO2)",
      "Particulate matter (PM)",
    ],
    correct_answer: "Nitrogen oxides (NOx)",
  },
  {
    index: 341,
    question:
      "What is the primary cause of ozone depletion in the stratosphere?",
    options: [
      "Chlorofluorocarbons (CFCs)",
      "Carbon dioxide (CO2)",
      "Methane (CH4)",
      "Nitrous oxide (N2O)",
    ],
    correct_answer: "Chlorofluorocarbons (CFCs)",
  },
  {
    index: 342,
    question:
      "Which of the following is an example of a renewable energy source?",
    options: ["Wind power", "Coal", "Natural gas", "Nuclear power"],
    correct_answer: "Wind power",
  },
  {
    index: 343,
    question: "What is the primary source of anthropogenic methane emissions?",
    options: [
      "Agriculture",
      "Transportation",
      "Industrial processes",
      "Waste management",
    ],
    correct_answer: "Agriculture",
  },
  {
    index: 344,
    question:
      "What is the primary source of indoor air pollution in developing countries?",
    options: [
      "Biomass burning",
      "Automobile emissions",
      "Industrial discharge",
      "Aerosol sprays",
    ],
    correct_answer: "Biomass burning",
  },
  {
    index: 345,
    question:
      "Which of the following is a consequence of thermal pollution in aquatic ecosystems?",
    options: [
      "Decreased dissolved oxygen levels",
      "Increased biodiversity",
      "Reduced nutrient levels",
      "Higher pH levels",
    ],
    correct_answer: "Decreased dissolved oxygen levels",
  },
  {
    index: 346,
    question: "What is the primary source of nitrous oxide emissions?",
    options: [
      "Agriculture",
      "Industrial processes",
      "Transportation",
      "Waste management",
    ],
    correct_answer: "Agriculture",
  },
  {
    index: 347,
    question:
      "Which of the following is a method of reducing air pollution from automobiles?",
    options: [
      "Catalytic converters",
      "Increased fuel consumption",
      "Exhaust leaks",
      "Removal of emission standards",
    ],
    correct_answer: "Catalytic converters",
  },
  {
    index: 348,
    question:
      "What is the primary source of lead pollution in the environment?",
    options: [
      "Historical use of leaded gasoline",
      "Volcanic eruptions",
      "Agricultural runoff",
      "Biomass burning",
    ],
    correct_answer: "Historical use of leaded gasoline",
  },
  {
    index: 349,
    question:
      "Which of the following pollutants is a greenhouse gas as well as a component of photochemical smog?",
    options: [
      "Volatile organic compounds (VOCs)",
      "Particulate matter (PM)",
      "Carbon monoxide (CO)",
      "Sulfur dioxide (SO2)",
    ],
    correct_answer: "Volatile organic compounds (VOCs)",
  },
  {
    index: 350,
    question: "What is the primary source of mercury exposure in humans?",
    options: [
      "Consumption of contaminated fish",
      "Breathing polluted air",
      "Drinking contaminated water",
      "Exposure to industrial waste",
    ],
    correct_answer: "Consumption of contaminated fish",
  },
  {
    index: 351,
    question:
      "Which of the following pollutants is a result of agricultural runoff?",
    options: [
      "Nitrogen and phosphorus",
      "Heavy metals",
      "Chlorofluorocarbons (CFCs)",
      "Particulate matter (PM)",
    ],
    correct_answer: "Nitrogen and phosphorus",
  },
  {
    index: 352,
    question: "What is the primary source of sulfur dioxide emissions?",
    options: [
      "Burning fossil fuels",
      "Agricultural activities",
      "Deforestation",
      "Industrial processes",
    ],
    correct_answer: "Burning fossil fuels",
  },
  {
    index: 353,
    question: "Which of the following is a method of reducing water pollution?",
    options: [
      "Bioremediation",
      "Oil drilling",
      "Unregulated dumping",
      "Deforestation",
    ],
    correct_answer: "Bioremediation",
  },
  {
    index: 354,
    question:
      "What is the primary source of indoor air pollution in developed countries?",
    options: [
      "Tobacco smoke",
      "Industrial emissions",
      "Transportation",
      "Cooking stoves",
    ],
    correct_answer: "Tobacco smoke",
  },
  {
    index: 355,
    question:
      "Which of the following pollutants is a byproduct of nuclear power plants?",
    options: [
      "Radioactive waste",
      "Carbon dioxide (CO2)",
      "Sulfur dioxide (SO2)",
      "Lead (Pb)",
    ],
    correct_answer: "Radioactive waste",
  },
  {
    index: 356,
    question: "What is the primary source of methane emissions from landfills?",
    options: [
      "Decomposition of organic waste",
      "Industrial processes",
      "Deforestation",
      "Automobile emissions",
    ],
    correct_answer: "Decomposition of organic waste",
  },
  {
    index: 357,
    question:
      "Which of the following pollutants contributes to the formation of acid rain?",
    options: [
      "Sulfur dioxide (SO2) and nitrogen oxides (NOx)",
      "Carbon monoxide (CO)",
      "Ozone (O3)",
      "Particulate matter (PM)",
    ],
    correct_answer: "Sulfur dioxide (SO2) and nitrogen oxides (NOx)",
  },
  {
    index: 358,
    question:
      "What is the primary source of chlorofluorocarbons (CFCs) in the atmosphere?",
    options: [
      "Refrigerants and aerosol propellants",
      "Volcanic eruptions",
      "Biomass burning",
      "Landfills",
    ],
    correct_answer: "Refrigerants and aerosol propellants",
  },
  {
    index: 359,
    question: "Which of the following is a consequence of deforestation?",
    options: [
      "Loss of biodiversity",
      "Increased air quality",
      "Enhanced carbon sequestration",
      "Reduced soil erosion",
    ],
    correct_answer: "Loss of biodiversity",
  },
  {
    index: 360,
    question:
      "What is the primary source of indoor air pollution in urban areas?",
    options: [
      "Traffic emissions",
      "Industrial emissions",
      "Cooking stoves",
      "Tobacco smoke",
    ],
    correct_answer: "Traffic emissions",
  },
  {
    index: 361,
    question:
      "Which of the following pollutants is a greenhouse gas released during rice cultivation?",
    options: [
      "Methane (CH4)",
      "Carbon dioxide (CO2)",
      "Nitrous oxide (N2O)",
      "Sulfur dioxide (SO2)",
    ],
    correct_answer: "Methane (CH4)",
  },
  {
    index: 362,
    question: "What is the primary source of nitrate pollution in groundwater?",
    options: [
      "Agricultural fertilizers",
      "Industrial discharge",
      "Automobile emissions",
      "Oil spills",
    ],
    correct_answer: "Agricultural fertilizers",
  },
  {
    index: 363,
    question: "Which of the following is a consequence of soil erosion?",
    options: [
      "Loss of fertile land",
      "Enhanced agricultural productivity",
      "Decreased sedimentation in water bodies",
      "Reduced flood risk",
    ],
    correct_answer: "Loss of fertile land",
  },
  {
    index: 364,
    question: "What is the primary source of carbon monoxide emissions?",
    options: [
      "Incomplete combustion of fossil fuels",
      "Volcanic eruptions",
      "Forest fires",
      "Industrial processes",
    ],
    correct_answer: "Incomplete combustion of fossil fuels",
  },
  {
    index: 365,
    question:
      "Which of the following pollutants is a result of industrial discharge?",
    options: [
      "Heavy metals",
      "Chlorofluorocarbons (CFCs)",
      "Carbon dioxide (CO2)",
      "Ozone (O3)",
    ],
    correct_answer: "Heavy metals",
  },
  {
    index: 366,
    question:
      "What is the primary source of cadmium pollution in the environment?",
    options: [
      "Industrial activities",
      "Agricultural runoff",
      "Burning fossil fuels",
      "Natural weathering of rocks",
    ],
    correct_answer: "Industrial activities",
  },
  {
    index: 367,
    question:
      "Which of the following is a method of reducing greenhouse gas emissions from agriculture?",
    options: [
      "Improving livestock management practices",
      "Increasing deforestation",
      "Promoting monoculture farming",
      "Using synthetic fertilizers",
    ],
    correct_answer: "Improving livestock management practices",
  },
  {
    index: 368,
    question:
      "What is the primary source of sulfur hexafluoride (SF6) emissions?",
    options: [
      "Electrical transmission and distribution equipment",
      "Agricultural activities",
      "Transportation",
      "Biomass burning",
    ],
    correct_answer: "Electrical transmission and distribution equipment",
  },
  {
    index: 369,
    question:
      "What is the primary greenhouse gas emitted from industrial processes?",
    options: [
      "Carbon dioxide (CO2)",
      "Methane (CH4)",
      "Nitrous oxide (N2O)",
      "Water vapor (H2O)",
    ],
    correct_answer: "Carbon dioxide (CO2)",
  },
  {
    index: 370,
    question:
      "Which of the following is a consequence of eutrophication in aquatic ecosystems?",
    options: [
      "Decreased dissolved oxygen levels",
      "Increased biodiversity",
      "Reduced algal blooms",
      "Improved water clarity",
    ],
    correct_answer: "Decreased dissolved oxygen levels",
  },
  {
    index: 371,
    question: "What is the primary source of plastic pollution in oceans?",
    options: [
      "Marine debris",
      "Industrial waste",
      "Agricultural runoff",
      "Landfills",
    ],
    correct_answer: "Marine debris",
  },
  {
    index: 372,
    question:
      "Which of the following pollutants is a byproduct of incineration of electronic waste?",
    options: [
      "Dioxins",
      "Sulfur dioxide (SO2)",
      "Carbon monoxide (CO)",
      "Lead (Pb)",
    ],
    correct_answer: "Dioxins",
  },
  {
    index: 373,
    question: "What is the primary source of radon gas in indoor environments?",
    options: [
      "Building materials",
      "Automobile emissions",
      "Industrial processes",
      "Agricultural runoff",
    ],
    correct_answer: "Building materials",
  },
  {
    index: 374,
    question:
      "Which of the following pollutants is a result of oil spills in marine ecosystems?",
    options: [
      "Polycyclic aromatic hydrocarbons (PAHs)",
      "Benzene",
      "Sulfur dioxide (SO2)",
      "Particulate matter (PM)",
    ],
    correct_answer: "Polycyclic aromatic hydrocarbons (PAHs)",
  },
  {
    index: 375,
    question:
      "What is the primary source of acid mine drainage in water bodies?",
    options: [
      "Leaching of sulfide minerals",
      "Agricultural runoff",
      "Industrial discharge",
      "Landfills",
    ],
    correct_answer: "Leaching of sulfide minerals",
  },
  {
    index: 376,
    question:
      "Which of the following pollutants is a major contributor to soil contamination from industrial activities?",
    options: [
      "Heavy metals",
      "Volatile organic compounds (VOCs)",
      "Nitrogen oxides (NOx)",
      "Chlorofluorocarbons (CFCs)",
    ],
    correct_answer: "Heavy metals",
  },
  {
    index: 377,
    question:
      "What is the primary source of phosphorus pollution in freshwater ecosystems?",
    options: [
      "Agricultural fertilizers",
      "Industrial discharge",
      "Volcanic eruptions",
      "Deforestation",
    ],
    correct_answer: "Agricultural fertilizers",
  },
  {
    index: 378,
    question:
      "Which of the following pollutants is a result of improper disposal of electronic waste?",
    options: [
      "Mercury",
      "Carbon monoxide (CO)",
      "Sulfur dioxide (SO2)",
      "Nitrogen oxides (NOx)",
    ],
    correct_answer: "Mercury",
  },
  {
    index: 379,
    question:
      "What is the primary source of perchlorate contamination in drinking water?",
    options: [
      "Industrial discharge",
      "Agricultural runoff",
      "Leaching of fertilizers",
      "Radioactive waste",
    ],
    correct_answer: "Industrial discharge",
  },
  {
    index: 380,
    question:
      "Which of the following pollutants is a result of open burning of biomass?",
    options: [
      "Particulate matter (PM)",
      "Sulfur dioxide (SO2)",
      "Nitrogen oxides (NOx)",
      "Carbon dioxide (CO2)",
    ],
    correct_answer: "Particulate matter (PM)",
  },
  {
    index: 381,
    question: "What is the primary source of microplastic pollution in oceans?",
    options: [
      "Sewage discharge",
      "Industrial waste",
      "Agricultural runoff",
      "Marine debris",
    ],
    correct_answer: "Sewage discharge",
  },
  {
    index: 382,
    question:
      "Which of the following pollutants is a major contributor to acid rain formation?",
    options: [
      "Sulfur dioxide (SO2) and nitrogen oxides (NOx)",
      "Carbon monoxide (CO)",
      "Ozone (O3)",
      "Methane (CH4)",
    ],
    correct_answer: "Sulfur dioxide (SO2) and nitrogen oxides (NOx)",
  },
  {
    index: 383,
    question:
      "What is the primary source of asbestos contamination in indoor environments?",
    options: [
      "Building materials",
      "Automobile emissions",
      "Industrial discharge",
      "Agricultural runoff",
    ],
    correct_answer: "Building materials",
  },
  {
    index: 384,
    question:
      "Which of the following pollutants is a result of hydraulic fracturing (fracking)?",
    options: [
      "Benzene",
      "Methane (CH4)",
      "Carbon monoxide (CO)",
      "Sulfur dioxide (SO2)",
    ],
    correct_answer: "Benzene",
  },
  {
    index: 385,
    question: "What is the primary source of mercury contamination in fish?",
    options: [
      "Atmospheric deposition",
      "Industrial discharge",
      "Agricultural runoff",
      "Natural weathering of rocks",
    ],
    correct_answer: "Atmospheric deposition",
  },
  {
    index: 386,
    question:
      "Which of the following pollutants is a major component of electronic waste?",
    options: [
      "Lead (Pb)",
      "Methane (CH4)",
      "Carbon monoxide (CO)",
      "Nitrogen oxides (NOx)",
    ],
    correct_answer: "Lead (Pb)",
  },
  {
    index: 387,
    question:
      "What is the primary source of radioactive contamination in groundwater?",
    options: [
      "Nuclear accidents",
      "Industrial discharge",
      "Agricultural runoff",
      "Mining activities",
    ],
    correct_answer: "Nuclear accidents",
  },
  {
    index: 388,
    question: "Which of the following pollutants is a result of deforestation?",
    options: [
      "Soil erosion",
      "Increased biodiversity",
      "Enhanced carbon sequestration",
      "Reduced water pollution",
    ],
    correct_answer: "Soil erosion",
  },
  {
    index: 389,
    question: "What is the primary building block of most polymers?",
    options: ["Monomer", "Atom", "Molecule", "Crystal"],
    correct_answer: "Monomer",
  },
  {
    index: 390,
    question: "Which polymer is commonly used in making plastic bottles?",
    options: [
      "Polyethylene terephthalate (PET)",
      "Polypropylene",
      "Polyvinyl chloride (PVC)",
      "Polystyrene",
    ],
    correct_answer: "Polyethylene terephthalate (PET)",
  },
  {
    index: 391,
    question:
      "What is the process of combining smaller molecules (monomers) into a large polymer called?",
    options: ["Polymerization", "Oxidation", "Reduction", "Hydrolysis"],
    correct_answer: "Polymerization",
  },
  {
    index: 392,
    question:
      "Which pharmaceutical compound is commonly used as a pain reliever and fever reducer?",
    options: ["Acetaminophen", "Aspirin", "Ibuprofen", "Naproxen"],
    correct_answer: "Acetaminophen",
  },
  {
    index: 393,
    question:
      "What is the process of preserving food by removing water content called?",
    options: ["Dehydration", "Fermentation", "Pasteurization", "Freezing"],
    correct_answer: "Dehydration",
  },
  {
    index: 394,
    question:
      "Which forensic technique involves separating and analyzing compounds based on their migration speed in a medium?",
    options: [
      "Chromatography",
      "Spectroscopy",
      "Mass spectrometry",
      "DNA profiling",
    ],
    correct_answer: "Chromatography",
  },
  {
    index: 395,
    question:
      "What is the study of matter and its interactions with energy and itself called?",
    options: ["Chemistry", "Biology", "Physics", "Geology"],
    correct_answer: "Chemistry",
  },
  {
    index: 396,
    question:
      "Which safety precaution should be followed while handling chemicals in a laboratory?",
    options: [
      "Wearing appropriate personal protective equipment (PPE)",
      "Leaving spills unattended",
      "Mixing unknown chemicals together",
      "Ignoring safety labels and signs",
    ],
    correct_answer: "Wearing appropriate personal protective equipment (PPE)",
  },
  {
    index: 397,
    question:
      "What is the term for the study of the composition, structure, properties, and reactions of matter?",
    options: ["Chemistry", "Biology", "Physics", "Geology"],
    correct_answer: "Chemistry",
  },
  {
    index: 398,
    question:
      "Which chemical element is commonly found in table salt (sodium chloride)?",
    options: ["Chlorine", "Sodium", "Potassium", "Calcium"],
    correct_answer: "Sodium",
  },
  {
    index: 399,
    question:
      "What is the process of breaking down complex molecules into simpler ones, often using heat?",
    options: ["Pyrolysis", "Polymerization", "Oxidation", "Reduction"],
    correct_answer: "Pyrolysis",
  },
  {
    index: 400,
    question: "Which famous chemist is known for his discovery of penicillin?",
    options: [
      "Alexander Fleming",
      "Marie Curie",
      "Dmitri Mendeleev",
      "Robert Hooke",
    ],
    correct_answer: "Alexander Fleming",
  },
  {
    index: 401,
    question:
      "What is the study of the properties and behavior of inorganic compounds called?",
    options: [
      "Inorganic Chemistry",
      "Organic Chemistry",
      "Physical Chemistry",
      "Analytical Chemistry",
    ],
    correct_answer: "Inorganic Chemistry",
  },
  {
    index: 402,
    question:
      "Which compound is responsible for the fizziness in carbonated drinks?",
    options: ["Carbon dioxide", "Nitrogen", "Oxygen", "Hydrogen"],
    correct_answer: "Carbon dioxide",
  },
  {
    index: 403,
    question:
      "What is the term for a substance that speeds up a chemical reaction without being consumed in the process?",
    options: ["Catalyst", "Reactant", "Product", "Inhibitor"],
    correct_answer: "Catalyst",
  },
  {
    index: 404,
    question:
      "Which branch of chemistry focuses on the study of the properties and behavior of matter?",
    options: [
      "Physical Chemistry",
      "Analytical Chemistry",
      "Inorganic Chemistry",
      "Organic Chemistry",
    ],
    correct_answer: "Physical Chemistry",
  },
  {
    index: 405,
    question:
      "What is the term for a chemical reaction that releases heat to its surroundings?",
    options: ["Exothermic", "Endothermic", "Neutral", "Acidic"],
    correct_answer: "Exothermic",
  },
  {
    index: 406,
    question: "What is the pH value of a neutral solution?",
    options: ["7", "Less than 7", "More than 7", "Depends on the substance"],
    correct_answer: "7",
  },
  {
    index: 407,
    question:
      "What is the term for the amount of solute dissolved in a solvent?",
    options: ["Concentration", "Density", "Volume", "Mass"],
    correct_answer: "Concentration",
  },
  {
    index: 408,
    question:
      "Which type of chemical reaction involves the combination of two or more substances to form a new compound?",
    options: [
      "Synthesis",
      "Decomposition",
      "Single displacement",
      "Double displacement",
    ],
    correct_answer: "Synthesis",
  },
  {
    index: 409,
    question:
      "Which term describes a substance's ability to dissolve in water?",
    options: ["Solubility", "Density", "Viscosity", "Reactivity"],
    correct_answer: "Solubility",
  },
  {
    index: 410,
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Fe", "Cu"],
    correct_answer: "Au",
  },
  {
    index: 411,
    question:
      "Which type of chemical bond involves the sharing of electron pairs between atoms?",
    options: ["Covalent", "Ionic", "Metallic", "Hydrogen"],
    correct_answer: "Covalent",
  },
  {
    index: 412,
    question: "What is the chemical formula for water?",
    options: ["H2O", "CO2", "NaCl", "CH4"],
    correct_answer: "H2O",
  },
  {
    index: 413,
    question: "Which gas makes up the majority of Earth's atmosphere?",
    options: ["Nitrogen", "Oxygen", "Carbon dioxide", "Argon"],
    correct_answer: "Nitrogen",
  },
  {
    index: 414,
    question:
      "What is the term for the process of a substance changing directly from a solid to a gas?",
    options: ["Sublimation", "Deposition", "Evaporation", "Condensation"],
    correct_answer: "Sublimation",
  },
  {
    index: 415,
    question:
      "Which chemical element is essential for all known forms of life?",
    options: ["Carbon", "Nitrogen", "Hydrogen", "Oxygen"],
    correct_answer: "Carbon",
  },
  {
    index: 416,
    question: "What is the term for the study of carbon-containing compounds?",
    options: [
      "Organic Chemistry",
      "Inorganic Chemistry",
      "Physical Chemistry",
      "Analytical Chemistry",
    ],
    correct_answer: "Organic Chemistry",
  },
  {
    index: 417,
    question: "What is the molecular formula for glucose?",
    options: ["C6H12O6", "H2O", "CO2", "NaCl"],
    correct_answer: "C6H12O6",
  },
  {
    index: 418,
    question: "Which gas is produced during photosynthesis?",
    options: ["Oxygen", "Carbon dioxide", "Hydrogen", "Nitrogen"],
    correct_answer: "Oxygen",
  },
  {
    index: 419,
    question:
      "What is the process of separating a mixture based on differences in boiling points?",
    options: ["Distillation", "Filtration", "Evaporation", "Sublimation"],
    correct_answer: "Distillation",
  },
  {
    index: 420,
    question: "Which chemical element is used in batteries?",
    options: ["Lithium", "Sodium", "Potassium", "Calcium"],
    correct_answer: "Lithium",
  },
  {
    index: 421,
    question: "What is the chemical symbol for iron?",
    options: ["Fe", "Au", "Ag", "Cu"],
    correct_answer: "Fe",
  },
  {
    index: 422,
    question:
      "Which type of chemical reaction involves the breakdown of a compound into simpler substances?",
    options: [
      "Decomposition",
      "Synthesis",
      "Single displacement",
      "Double displacement",
    ],
    correct_answer: "Decomposition",
  },
  {
    index: 423,
    question:
      "What is the term for a substance that speeds up a chemical reaction without being consumed in the process?",
    options: ["Catalyst", "Reactant", "Product", "Inhibitor"],
    correct_answer: "Catalyst",
  },
  {
    index: 424,
    question:
      "Which chemical element is found in abundance in the Earth's crust?",
    options: ["Oxygen", "Silicon", "Iron", "Aluminum"],
    correct_answer: "Oxygen",
  },
  {
    index: 425,
    question: "What is the term for the amount of matter in an object?",
    options: ["Mass", "Volume", "Density", "Weight"],
    correct_answer: "Mass",
  },
  {
    index: 426,
    question: "Which type of chemical bond is formed between metal atoms?",
    options: ["Metallic", "Ionic", "Covalent", "Hydrogen"],
    correct_answer: "Metallic",
  },
  {
    index: 427,
    question: "What is the chemical formula for ammonia?",
    options: ["NH3", "H2O", "CO2", "NaCl"],
    correct_answer: "NH3",
  },
  {
    index: 428,
    question:
      "Which gas is commonly used in the food industry to preserve freshness?",
    options: ["Nitrogen", "Oxygen", "Carbon dioxide", "Hydrogen"],
    correct_answer: "Nitrogen",
  },
  {
    index: 429,
    question: "What is the term for the number of protons in an atom?",
    options: [
      "Atomic number",
      "Mass number",
      "Valence number",
      "Isotope number",
    ],
    correct_answer: "Atomic number",
  },
  {
    index: 430,
    question: "Which gas is commonly used as a fuel for heating and cooking?",
    options: ["Natural gas", "Oxygen", "Nitrogen", "Carbon dioxide"],
    correct_answer: "Natural gas",
  },
  {
    index: 431,
    question: "What is the chemical formula for table salt?",
    options: ["NaCl", "H2O", "CO2", "NH3"],
    correct_answer: "NaCl",
  },
  {
    index: 432,
    question:
      "Which type of chemical reaction involves two compounds exchanging ions?",
    options: [
      "Double displacement",
      "Single displacement",
      "Synthesis",
      "Decomposition",
    ],
    correct_answer: "Double displacement",
  },
  {
    index: 433,
    question:
      "What is the term for the study of the composition, structure, and properties of matter?",
    options: ["Chemistry", "Physics", "Biology", "Geology"],
    correct_answer: "Chemistry",
  },
  {
    index: 434,
    question: "Which chemical element is used in fluorescent light bulbs?",
    options: ["Mercury", "Neon", "Argon", "Krypton"],
    correct_answer: "Mercury",
  },
  {
    index: 435,
    question: "What is the chemical formula for carbon dioxide?",
    options: ["CO2", "H2O", "NaCl", "NH3"],
    correct_answer: "CO2",
  },
  {
    index: 436,
    question: "Which gas is responsible for the greenhouse effect?",
    options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Argon"],
    correct_answer: "Carbon dioxide",
  },
  {
    index: 437,
    question:
      "What is the term for a substance that speeds up a chemical reaction?",
    options: ["Catalyst", "Reactant", "Product", "Inhibitor"],
    correct_answer: "Catalyst",
  },
  {
    index: 438,
    question: "Which chemical element is commonly used in batteries?",
    options: ["Lithium", "Sodium", "Potassium", "Calcium"],
    correct_answer: "Lithium",
  },
  {
    index: 439,
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Cu", "Fe"],
    correct_answer: "Au",
  },
  {
    index: 440,
    question: "Which of the following is a noble gas?",
    options: ["Helium", "Nitrogen", "Oxygen", "Carbon"],
    correct_answer: "Helium",
  },
  {
    index: 441,
    question:
      "What is the term for a substance that releases hydrogen ions in water?",
    options: ["Acid", "Base", "Salt", "Neutral"],
    correct_answer: "Acid",
  },
  {
    index: 442,
    question:
      "Which type of chemical bond involves the sharing of electrons between atoms?",
    options: ["Covalent bond", "Ionic bond", "Hydrogen bond", "Metallic bond"],
    correct_answer: "Covalent bond",
  },
  {
    index: 443,
    question: "What is the chemical formula for sulfuric acid?",
    options: ["H2SO4", "HCl", "NaOH", "NH3"],
    correct_answer: "H2SO4",
  },
  {
    index: 444,
    question: "Which of the following is an example of a polyatomic ion?",
    options: [
      "Nitrate (NO3⁻)",
      "Sodium (Na⁺)",
      "Chloride (Cl⁻)",
      "Hydroxide (OH⁻)",
    ],
    correct_answer: "Nitrate (NO3⁻)",
  },
  {
    index: 445,
    question: "What is the chemical formula for hydrogen peroxide?",
    options: ["H2O2", "HCl", "NaOH", "NH3"],
    correct_answer: "H2O2",
  },
  {
    index: 446,
    question: "Which type of reaction releases energy to its surroundings?",
    options: ["Exothermic", "Endothermic", "Neutralization", "Redox"],
    correct_answer: "Exothermic",
  },
  {
    index: 447,
    question: "What is the chemical formula for methane?",
    options: ["CH4", "H2O", "CO2", "NH3"],
    correct_answer: "CH4",
  },
  {
    index: 448,
    question:
      "Which gas is commonly used in the food industry to prevent food from spoiling?",
    options: ["Nitrogen", "Oxygen", "Carbon dioxide", "Hydrogen"],
    correct_answer: "Carbon dioxide",
  },
  {
    index: 449,
    question: "What is nanochemistry?",
    options: [
      "The study of small particles and their properties",
      "The study of atoms and molecules",
      "The study of large-scale chemical reactions",
      "The study of ancient chemistry",
    ],
    correct_answer: "The study of small particles and their properties",
  },
  {
    index: 450,
    question:
      "Which of the following is a property associated with nanoparticles?",
    options: [
      "High surface area to volume ratio",
      "Low reactivity",
      "Large size",
      "Low surface area to volume ratio",
    ],
    correct_answer: "High surface area to volume ratio",
  },
  {
    index: 451,
    question: "What are some applications of nanochemistry?",
    options: [
      "Drug delivery systems",
      "Electronics",
      "Catalysis",
      "All of the above",
    ],
    correct_answer: "All of the above",
  },
  {
    index: 452,
    question: "Who is considered the father of modern chemistry?",
    options: [
      "Antoine Lavoisier",
      "John Dalton",
      "Dmitri Mendeleev",
      "Robert Boyle",
    ],
    correct_answer: "Antoine Lavoisier",
  },
  {
    index: 453,
    question:
      "Which ancient civilization contributed significantly to the development of early chemistry?",
    options: ["Egyptians", "Greeks", "Romans", "Chinese"],
    correct_answer: "Egyptians",
  },
  {
    index: 454,
    question: "What is alchemy?",
    options: [
      "A medieval practice that aimed to transform base metals into gold",
      "A branch of modern chemistry",
      "The study of chemical elements and compounds",
      "The study of biological molecules",
    ],
    correct_answer:
      "A medieval practice that aimed to transform base metals into gold",
  },
  {
    index: 455,
    question: "Who proposed the modern atomic theory?",
    options: [
      "John Dalton",
      "Antoine Lavoisier",
      "Dmitri Mendeleev",
      "Robert Boyle",
    ],
    correct_answer: "John Dalton",
  },
  {
    index: 456,
    question:
      "What is the name of the ancient Greek philosopher often referred to as the 'father of chemistry'?",
    options: ["Democritus", "Aristotle", "Plato", "Socrates"],
    correct_answer: "Democritus",
  },
  {
    index: 457,
    question:
      "Who is credited with the discovery of the periodic law and the periodic table of elements?",
    options: [
      "Dmitri Mendeleev",
      "Antoine Lavoisier",
      "John Dalton",
      "J.J. Thomson",
    ],
    correct_answer: "Dmitri Mendeleev",
  },
  {
    index: 458,
    question:
      "In which century did the field of chemistry begin to emerge as a distinct scientific discipline?",
    options: ["17th century", "18th century", "19th century", "20th century"],
    correct_answer: "17th century",
  },
  {
    index: 459,
    question:
      "What is a potential career path for someone with a degree in chemistry?",
    options: ["Chemical engineer", "Medical doctor", "Lawyer", "Chef"],
    correct_answer: "Chemical engineer",
  },
  {
    index: 460,
    question:
      "What is one of the primary responsibilities of a chemist regarding chemical safety?",
    options: [
      "Identifying hazards",
      "Maximizing risks",
      "Ignoring safety protocols",
      "Using unsafe equipment",
    ],
    correct_answer: "Identifying hazards",
  },
  {
    index: 461,
    question:
      "Why is it important to practice safe lab procedures in chemistry?",
    options: [
      "To prevent accidents and injuries",
      "To increase productivity",
      "To save money",
      "To impress colleagues",
    ],
    correct_answer: "To prevent accidents and injuries",
  },
  {
    index: 462,
    question: "What are some potential hazards in a chemistry laboratory?",
    options: [
      "Chemical spills",
      "Open flames",
      "Broken glassware",
      "All of the above",
    ],
    correct_answer: "All of the above",
  },
  {
    index: 463,
    question: "What is one ethical consideration in chemistry research?",
    options: [
      "Minimizing environmental impact",
      "Maximizing profit at any cost",
      "Exploiting vulnerable populations",
      "Promoting misinformation",
    ],
    correct_answer: "Minimizing environmental impact",
  },
  {
    index: 464,
    question: "What is the principle of responsible conduct in chemistry?",
    options: [
      "Do no harm",
      "Profit above all else",
      "Advance personal interests",
      "Follow strict rules",
    ],
    correct_answer: "Do no harm",
  },
  {
    index: 465,
    question: "How can chemists contribute to sustainability?",
    options: [
      "By developing green technologies",
      "By ignoring environmental concerns",
      "By promoting pollution",
      "By using non-renewable resources",
    ],
    correct_answer: "By developing green technologies",
  },
  {
    index: 466,
    question: "What role do chemists play in addressing global challenges?",
    options: [
      "Developing renewable energy sources",
      "Creating more waste",
      "Ignoring climate change",
      "Maximizing pollution",
    ],
    correct_answer: "Developing renewable energy sources",
  },
  {
    index: 467,
    question: "What is the importance of integrity in chemistry?",
    options: [
      "Maintaining public trust",
      "Maximizing personal gain",
      "Falsifying data",
      "Ignoring safety protocols",
    ],
    correct_answer: "Maintaining public trust",
  },
  {
    index: 468,
    question: "What is one way chemists can engage in ethical practices?",
    options: [
      "By communicating transparently",
      "By hoarding information",
      "By avoiding collaboration",
      "By prioritizing personal interests",
    ],
    correct_answer: "By communicating transparently",
  },
  {
    index: 469,
    question:
      "What are some potential consequences of unethical conduct in chemistry?",
    options: [
      "Damage to reputation",
      "Loss of funding",
      "Legal repercussions",
      "All of the above",
    ],
    correct_answer: "All of the above",
  },
  {
    index: 470,
    question:
      "How can chemists ensure responsible use of chemicals in society?",
    options: [
      "By advocating for proper regulations",
      "By disregarding safety protocols",
      "By promoting irresponsible behavior",
      "By avoiding ethical considerations",
    ],
    correct_answer: "By advocating for proper regulations",
  },
  {
    index: 471,
    question:
      "What is the significance of following ethical guidelines in chemistry?",
    options: [
      "To protect human health and the environment",
      "To maximize profits",
      "To gain personal recognition",
      "To create chaos and disorder",
    ],
    correct_answer: "To protect human health and the environment",
  },
  {
    index: 472,
    question: "What is one ethical principle that guides chemical research?",
    options: ["Beneficence", "Maleficence", "Indifference", "Expediency"],
    correct_answer: "Beneficence",
  },
  {
    index: 473,
    question: "What is the role of chemists in ensuring chemical safety?",
    options: [
      "Identifying hazards and risks",
      "Ignoring safety protocols",
      "Maximizing potential dangers",
      "Exploiting vulnerabilities",
    ],
    correct_answer: "Identifying hazards and risks",
  },
  {
    index: 474,
    question: "What is the primary goal of chemical safety?",
    options: [
      "To prevent accidents and injuries",
      "To increase risks and hazards",
      "To maximize profit",
      "To damage reputation",
    ],
    correct_answer: "To prevent accidents and injuries",
  },
  {
    index: 475,
    question: "What is the significance of chemical safety training?",
    options: [
      "To ensure awareness of hazards",
      "To encourage reckless behavior",
      "To ignore potential risks",
      "To minimize precautions",
    ],
    correct_answer: "To ensure awareness of hazards",
  },
  {
    index: 476,
    question:
      "Why is it important for chemists to consider the long-term impacts of their work?",
    options: [
      "To minimize environmental damage",
      "To maximize short-term profit",
      "To ignore consequences",
      "To prioritize personal gain",
    ],
    correct_answer: "To minimize environmental damage",
  },
  {
    index: 477,
    question: "What is the role of chemists in promoting sustainability?",
    options: [
      "To develop eco-friendly technologies",
      "To increase pollution",
      "To disregard environmental concerns",
      "To exploit natural resources",
    ],
    correct_answer: "To develop eco-friendly technologies",
  },
  {
    index: 478,
    question:
      "What ethical considerations should chemists take into account when conducting research?",
    options: [
      "Potential impact on society and the environment",
      "Potential for personal gain only",
      "Potential for exploitation",
      "Potential for misinformation",
    ],
    correct_answer: "Potential impact on society and the environment",
  },
  {
    index: 479,
    question:
      "What is the responsibility of chemists in ensuring chemical safety in laboratory settings?",
    options: [
      "Following proper procedures and protocols",
      "Ignoring safety guidelines",
      "Maximizing risks",
      "Minimizing precautions",
    ],
    correct_answer: "Following proper procedures and protocols",
  },
  {
    index: 480,
    question:
      "How does chemical safety contribute to the reputation of individuals and organizations?",
    options: [
      "By demonstrating professionalism and responsibility",
      "By disregarding safety protocols",
      "By causing accidents and mishaps",
      "By avoiding ethical considerations",
    ],
    correct_answer: "By demonstrating professionalism and responsibility",
  },
  {
    index: 481,
    question:
      "What ethical considerations should chemists take into account when developing new chemicals?",
    options: [
      "Potential impact on human health and the environment",
      "Potential for personal gain only",
      "Potential for exploitation",
      "Potential for misinformation",
    ],
    correct_answer: "Potential impact on human health and the environment",
  },
  {
    index: 482,
    question:
      "How can chemists contribute to the ethical use of chemicals in society?",
    options: [
      "By promoting responsible practices and regulations",
      "By disregarding safety guidelines",
      "By maximizing risks",
      "By minimizing precautions",
    ],
    correct_answer: "By promoting responsible practices and regulations",
  },
  {
    index: 483,
    question:
      "What are some potential consequences of unethical behavior in chemical research?",
    options: [
      "Loss of trust and credibility",
      "Increase in safety",
      "Promotion of responsible conduct",
      "Decrease in funding",
    ],
    correct_answer: "Loss of trust and credibility",
  },
  {
    index: 484,
    question:
      "Why is it important for chemists to engage in ongoing education and training regarding chemical safety?",
    options: [
      "To stay updated on new hazards and protocols",
      "To ignore potential risks",
      "To maximize risks",
      "To minimize precautions",
    ],
    correct_answer: "To stay updated on new hazards and protocols",
  },
  {
    index: 485,
    question:
      "What role does ethical behavior play in the success of chemical research?",
    options: [
      "It enhances credibility and reliability",
      "It encourages reckless behavior",
      "It maximizes risks",
      "It minimizes precautions",
    ],
    correct_answer: "It enhances credibility and reliability",
  },
  {
    index: 486,
    question:
      "How can chemists ensure the responsible use of chemicals in various industries?",
    options: [
      "By advocating for safety regulations and guidelines",
      "By disregarding safety protocols",
      "By maximizing risks",
      "By minimizing precautions",
    ],
    correct_answer: "By advocating for safety regulations and guidelines",
  },
  {
    index: 487,
    question: "What is the importance of transparency in chemical research?",
    options: [
      "To ensure credibility and trust",
      "To ignore potential risks",
      "To maximize risks",
      "To minimize precautions",
    ],
    correct_answer: "To ensure credibility and trust",
  },
  {
    index: 488,
    question:
      "How does chemical safety contribute to environmental protection?",
    options: [
      "By minimizing pollution and contamination",
      "By maximizing risks",
      "By disregarding environmental concerns",
      "By exploiting natural resources",
    ],
    correct_answer: "By minimizing pollution and contamination",
  },
  {
    index: 489,
    question:
      "How can understanding chemistry in everyday life help individuals make informed choices?",
    options: [
      "By recognizing chemical processes in daily activities",
      "By ignoring chemical reactions",
      "By maximizing risks",
      "By minimizing precautions",
    ],
    correct_answer: "By recognizing chemical processes in daily activities",
  },
  {
    index: 490,
    question:
      "What are some examples of chemical processes occurring in cooking?",
    options: [
      "Caramelization, fermentation, and Maillard reaction",
      "Boiling, freezing, and melting",
      "Diffusion, osmosis, and filtration",
      "Newton's laws, Bernoulli's principle, and Ohm's law",
    ],
    correct_answer: "Caramelization, fermentation, and Maillard reaction",
  },
  {
    index: 491,
    question:
      "How can an understanding of chemistry enhance gardening practices?",
    options: [
      "By optimizing soil pH and nutrient levels",
      "By avoiding chemical reactions",
      "By maximizing risks",
      "By minimizing precautions",
    ],
    correct_answer: "By optimizing soil pH and nutrient levels",
  },
  {
    index: 492,
    question:
      "What are some chemical reactions involved in the process of cleaning?",
    options: [
      "Saponification, oxidation, and dissolution",
      "Evaporation, condensation, and sublimation",
      "Decomposition, synthesis, and displacement",
      "Diffusion, osmosis, and filtration",
    ],
    correct_answer: "Saponification, oxidation, and dissolution",
  },
  {
    index: 493,
    question:
      "How does chemistry play a role in the production of food and beverages?",
    options: [
      "Through fermentation, preservation, and flavor enhancement",
      "Through nuclear fusion, oxidation, and reduction",
      "Through electrolysis, condensation, and sublimation",
      "Through diffusion, osmosis, and filtration",
    ],
    correct_answer:
      "Through fermentation, preservation, and flavor enhancement",
  },
  {
    index: 494,
    question:
      "What are some examples of chemical reactions involved in the preparation of common household products?",
    options: [
      "Neutralization, polymerization, and combustion",
      "Boiling, freezing, and melting",
      "Decomposition, synthesis, and displacement",
      "Diffusion, osmosis, and filtration",
    ],
    correct_answer: "Neutralization, polymerization, and combustion",
  },
  {
    index: 495,
    question:
      "How can chemistry be applied to improve personal hygiene products?",
    options: [
      "By understanding surfactants, emulsifiers, and pH balance",
      "By avoiding chemical reactions",
      "By maximizing risks",
      "By minimizing precautions",
    ],
    correct_answer: "By understanding surfactants, emulsifiers, and pH balance",
  },
  {
    index: 496,
    question:
      "What role does chemistry play in the production and preservation of medications?",
    options: [
      "Through synthesis, formulation, and stabilization",
      "Through nuclear fusion, oxidation, and reduction",
      "Through electrolysis, condensation, and sublimation",
      "Through diffusion, osmosis, and filtration",
    ],
    correct_answer: "Through synthesis, formulation, and stabilization",
  },
  {
    index: 497,
    question:
      "How can understanding the chemistry of materials influence product design and development?",
    options: [
      "By optimizing properties such as strength, durability, and conductivity",
      "By avoiding chemical reactions",
      "By maximizing risks",
      "By minimizing precautions",
    ],
    correct_answer:
      "By optimizing properties such as strength, durability, and conductivity",
  },
  {
    index: 498,
    question:
      "What are some examples of chemical reactions involved in the creation of art and craft materials?",
    options: [
      "Polymerization, oxidation, and reduction",
      "Boiling, freezing, and melting",
      "Decomposition, synthesis, and displacement",
      "Diffusion, osmosis, and filtration",
    ],
    correct_answer: "Polymerization, oxidation, and reduction",
  },
  {
    index: 499,
    question:
      "How does understanding the chemistry of materials contribute to advances in technology?",
    options: [
      "By enabling the development of new materials with specific properties",
      "By ignoring chemical reactions",
      "By maximizing risks",
      "By minimizing precautions",
    ],
    correct_answer:
      "By enabling the development of new materials with specific properties",
  },
  {
    index: 500,
    question:
      "What are some examples of chemical reactions involved in the creation of personal care products?",
    options: [
      "Esterification, saponification, and oxidation",
      "Boiling, freezing, and melting",
      "Decomposition, synthesis, and displacement",
      "Diffusion, osmosis, and filtration",
    ],
    correct_answer: "Esterification, saponification, and oxidation",
  },
  {
    index: 501,
    question:
      "How does chemistry contribute to the development of new energy sources and technologies?",
    options: [
      "By studying and optimizing chemical reactions for energy production",
      "By avoiding chemical reactions",
      "By maximizing risks",
      "By minimizing precautions",
    ],
    correct_answer:
      "By studying and optimizing chemical reactions for energy production",
  },
  {
    index: 502,
    question:
      "What are some examples of chemical reactions involved in the production of clothing and textiles?",
    options: [
      "Polymerization, esterification, and dyeing processes",
      "Boiling, freezing, and melting",
      "Decomposition, synthesis, and displacement",
      "Diffusion, osmosis, and filtration",
    ],
    correct_answer: "Polymerization, esterification, and dyeing processes",
  },
  {
    index: 503,
    question:
      "How does understanding the chemistry of food contribute to improvements in agriculture and food production?",
    options: [
      "By optimizing fertilizers, pesticides, and food preservation methods",
      "By ignoring chemical reactions",
      "By maximizing risks",
      "By minimizing precautions",
    ],
    correct_answer:
      "By optimizing fertilizers, pesticides, and food preservation methods",
  },
  {
    index: 504,
    question:
      "What are some examples of chemical reactions involved in the production of pharmaceutical drugs?",
    options: [
      "Synthesis, purification, and formulation processes",
      "Boiling, freezing, and melting",
      "Decomposition, synthesis, and displacement",
      "Diffusion, osmosis, and filtration",
    ],
    correct_answer: "Synthesis, purification, and formulation processes",
  },
  {
    index: 505,
    question:
      "How can an understanding of chemistry contribute to environmental sustainability?",
    options: [
      "By developing green chemistry principles and practices",
      "By avoiding chemical reactions",
      "By maximizing risks",
      "By minimizing precautions",
    ],
    correct_answer: "By developing green chemistry principles and practices",
  },
  {
    index: 506,
    question:
      "What are some examples of chemical reactions involved in the creation of household cleaning products?",
    options: [
      "Saponification, oxidation, and disinfection processes",
      "Boiling, freezing, and melting",
      "Decomposition, synthesis, and displacement",
      "Diffusion, osmosis, and filtration",
    ],
    correct_answer: "Saponification, oxidation, and disinfection processes",
  },
  {
    index: 507,
    question:
      "How does chemistry contribute to advancements in medical diagnostics and imaging?",
    options: [
      "Through the development of contrast agents and diagnostic tests",
      "By avoiding chemical reactions",
      "By maximizing risks",
      "By minimizing precautions",
    ],
    correct_answer:
      "Through the development of contrast agents and diagnostic tests",
  },
  {
    index: 508,
    question:
      "What are some examples of chemical reactions involved in the production of personal care and beauty products?",
    options: [
      "Esterification, polymerization, and emulsification",
      "Boiling, freezing, and melting",
      "Decomposition, synthesis, and displacement",
      "Diffusion, osmosis, and filtration",
    ],
    correct_answer: "Esterification, polymerization, and emulsification",
  },
];