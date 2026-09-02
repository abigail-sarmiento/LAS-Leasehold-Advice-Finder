# Leasehold Advisory Service - Leasehold Advice Finder

**Name:** Abigail Sarmiento  
**Date:** 2 September 2026

### 💻 **Live demo:** [Leasehold Advice Finder](https://leasehold-advisory-service-advice-finder.vercel.app/)

## ❓ Problem Statement

Leaseholders and park homeowners can sometimes struggle to understand what their legal situation means and what they should do next. They may not be familiar with complex legal terminology or know where to begin looking for the relevant information. This can leave people feeling stressed and overwhelmed, and will approach organisations such as the Leasehold Advisory Service with similar questions, looking for accessible guidance.

## 💡 Proposed Approach

This digital prototype explores how users could be guided towards a clear and appropriate next step. It will involve a guided triage tool that combines free-text input with common scenarios, allowing them to describe their situation in their own words as well as a structured way to identify relevant guidance.

## 🧠 Assumptions

1. **Audience** - The primary users are leaseholders and park homeowners in England and Wales with varying levels of legal knowledge.
2. **Triage tool** - The prototype is intended to help users understand what their question relates to and find the most relevant next step, rather than provide personalised legal advice.
3. **Categories are defined based on existing information** - The triage system will use a relatively small set of predefined categories based on common leasehold and park-home enquiries.
4. **AI is a classification tool** - AI will be used in the first instance to classify a user's enquiry, but will not be used to generate legal advice or make decisions.

## 📋 Task Breakdown

Below is a breakdown of tasks that can be created into tickets in a project including an explanation of what "done" would look like.

| Task # | Task Description                          | Finished Criteria                                                                                                       |
| ------ | ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| 1      | Create enquiry screen                     | User can freely type their question/scenario or choose from a list of common situations that best matches their enquiry |
| 2      | Create triage questions                   | User are asked further targeted questions to better understand and categories their situation                           |
| 3      | Implement triage logic                    | From the user's answers, the system can categorise and present appropriate outcomes using LLM and database queries      |
| 4      | Create results page                       | User receives a clear and brief explanation of their situation and next-step recommendations                            |
| 5      | Link to existing guidance                 | User is provided with links to relevant Leasehold Advisory Service guidance                                             |
| 7      | Add testing                               | Key user flows and features are sufficiently covered by unit and integration testing                                    |
| 8      | Review accessibility, privacy performance | An audit on accessibility, privacy and performance is conducted using relevant tools, and any remediations are made     |

## ⚙️ Local Setup

### Prerequisites

- Node.js and npm
- A Gemini API key

### Installation

1. Clone the repository and move into the project directory.
2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env.local` file in the project root and add your Gemini API key:

   ```env
   GEMINI_API_KEY=your_api_key_here
   ```

   Keep this file private and do not commit the API key.

### Run Locally

Start the Vite development server:

```bash
npm run dev
```

### Useful Commands

```bash
npm run build       # Type-check and create a production build
npm run lint        # Run ESLint
npm run test:run    # Run the test suite once
npm run test        # Run Vitest in watch mode
```

## ⭐ Features

- Guided advice journey based on Leasehold Advisory Service information
- Choice of predefined leasehold situations covering essentials, costs, lease extensions, buying and selling, building management, disputes and shared ownership
- Free-text situation classification using Gemini AI
- Situation-specific questionnaire
- Results and resources page
- Feedback and contact sections on the results page

## 🚀 Future Improvements

- Replace dummy data with real data sourced from the LAS
- Add clearer loading, validation and error states for API requests and forms
- Replace placeholder results-page copy with tailored instructions based on the user's answers that uses LLM to gather information from LAS sources
- Use the answers from the guided questions to make resource recommendations more specific
- Add the optional ability for user's to input personal details (e.g. addresses, leasehold details) that can be used to provide additional context
- Implement a dedicated contact form so that user's may directly contact an agent who can help them resolve their issue
- Implement a backend service/database where LAS information can be stored and accessed

## ⚠️ Risks

### Testing

A set of unit tests were written in Vitest + React Testing Library to cover core behaviour of the application. These involved testing whether the relevant content/copy is rendered, that interactions and handlers are triggering with the correct variables, and varying states (e.g. disabled) are being displayed as expected.

My next steps would include: 
- Expanding unit test coverage across components, hooks and utilities
- Adding integration tests for the key user flows and API interactions
- Adding E2E tests using Playwright to test browser journeys
- Testing error states, loading states and unexpected API responses
- Introducing accessibility testing alongside automated and manual checks
- Adding performance and SEO testing

### Accessibility

axe DevTools - Web Accessibility Testing extension was utilised to run automated tests on each flow of the app.

Given the results from the accessibility testing, remediations were made to ensure all issues are addressed as given in the table below.

| Flow                             | Test Result                                                                                                                                                           | Issues                                                                                                                                                                                                        | Fixes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Home                             | <img width="1920" height="1046" alt="{95409374-28C8-4FF4-8B15-F31782C5749B}" src="https://github.com/user-attachments/assets/fabbd87d-18af-4526-8eed-0708464f2c5d" /> | N/A                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Help Finder - Choose Situation   | <img width="1920" height="1043" alt="{7CCC5DCB-89AC-4B6B-9DB6-459B53229F23}" src="https://github.com/user-attachments/assets/c06b565b-551c-4d20-9885-9ec836870e39" /> | <ul><li>Heading levels should only increase by one</li></ul>                                                                                                                                                  | <ul><li>Updated the headings so they follow the order/hierarchy from h1 to h3</li></ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Help Finder - Describe Situation | <img width="1920" height="1038" alt="image" src="https://github.com/user-attachments/assets/49a6c2b3-99e4-4e2a-bb2f-09d24ff9dd3c" />                                  | N/A                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Guided Questions                 | <img width="1920" height="1039" alt="image" src="https://github.com/user-attachments/assets/fe37dd42-e4ac-45b1-a03d-842d6468595e" />                                  | N/A                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Results page                     | <img width="1920" height="1039" alt="Results page" src="https://github.com/user-attachments/assets/11ebb8ac-a7cd-4649-bd37-6e5f4a3f9ab5" />                           | <ul><li>Elements must meet minimum colour contrast ratios</li><li>Form elements must have labels</li><li>Interactive controls must not be nested</li><li>Heading levels should only increase by one</li></ul> | <ul><li>Changed text colour of the 'Contact us' button to be a dark blue to provide sufficient contrast between its background and text</li><li>Added an aria-label attribute and placeholder text to the feedback form input textarea</li><li>Removed the wrapping <Button> component around the <a> element for the 'View more' links in the relevant guidance cards and the 'Contact us' button in the contact card</li><li>Updated contact card title from h4 to h3 to ensure correct semantic ordering of headings on page</li></ul> |

There is still a lot of accessibility testing I would have liked to conduct, such as:
- Manual testing of keyboard navigation, focus visibility and order, responsive behaviour, browser zoom, and colour contrast.
- Screen reader testing using a tool such as NVDA to verify headings, landmarks, form labels, errors, and dynamic content are communicated appropriately.
- Testing form validation and dynamic states

### Personal data & security

For the first iteration of this prototype, there is minimal risk to personal data and security since no sensitive or identifiable information is being requested or stored. There is some inherent risk with the use of the LLM when a user choose to describe their situation, but this is the same risk that applies with usage of any AI tool.

In the future, contact or personal details may be requested to get an even better understanding and context of the user's situation, but the necessary steps to safeguard this information, such as authentication, should be implemented.

## 🤖 AI Usage

Below are the instances where AI was used to develop this prototype:

- **Data scraping and creation:** AI was used to fetch data from the main Leasehold Advisory Service and create dummy data, including questions for the Guided Advice form, and guidance resources card information. For the latter, tt struggled with being able to differentiate between the 'Advice guides' and 'Topics' (which had further guides within), so I needed to carefully review it's outputs at this step.
- **Creating copy text:** I took inspiration from AI on simple and accessible copy text. It was mostly helpful in this case.
- **Assistance with setting up Gemini AI with Vercel:** I consulted AI to suggest an approach where I can use an LLM to execute a query that can be used to triage a user's input into one of the pre-defined categories. This includes the code for set-up and steps to connect it to a Vercel environment which worked well.
- **Styling updates:** AI helped to bring design suggestions and styling consistency throughout the components of the application. Some of these were not accurate, in which I stepped into the code and made my own changes.

## ✍️ Self Code Review

This prototype demonstrates how a user could be guided towards the right information in a simple and accessible way, addressing the core problem statement. The main strength of the current approach is its simplicity. The guided flow provides users with an alternative to knowing the correct terminology or where to start, while the categorisation step provides a clear path towards relevant LAS guidance.

It uses a modern frontend stack including React, TypeScript, TailwindCSS, shadcn/ui and the Gemini API, with a structure that I believe an engineering team could build upon and maintain. 

Overall, it is a solid first iteration. However, there are some changes I would request before merging:
- **Features (Results): **The categorisation is useful, but the results could make better use of the context gathered from the user to provide a more relevant and actionable next step. An LLM backed by curated LAS content could be explored here.
- **UI: **Establish a consistent design system for colours, typography, spacing and interactive states
-** Testing:** Test coverage should be expanded to include component, integration, API and E2E tests, alongside performance, SEO and cross-browser testing. 
- **Accessibility: **Further manual testing is needed, particularly for keyboard navigation, focus order and visibility, browser zoom, responsive behaviour and screen reader compatibility.
- **Privacy and security handling:** Consider what authentication and storage options will be required in the future, as well as validating and sanitising API inputs/responses.
- **Code quality:** I would do a final review of naming, code structure and loading/error handling.
