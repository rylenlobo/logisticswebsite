## 1️⃣ **Framework & Styling Requirements**

- **Use Radix UI** components exclusively to ensure consistency.
- **Use Semantic HTML**. to ensure the site is indexed properly
- **Use Tailwind CSS** for styling, strictly adhering to the provided custom variables.
- **All components must be reusable** – avoid styling components inline or individually. Instead:

  - Create **base-styled Radix UI components ** with Tailwind variables and store them inside components/ui.
  - Store these styled components in separate files.
  - **Export and reuse them**

  ```css
  root {
    --radius: 0.625rem;

    --background: #ffffff; /* White background */
    --foreground: #971934; /* Deep burgundy for text and primary elements */

    --primary: #971934; /* Main brand color (Burgundy red from logo) */
    --primary-foreground: #ffffff; /* White text on primary background */

    --secondary: #a58663; /* Warm beige for section backgrounds */
    --secondary-foreground: #000000; /* Dark text on secondary background */

    --card: #ffffff; /* White background for cards */
    --card-foreground: #971934; /* Burgundy text on cards */

    --popover: #ffffff; /* Popovers with white background */
    --popover-foreground: #961732; /* Slightly different burgundy for contrast */

    --muted: #fdfdfd; /* Very light gray for subtle elements */
    --muted-foreground: #ab8f6e; /* Soft brown for muted text */

    --accent: #ab8f6e; /* Light brown for minor highlights */
    --accent-foreground: #000000; /* Dark text on accent background */

    --destructive: #961732; /* Strong burgundy for warnings/errors */

    --border: #a58663; /* Beige-tan for soft border color */
    --input: #ffffff; /* White input backgrounds */
    --ring: #971934; /* Burgundy for focus rings */
  }
  ```
