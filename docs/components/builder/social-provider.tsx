import { SVGProps } from "react";

export const socialProviders = {
	apple: {
		Icon: (props: SVGProps<any>) => (
			<svg
				{...props}
				xmlns="http://www.w3.org/2000/svg"
				width="1em"
				height="1em"
				viewBox="0 0 24 24"
			>
				<path
					fill="currentColor"
					d="M17.05 20.28c-.98.95-2.05.8-3.08.35c-1.09-.46-2.09-.48-3.24 0c-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8c1.18-.24 2.31-.93 3.57-.84c1.51.12 2.65.72 3.4 1.8c-3.12 1.87-2.38 5.98.48 7.13c-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25c.29 2.58-2.34 4.5-3.74 4.25"
				></path>
			</svg>
		),
		stringIcon: `<svg
				xmlns="http://www.w3.org/2000/svg"
				width="1em"
				height="1em"
				viewBox="0 0 24 24"
			>
				<path
					fill="currentColor"
					d="M17.05 20.28c-.98.95-2.05.8-3.08.35c-1.09-.46-2.09-.48-3.24 0c-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8c1.18-.24 2.31-.93 3.57-.84c1.51.12 2.65.72 3.4 1.8c-3.12 1.87-2.38 5.98.48 7.13c-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25c.29 2.58-2.34 4.5-3.74 4.25"
				></path>
			</svg>`,
	},
	dropbox: {
		Icon: (props: SVGProps<any>) => (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="1em"
				height="1em"
				viewBox="0 0 24 24"
				{...props}
			>
				<g fill="none" fillRule="evenodd">
					<path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></path>
					<path
						fill="currentColor"
						d="m11.998 13.503l2.879 1.662c.426.246.923.34 1.365.34c.443 0 .94-.094 1.367-.34l.587-.34V17a1 1 0 0 1-.5.866l-5.196 3a1 1 0 0 1-1 0l-5.196-3a1 1 0 0 1-.5-.866v-2.172l.583.337c.426.246.923.34 1.366.34c.442 0 .939-.094 1.366-.34zM6.887 3.5c.434-.251 1.115-.274 1.594-.068l.138.068l3.379 1.95l3.379-1.95c.434-.251 1.115-.274 1.594-.068l.138.068l4.242 2.45c.447.257.476.664.09.942l-.09.057l-3.378 1.95l3.378 1.95c.447.258.476.665.09.943l-.09.057l-4.242 2.45c-.435.25-1.116.273-1.595.068l-.137-.068l-3.38-1.951l-3.378 1.95c-.435.252-1.116.274-1.595.07l-.137-.07l-4.243-2.449c-.447-.257-.476-.665-.09-.942l.09-.058L6.022 8.9L2.644 6.95c-.447-.257-.476-.665-.09-.942l.09-.058zm5.546 2.702c-.205-.119-.52-.136-.755-.051l-.111.05l-4.243 2.45c-.212.122-.236.313-.07.45l.07.05l4.243 2.449c.205.118.52.135.755.05l.111-.05l4.243-2.45c.212-.122.236-.312.07-.45l-.07-.05z"
					></path>
				</g>
			</svg>
		),
		stringIcon: `<svg
				xmlns="http://www.w3.org/2000/svg"
				width="1em"
				height="1em"
				viewBox="0 0 24 24"
			>
				<g fill="none" fillRule="evenodd">
					<path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></path>
					<path
						fill="currentColor"
						d="m11.998 13.503l2.879 1.662c.426.246.923.34 1.365.34c.443 0 .94-.094 1.367-.34l.587-.34V17a1 1 0 0 1-.5.866l-5.196 3a1 1 0 0 1-1 0l-5.196-3a1 1 0 0 1-.5-.866v-2.172l.583.337c.426.246.923.34 1.366.34c.442 0 .939-.094 1.366-.34zM6.887 3.5c.434-.251 1.115-.274 1.594-.068l.138.068l3.379 1.95l3.379-1.95c.434-.251 1.115-.274 1.594-.068l.138.068l4.242 2.45c.447.257.476.664.09.942l-.09.057l-3.378 1.95l3.378 1.95c.447.258.476.665.09.943l-.09.057l-4.242 2.45c-.435.25-1.116.273-1.595.068l-.137-.068l-3.38-1.951l-3.378 1.95c-.435.252-1.116.274-1.595.07l-.137-.07l-4.243-2.449c-.447-.257-.476-.665-.09-.942l.09-.058L6.022 8.9L2.644 6.95c-.447-.257-.476-.665-.09-.942l.09-.058zm5.546 2.702c-.205-.119-.52-.136-.755-.051l-.111.05l-4.243 2.45c-.212.122-.236.313-.07.45l.07.05l4.243 2.449c.205.118.52.135.755.05l.111-.05l4.243-2.45c.212-.122.236-.312.07-.45l-.07-.05z"
					></path>
				</g>
			</svg>`,
	},
	discord: {
		Icon: (props: SVGProps<any>) => (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="1em"
				height="1em"
				viewBox="0 0 24 24"
				{...props}
			>
				<path
					fill="currentColor"
					d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.1.1 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.1 16.1 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12m6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12"
				></path>
			</svg>
		),
		stringIcon: `<svg
				xmlns="http://www.w3.org/2000/svg"
				width="1em"
				height="1em"
				viewBox="0 0 24 24"
			>
				<path
					fill="currentColor"
					d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.1.1 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.1 16.1 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12m6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12"
				></path>
			</svg>`,
	},
	facebook: {
		Icon: (props: SVGProps<any>) => (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="1em"
				height="1em"
				viewBox="0 0 24 24"
				{...props}
			>
				<path
					d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325 1.42-3.592 3.5-3.592c.699-.002 1.399.034 2.095.107v2.42h-1.435c-1.128 0-1.348.538-1.348 1.325v1.735h2.697l-.35 2.725h-2.348V21H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"
					fill="currentColor"
				></path>
			</svg>
		),
		stringIcon: `<svg
				xmlns="http://www.w3.org/2000/svg"
				width="1em"
				height="1em"
				viewBox="0 0 24 24"
			>
				<path
					d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325 1.42-3.592 3.5-3.592c.699-.002 1.399.034 2.095.107v2.42h-1.435c-1.128 0-1.348.538-1.348 1.325v1.735h2.697l-.35 2.725h-2.348V21H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"
					fill="currentColor"
				></path>
			</svg>`,
	},
	github: {
		Icon: (props: SVGProps<any>) => (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="1em"
				height="1em"
				viewBox="0 0 24 24"
				{...props}
			>
				<path
					fill="currentColor"
					d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
				></path>
			</svg>
		),
		stringIcon: `<svg
				xmlns="http://www.w3.org/2000/svg"
				width="1em"
				height="1em"
				viewBox="0 0 24 24"
			>
				<path
					fill="currentColor"
					d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
				></path>
			</svg>`,
	},
	gitlab: {
		Icon: (props: SVGProps<any>) => (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="1em"
				height="1em"
				viewBox="0 0 24 24"
				{...props}
			>
				<path
					fill="currentColor"
					d="m22.749 9.769l-.031-.08l-3.027-7.9a.79.79 0 0 0-.782-.495a.8.8 0 0 0-.456.17a.8.8 0 0 0-.268.408L16.14 8.125H7.865L5.822 1.872a.8.8 0 0 0-.269-.409a.81.81 0 0 0-.926-.05c-.14.09-.25.22-.312.376L1.283 9.684l-.03.08a5.62 5.62 0 0 0 1.864 6.496l.01.008l.028.02l4.61 3.453l2.282 1.726l1.39 1.049a.935.935 0 0 0 1.13 0l1.389-1.05l2.281-1.726l4.639-3.473l.011-.01A5.62 5.62 0 0 0 22.75 9.77"
				></path>
			</svg>
		),
		stringIcon: `<svg
				xmlns="http://www.w3.org/2000/svg"
				width="1em"
				height="1em"
				viewBox="0 0 24 24"
			>
				<path
					fill="currentColor"
					d="m22.749 9.769l-.031-.08l-3.027-7.9a.79.79 0 0 0-.782-.495a.8.8 0 0 0-.456.17a.8.8 0 0 0-.268.408L16.14 8.125H7.865L5.822 1.872a.8.8 0 0 0-.269-.409a.81.81 0 0 0-.926-.05c-.14.09-.25.22-.312.376L1.283 9.684l-.03.08a5.62 5.62 0 0 0 1.864 6.496l.01.008l.028.02l4.61 3.453l2.282 1.726l1.39 1.049a.935.935 0 0 0 1.13 0l1.389-1.05l2.281-1.726l4.639-3.473l.011-.01A5.62 5.62 0 0 0 22.75 9.77"
				></path>
			</svg>`,
	},
	google: {
		Icon: (props: SVGProps<any>) => (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="0.98em"
				height="1em"
				viewBox="0 0 256 262"
			>
				<path
					fill="#4285F4"
					d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
				></path>
				<path
					fill="#34A853"
					d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
				></path>
				<path
					fill="#FBBC05"
					d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"
				></path>
				<path
					fill="#EB4335"
					d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
				></path>
			</svg>
		),
		stringIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="0.98em" height="1em" viewBox="0 0 256 262">
				<path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path>
				<path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path>
				<path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"></path>
				<path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path>
			</svg>`,
	},
	linkedin: {
		Icon: (props: SVGProps<any>) => (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="1em"
				height="1em"
				viewBox="0 0 24 24"
				{...props}
			>
				<path
					fill="currentColor"
					d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
				></path>
			</svg>
		),
		stringIcon: `<svg
				xmlns="http://www.w3.org/2000/svg"
				width="1em"
				height="1em"
				viewBox="0 0 24 24"
			>
				<path
					fill="currentColor"
					d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
				></path>
			</svg>`,
	},
	microsoft: {
		Icon: (props: SVGProps<any>) => (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="1.2em"
				height="1.2em"
				viewBox="0 0 24 24"
				{...props}
			>
				<path
					fill="currentColor"
					d="M2 3h9v9H2zm9 19H2v-9h9zM21 3v9h-9V3zm0 19h-9v-9h9z"
				></path>
			</svg>
		),
		stringIcon: `<svg
				xmlns="http://www.w3.org/2000/svg"
				width="1em"
				height="1em"
				viewBox="0 0 24 24"
			>
				<path
					fill="currentColor"
					d="M2 3h9v9H2zm9 19H2v-9h9zM21 3v9h-9V3zm0 19h-9v-9h9z"
				></path>
			</svg>`,
	},
	twitch: {
		Icon: (props: SVGProps<any>) => (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="1em"
				height="1em"
				viewBox="0 0 24 24"
				{...props}
			>
				<path
					fill="currentColor"
					d="M11.64 5.93h1.43v4.28h-1.43m3.93-4.28H17v4.28h-1.43M7 2L3.43 5.57v12.86h4.28V22l3.58-3.57h2.85L20.57 12V2m-1.43 9.29l-2.85 2.85h-2.86l-2.5 2.5v-2.5H7.71V3.43h11.43Z"
				></path>
			</svg>
		),
		stringIcon: `<svg
				xmlns="http://www.w3.org/2000/svg"
				width="1.2em"
				height="1.2em"
				viewBox="0 0 24 24"
			>
				<path
					fill="currentColor"
					d="M11.64 5.93h1.43v4.28h-1.43m3.93-4.28H17v4.28h-1.43M7 2L3.43 5.57v12.86h4.28V22l3.58-3.57h2.85L20.57 12V2m-1.43 9.29l-2.85 2.85h-2.86l-2.5 2.5v-2.5H7.71V3.43h11.43Z"
				></path>
			</svg>`,
	},
	spotify: {
		Icon: (props: SVGProps<any>) => (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="1em"
				height="1em"
				viewBox="0 0 24 24"
				{...props}
			>
				<path
					fill="currentColor"
					d="M12.001 2c-5.5 0-10 4.5-10 10s4.5 10 10 10s10-4.5 10-10s-4.45-10-10-10m3.75 14.65c-2.35-1.45-5.3-1.75-8.8-.95c-.35.1-.65-.15-.75-.45c-.1-.35.15-.65.45-.75c3.8-.85 7.1-.5 9.7 1.1c.35.15.4.55.25.85c-.2.3-.55.4-.85.2m1-2.7c-2.7-1.65-6.8-2.15-9.95-1.15c-.4.1-.85-.1-.95-.5s.1-.85.5-.95c3.65-1.1 8.15-.55 11.25 1.35c.3.15.45.65.2 1s-.7.5-1.05.25M6.3 9.75c-.5.15-1-.15-1.15-.6c-.15-.5.15-1 .6-1.15c3.55-1.05 9.4-.85 13.1 1.35c.45.25.6.85.35 1.3c-.25.35-.85.5-1.3.25C14.7 9 9.35 8.8 6.3 9.75"
				></path>
			</svg>
		),
		stringIcon: `<svg
				xmlns="http://www.w3.org/2000/svg"
				width="1.2em"
				height="1.2em"
				viewBox="0 0 24 24"
			>
				<path
					fill="currentColor"
					d="M12.001 2c-5.5 0-10 4.5-10 10s4.5 10 10 10s10-4.5 10-10s-4.45-10-10-10m3.75 14.65c-2.35-1.45-5.3-1.75-8.8-.95c-.35.1-.65-.15-.75-.45c-.1-.35.15-.65.45-.75c3.8-.85 7.1-.5 9.7 1.1c.35.15.4.55.25.85c-.2.3-.55.4-.85.2m1-2.7c-2.7-1.65-6.8-2.15-9.95-1.15c-.4.1-.85-.1-.95-.5s.1-.85.5-.95c3.65-1.1 8.15-.55 11.25 1.35c.3.15.45.65.2 1s-.7.5-1.05.25M6.3 9.75c-.5.15-1-.15-1.15-.6c-.15-.5.15-1 .6-1.15c3.55-1.05 9.4-.85 13.1 1.35c.45.25.6.85.35 1.3c-.25.35-.85.5-1.3.25C14.7 9 9.35 8.8 6.3 9.75"
				></path>
			</svg>`,
	},
	tiktok: {
		Icon: (props?: SVGProps<any>) => (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="0.88em"
				height="1em"
				viewBox="0 0 448 512"
				{...props}
			>
				<path
					fill="currentColor"
					d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z"
				/>
			</svg>
		),
		stringIcon: `<svg
				xmlns="http://www.w3.org/2000/svg"
				width="0.88em"
				height="1em"
				viewBox="0 0 448 512"
				{...props}
			>
				<path
					fill="currentColor"
					d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z"
				/>
			</svg>`,
	},
	twitter: {
		Icon: (props?: SVGProps<any>) => (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="0.88em"
				height="1em"
				viewBox="0 0 448 512"
				{...props}
			>
				<path
					fill="currentColor"
					d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm297.1 84L257.3 234.6L379.4 396h-95.6L209 298.1L123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5l78.2-89.5zm-37.8 251.6L153.4 142.9h-28.3l171.8 224.7h26.3z"
				></path>
			</svg>
		),
		stringIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 448 512"><path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm297.1 84L257.3 234.6L379.4 396h-95.6L209 298.1L123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5l78.2-89.5zm-37.8 251.6L153.4 142.9h-28.3l171.8 224.7h26.3z"></path></svg>`,
	},
	roblox: {
		Icon: (props?: SVGProps<any>) => (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="1.2em"
				height="1.2em"
				viewBox="0 0 267 267"
				{...props}
			>
				<path
					fill="currentColor"
					d="M 56.926 0.986 L 1.01 210.05 L 210.073 266.014 L 265.989 56.951 L 56.926 0.986 Z M 112.15 96.988 L 170.481 112.619 L 154.849 170.95 L 96.47 155.318 L 112.15 96.988 Z"
				></path>
			</svg>
		),
		stringIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 267 267"><path xmlns="http://www.w3.org/2000/svg" fill="currentColor" d="M 56.926 0.986 L 1.01 210.05 L 210.073 266.014 L 265.989 56.951 L 56.926 0.986 Z M 112.15 96.988 L 170.481 112.619 L 154.849 170.95 L 96.47 155.318 L 112.15 96.988 Z"/></svg>`,
	},
	vk: {
		Icon: (props?: SVGProps<any>) => (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="1.2em"
				height="1.2em"
				viewBox="0 0 20 20"
				{...props}
			>
				<path
					fill="currentColor"
					fillRule="evenodd"
					d="M17.802 12.298s1.617 1.597 2.017 2.336a.1.1 0 0 1 .018.035q.244.409.123.645c-.135.261-.592.392-.747.403h-2.858c-.199 0-.613-.052-1.117-.4c-.385-.269-.768-.712-1.139-1.145c-.554-.643-1.033-1.201-1.518-1.201a.6.6 0 0 0-.18.03c-.367.116-.833.639-.833 2.032c0 .436-.344.684-.585.684H9.674c-.446 0-2.768-.156-4.827-2.327C2.324 10.732.058 5.4.036 5.353c-.141-.345.155-.533.475-.533h2.886c.387 0 .513.234.601.444c.102.241.48 1.205 1.1 2.288c1.004 1.762 1.621 2.479 2.114 2.479a.53.53 0 0 0 .264-.07c.644-.354.524-2.654.494-3.128c0-.092-.001-1.027-.331-1.479c-.236-.324-.638-.45-.881-.496c.065-.094.203-.238.38-.323c.441-.22 1.238-.252 2.029-.252h.439c.858.012 1.08.067 1.392.146c.628.15.64.557.585 1.943c-.016.396-.033.842-.033 1.367c0 .112-.005.237-.005.364c-.019.711-.044 1.512.458 1.841a.4.4 0 0 0 .217.062c.174 0 .695 0 2.108-2.425c.62-1.071 1.1-2.334 1.133-2.429c.028-.053.112-.202.214-.262a.5.5 0 0 1 .236-.056h3.395c.37 0 .621.056.67.196c.082.227-.016.92-1.566 3.016c-.261.349-.49.651-.691.915c-1.405 1.844-1.405 1.937.083 3.337"
					clipRule="evenodd"
				/>
			</svg>
		),
		stringIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 448 512"><path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm297.1 84L257.3 234.6L379.4 396h-95.6L209 298.1L123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5l78.2-89.5zm-37.8 251.6L153.4 142.9h-28.3l171.8 224.7h26.3z"></path></svg>`,
	},
	zoom: {
		Icon: (props?: SVGProps<any>) => (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="1.2em"
				height="1.2em"
				viewBox="0 0 16 16"
			>
				<path
					fill="currentColor"
					fillRule="evenodd"
					d="M1.45 3.334C.648 3.334 0 3.982 0 4.783v4.986c0 1.6 1.298 2.898 2.898 2.898h6.986c.8 0 1.45-.649 1.45-1.45V6.233a2.9 2.9 0 0 0-2.899-2.899zM16 4.643v6.715c0 .544-.618.86-1.059.539l-2.059-1.498a1.33 1.33 0 0 1-.549-1.078V6.679c0-.427.204-.827.55-1.078l2.058-1.498a.667.667 0 0 1 1.059.54"
					clipRule="evenodd"
				></path>
			</svg>
		),
		stringIcon: `<svg
						xmlns="http://www.w3.org/2000/svg"
						width="1.2em"
						height="1.2em"
						viewBox="0 0 16 16"
					>
						<path
							fill="currentColor"
							fillRule="evenodd"
							d="M1.45 3.334C.648 3.334 0 3.982 0 4.783v4.986c0 1.6 1.298 2.898 2.898 2.898h6.986c.8 0 1.45-.649 1.45-1.45V6.233a2.9 2.9 0 0 0-2.899-2.899zM16 4.643v6.715c0 .544-.618.86-1.059.539l-2.059-1.498a1.33 1.33 0 0 1-.549-1.078V6.679c0-.427.204-.827.55-1.078l2.058-1.498a.667.667 0 0 1 1.059.54"
							clipRule="evenodd"
						></path>
					</svg>`,
	},
};
