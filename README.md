# Leasehold Advisory Service Take-Home Exercise

**Name:** Abigail Sarmiento  
**Date:** 2 September 2026

## ❓ Problem Statement

Leaseholders and park homeowners can sometimes struggle to understand what their legal situation means and what they should do next. They may not be familiar with complex legal terminology or know where to begin looking for the relevant information. This can leave people feeling stressed and overwhelmed, and will approach organisations such as the Leasehold Advisory Service with similar questions, looking for accessible guidance.

## 💡 Proposed Approach

This digital prototype explores how users could be guided towards a clear and appropriate next step. It will involve a guided triage tool that combines free-text input with common scenarios, allowing them to describe their situation in their own words as well as a structured way to identify relevant guidance.

## 🧠 Assumptions

1. Audience - The primary users are leaseholders and park homeowners in England and Wales with varying levels of legal knowledge.
2. Triage tool - The prototype is intended to help users understand what their question relates to and find the most relevant next step, rather than provide personalised legal advice.
3. Categories are defined based on existing information - The triage system will use a relatively small set of predefined categories based on common leasehold and park-home enquiries.
4. AI is a classification tool - AI will be used in the first instance to classify a user's enquiry, but will not be used to generate legal advice or make decisions.

## 📋 Task Breakdown

Below is a breakdown of tasks that can be created into tickets in a project including an explanation of what "done" would look like.

| Task # | Task Description                     | Finished Criteria                                                                                                       |
| ------ | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| 1      | Create enquiry screen                | User can freely type their question/scenario or choose from a list of common situations that best matches their enquiry |
| 2      | Create triage questions              | User are asked further targeted questions to better understand and categories their situation                           |
| 3      | Implement triage logic               | From the user's answers, the system can categorise and present appropriate outcomes using LLM and database queries      |
| 4      | Create results page          | User receives a clear and brief explanation of their situation and next-step recommendations                            |
| 5      | Link to existing guidance            | User is provided with links to relevant Leasehold Advisory Service guidance                                             |
| 7      | Add testing                          | Key user flows and features are sufficiently covered by unit and integration testing                                    |
| 8      | Review accessibility, privacy performance | An audit on accessibility, privacy and performance is conducted using relevant tools, and any remediations are made              |

## ⚠️ Risks

### Testing

A set of unit tests to cover core behaviour of the application are provided.

Given more time, I would implement more tests to satisfy at least 85% coverage of the app, including at the component and utility level. Integration testing using a tool such as Playwright would be beneficial to test user flows.   

### Accessibility

TODO

### Personal data & security

For the first iteration of this prototype, there is minimal risk to personal data and security since no sensitive or identifiable information is being requested or stored. There is some inherent risk with the use of the LLM when a user choose to describe their situation, but this is the same risk that applies with usage of any AI tool.

In the future, contact or personal details may be requested to get an even better understanding and context of the user's situation, but the necessary steps to safeguard this information, such as authentication, should be implemented.


## 🤖 AI Usage

Below are the instances where AI was used to develop this prototype:
- Data scraping and creation: AI was used to fetch data from the main Leasehold Advisory Service and create dummy data, including questions for the Guided Advice form, and guidance resources card information. For the latter, tt struggled with being able to differentiate between the 'Advice guides' and 'Topics' (which had further guides within), so I needed to carefully review it's outputs at this step.
- Creating copy text: I took inspiration from AI on simple and accessible copy text. It was mostly helpful in this case.
- Help with setting up Gemini AI with Vercel: I consulted AI to suggest an approach where I can use an LLM to execute a query that can be used to triage a user's input into one of the pre-defined categories. This includes the code for set-up and steps to connect it to a Vercel environment which worked well.
- Styling updates: AI helped to bring design suggestions and styling consistency throughout the components of the application. Some of these were not accurate, in which I stepped into the code and made my own changes.

## ✍️ Self Code Review

