const plugin = require("tailwindcss/plugin");
// console.log(defaultTheme);
module.exports = {
	content: ["./src/dist/**/*.{html,js}", "./src/pages/**/*.{html,pug}", "./src/components/**/*.{html,pug,sass,js}"],
	theme: {
		aspectRatio: {
			auto: "auto",
			square: "1 / 1",
			video: "16 / 9",
			1: "1",
			2: "2",
			3: "3",
			4: "4",
			5: "5",
			6: "6",
			7: "7",
			8: "8",
			9: "9",
			10: "10",
			11: "11",
			12: "12",
			13: "13",
			14: "14",
			15: "15",
			16: "16",
		},
		borderWidth: {
			DEFAULT: "1px",
			0: "0px",
			2: "calc(2/1920*100rem)",
			3: "calc(3/1920*100rem)",
			4: "calc(4/1920*100rem)",
			8: "calc(8/1920*100rem)",
		},
		container: {
			center: true,
			padding: {
				DEFAULT: "15px",
				xl: "calc(30/1920*100rem)",
			},
			screens: {
				xs: "400px",
				sm: "576px",
				md: "768px",
				lg: "1024px",
				xl: "calc(1372/1920*100rem)",
			}, 
		},
		fontFamily: {
			primary: ["League Spartan", "sans-serif"],
			secondary: ["Italianno", "cursive"],
			awesome: ['"Font Awesome 6 Pro"'],
		},
		fontSize: {
			0: ["0", { lineHeight: "0" }],
			xs: ["clamp(12px,calc(12/1920*100rem),calc(12/1920*100rem))"],
			sm: ["clamp(14px,calc(14/1920*100rem),calc(14/1920*100rem))"],
			base: ["clamp(14px,calc(16/1920*100rem),calc(16/1920*100rem))"],
			"15px": ["clamp(15px,calc(15/1920*100rem),calc(15/1920*100rem))"],
			lg: ["calc(18/1920*100rem)"],
			xl: ["calc(20/1920*100rem)"],
			"2xl": ["calc(24/1920*100rem)"],
			"3xl": ["calc(30/1920*100rem)"],
			"4xl": ["calc(36/1920*100rem)"],
			"5xl": ["calc(40/1920*100rem)"],
			"6xl": ["calc(48/1920*100rem)"],
			"7xl": ["calc(72/1920*100rem)"],
			"8xl": ["calc(84/1920*100rem)"],
			"9xl": ["calc(96/1920*100rem)"],
			28: ["calc(28/1920*100rem)"],
			30: ["calc(30/1920*100rem)"],
			38: ["calc(38/1920*100rem)"],
			32: ["calc(32/1920*100rem)"],
			40: ["calc(40/1920*100rem)"],
			50: ["calc(50/1920*100rem)"],
			42: ["calc(42/1920*100rem)"],
			44: ["calc(44/1920*100rem)"],
			64: ["calc(64/1920*100rem)"],
		},
		screens: {
			xs: "400px /* 400px */", // => @media (min-width: 400px) { ... }
			sm: "576px /* 576px */", // => @media (min-width: 576px) { ... }
			md: "768px /* 768px */", // => @media (min-width: 768px) { ... }
			lg: "1024px /* 1024px */", // => @media (min-width: 1024px) { ... }
			xl: "1280px /* 1280px */", // => @media (min-width: 1280px) { ... }
			"2xl": "1440px /* 1440px */", // => @media (min-width: 1440px) { ... }
		},
		spacing: {
			0: "0px",
			px: "1px",
			0.25: "calc(1/1920*100rem) /* 1px */",
			0.5: "calc(2/1920*100rem) /* 2px */",
			0.75: "calc(3/1920*100rem) /* 3px */",
			1: "calc(4/1920*100rem) /* 4px */",
			1.25: "calc(5/1920*100rem) /* 5px */",
			1.5: "calc(6/1920*100rem) /* 6px */",
			1.75: "calc(7/1920*100rem) /* 7px */",
			2: "calc(8/1920*100rem) /* 8px */",
			2.25: "calc(9/1920*100rem) /* 9px */",
			2.5: "calc(10/1920*100rem) /* 10px */",
			2.75: "calc(11/1920*100rem) /* 11px */",
			3: "calc(12/1920*100rem) /* 12px */",
			3.15: "calc(12.5/1920*100rem) /* 12.5px */",
			3.25: "calc(13/1920*100rem) /* 13px */",
			3.5: "calc(14/1920*100rem) /* 14px */",
			3.75: "calc(15/1920*100rem) /* 15px */",
			4: "calc(16/1920*100rem) /* 16px */",
			4.25: "calc(17/1920*100rem) /* 17px */",
			4.5: "calc(18/1920*100rem) /* 18px */",
			4.75: "calc(19/1920*100rem) /* 19px */",
			5: "calc(20/1920*100rem) /* 20px */",
			5.5: "calc(22/1920*100rem) /* 22px */",
			6: "calc(24/1920*100rem) /* 24px */",
			6.25: "calc(25/1920*100rem) /* 25 */",
			6.5: "calc(26/1920*100rem) /* 26px */",
			7: "calc(28/1920*100rem) /* 28px */",
			7.5: "calc(30/1920*100rem) /* 30px */",
			8: "calc(32/1920*100rem) /* 32px */",
			8.5: "calc(34/1920*100rem) /* 34px */",
			8.75: "calc(35/1920*100rem) /* 35px */",
			9: "calc(36/1920*100rem) /* 36px */",
			9.5: "calc(38/1920*100rem) /* 38px */",
			10: "calc(40/1920*100rem) /* 40px */",
			11: "calc(44/1920*100rem) /* 44px */",
			12: "calc(48/1920*100rem) /* 48px */",
			12.5: "calc(50/1920*100rem) /* 50px */",
			13: "calc(52/1920*100rem) /* 52px */",
			14: "calc(56/1920*100rem) /* 56px */",
			15: "calc(60/1920*100rem) /* 60px */",
			15.5: "calc(62/1920*100rem) /* 62px */",
			16: "calc(64/1920*100rem) /* 64px */",
			17: "calc(68/1920*100rem) /* 68px */",
			17.5: "calc(70/1920*100rem) /* 70px */",
			18: "calc(72/1920*100rem) /* 72px */",
			19: "calc(76/1920*100rem) /* 76px */",
			20: "calc(80/1920*100rem) /* 80px */",
			22.5: "calc(90/1920*100rem) /* 90px */",
			23: "calc(94/1920*100rem) /* 94px */",
			24: "calc(96/1920*100rem) /* 96px */",
			25: "calc(100/1920*100rem) /* 100px */",
			27.5: "calc(110/1920*100rem) /* 110px */",
			28: "calc(112/1920*100rem) /* 112px */",
			30: "calc(120/1920*100rem) /* 120px */",
			32: "calc(128/1920*100rem) /* 128px */",
			36: "calc(144/1920*100rem) /* 144px */",
			40: "calc(160/1920*100rem) /* 160px */",
			42: "calc(160/1920*100rem) /* 168px */",
			44: "calc(176/1920*100rem) /* 176px */",
			48: "calc(192/1920*100rem) /* 192px */",
			48: "calc(192/1920*100rem) /* 192px */",
			50: "calc(200/1920*100rem) /* 200px */",
			56: "calc(224/1920*100rem) /* 224px */",
			60: "calc(240/1920*100rem) /* 240px */",
			full: "100%",
			screen: "100vw",
			"2full": "200%",
		},
		scale: {
			0: "0",
			50: ".5",
			70: ".70",
			75: ".75",
			80: ".8",
			85: ".85",
			90: ".9",
			95: ".95",
			100: "1",
			105: "1.05",
			110: "1.1",
			115: "1.15",
			120: "1.2",
			125: "1.25",
			150: "1.5",
			200: "2",
		},
		opacity: {
			0: "0",
			10: "0.1",
			15: "0.15",
			20: "0.2",
			25: "0.25",
			30: "0.3",
			35: "0.35",
			40: "0.4",
			45: "0.45",
			50: "0.5",
			55: "0.55",
			60: "0.6",
			65: "0.65",
			70: "0.7",
			75: "0.75",
			80: "0.8",
			85: "0.85",
			90: "0.9",
			95: "0.95",
			100: "1",
		},
		outlineOffset: {
			0: "0px",
			1: "1px",
			2: "calc(2/1920*100rem)",
			3: "calc(3/1920*100rem)",
			4: "calc(4/1920*100rem)",
			5: "calc(5/1920*100rem)",
			8: "calc(8/1920*100rem)",
		},
		extend: {
			colors: {
				transparent: "transparent",
				primary: {
					1: "#001AA6",
					2: "#0020CB",
					3: "#0226E1",
					4: "#062DFA",
					5: "#1E42FF",
					6: "#3E5DFF",
					7: "#4F6BFF",
					8: "#4BA9FF",
					9: "#A6C4FF",
					10: "#CEDFFF",
				}, 
				secondary:{
					1: "#221714",
					2: "#FAFAF5",
					3: "#F5F5F7",
					4: "#F5F2F0",
				},
				"body-text": {
					11: "#111111",
					66: "#666666",
					33: "#333333",
					55: "#555555",
					99: "#999999",
				},
				stroke: {
					ED: "#EDEDED",
					E0: "#E0E0E0",
					CC: "#CCCCCC",
					D1: "#D1D1D1",
					D9: "#D9D9D9",
				},
				background: {
					EE: "#EEEEEE",
					F5: "#F5F5F5",
					'gray-50': "#E6E8EC",
				},
				grayds: {
					100: "#CCD0D7",
				},
				black: "#000000",
				white: "#FFFFFF",
				red: {
					50: "#FAE9EA",
					100: "#F3D3D5",
					200: "#E7A6AA",
					300: "#DC7A80",
					400: "#D04D55",
					500: "#C4212B",
					600: "#931920",
					700: "#621116",
					800: "#31080B",
					900: "#140304",
				},
				blue: {
					50: "#E7EEF4",
					100: "#CEDCE9",
					200: "#9CB9D2",
					300: "#6B97BC",
					400: "#3974A5",
					500: "#08518F",
					600: "#063D6B",
					700: "#042948",
					800: "#021424",
					900: "#01080E",
				},
				"gray-black":{
					900: "#050505",
				},

			},
			animation: {
				"spin-circle": "rotateCircle 20s linear infinite",
				"fade-in": "fadeIn 2s linear infinite",
				spin: "spin 2s linear infinite",
			},
			backgroundImage: ({ theme }) => ({
				"linear-1": `linear-gradient(90deg, #181830 -0.01%, #1D1D38 19.26%, #141228 40.12%, #2C223A 75.47%, #231B33 99.98%)`,
			}),
			backgroundPosition: {
				"pos-100-0": "100% 0%",
			},
			backgroundSize: {
				"0-100": "0 100%",
				"100-100": "100% 100%",
				"200-100": "200% 100%",
			},
			blur: {
				DEFAULT: "12.5px",
			},
			borderRadius: {
				0.25: "calc(1/1920*100rem) /* 1px */",
				0.5: "calc(2/1920*100rem) /* 2px */",
				1: "calc(4/1920*100rem) /* 4px */",
				1.25: "calc(5/1920*100rem) /* 5px */",
				2.5: "calc(10/1920*100rem) /* 10px */",
				3.75: "calc(15/1920*100rem) /* 15px */",
				5: "calc(20/1920*100rem) /* 20px */",
				12.5: "calc(50/1920*100rem) /* 50px */",
				25: "calc(100/1920*100rem) /* 100px */",
			},
			boxShadow: {
				number: "4px 4px 5px rgba(0, 0, 0, 0.15)",
				"style-1": `5px 10px 25px rgba(0, 0, 0, 0.15)`,
				"style-2": `2px 4px 6px rgba(0, 0, 0, 0.25)`,
				"style-3": `5px 5px 0px rgba(0, 0, 0, 0.25)`,
				"drop-shadow-1": `5px 5px 0px #193A00`,
				"drop-shadow-2": `0px 6px 10px rgba(0, 0, 0, 0.25)`,
			},
			lineClamp: {
				6: "6",
				7: "7",
				8: "8",
				9: "9",
				10: "10",
			},
			lineHeight: {
				1.1: "1.1",
				1.125: "1.125",
				1.166666: "1.166666",
				1.2: "1.2",
				1.22222: "1.22222",
				1.25: "1.25",
				1.3: "1.3",
				1.33333: "1.33333",
				1.4: "1.4",
				1.44: "1.44",
				1.5: "1.5",
			},
			keyframes: {
				bgGradient: {
					"0%": { backgroundPosition: "0% 50%" },
					"50%": { backgroundPosition: "100% 50%" },
					"100%": { backgroundPosition: "0% 50%" },
				},
				fadeIn: {
					"0%": { opacity: "0" },
					"50%": { opacity: "1" },
					"100%": { opacity: "0" },
				},
				rotateCircle: {
					"0%": { transform: "translate(-50%, -50%) rotate(0)" },
					"100%": {
						transform: "translate(-50%, -50%) rotate(360deg)",
					},
				},
				spin: {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(360deg)" },
				},
			},
			zIndex: {
				1: "1",
				2: "2",
				11: "11",
				12: "12",
				100: "100",
				999: "999",
				1000: "1000",
			},
		},
	},
	corePlugins: {
		aspectRatio: false,
	},
	variants: {
		aspectRatio: ["responsive", "hover"],
		lineClamp: ["responsive", "hover"],
	},
	plugins: [
		plugin(function ({ addBase, addComponents, addVariant, matchUtilities, addUtilities, theme }) {
			addBase({});
			addComponents({
				".flex-center": {
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				},
				".flex-between": {
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
				},
				".overflow-overlay": {
					overflowY: "overlay",
				},
				".absolute-full": {
					position: "absolute",
					top: "0",
					left: "0",
					width: "100%",
					height: "100%",
				},
			});
			matchUtilities(
				{
					sq: value => ({
						height: value,
						width: value,
					}),
				},
				{ values: theme("spacing") }
			);
			const newUtilities = {
				".horizontal-tb": {
					writingMode: "horizontal-tb",
				},
				".vertical-rl": {
					writingMode: "vertical-rl",
				},
				".vertical-lr": {
					writingMode: "vertical-lr",
				},
			};
			addUtilities(newUtilities);
			addVariant("optional", "&:optional");
			addVariant("hocus", ["&:hover", "&:focus"]);
			addVariant("supports-grid", "@supports (display: grid)");
		}),
	],
};