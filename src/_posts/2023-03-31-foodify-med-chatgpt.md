---
layout: post
title: Meal planning with ChatGPT
slug: meal-planning-with-chatgpt
date: "2023-03-31"
description: Create a meal planning app with React, TypeScript and ChatGPT
og_image: /assets/blogg/chatgpt.png
author: Kami Gerami
---

# Create a meal planning app with React, TypeScript and ChatGPT

Hi everyone! In this post, I'll share my journey of how I created a meal
planning app using React, TypeScript and the ChatGPT API from OpenAI. The app
generates weekly meal plans based on user input and adapts suggestions to their
goals. I also used ChatGPT as an interactive assistant to bounce ideas and get
guidance during the development process. So let's dive right into the process
and see how ChatGPT helped me!

## Step 1: Preparing the development environment

To start, I needed to install Node.js and npm, followed by creating a new React
project with TypeScript. I also installed some extra dependencies to handle
routing, spinning animations and PDF export.

## Step 2: Create a folder structure

I created a `components` folder inside the `src` folder to organize all my app
components.

## Step 3: Develop the components

I created the following components for my app:

- **MealPlanForm**: A form where users can enter their preferences and goals.
- **MealPlanDisplay**: Displays the generated meal plan.
- **LoadingSpinner**: Shows a loading animation while waiting for the API
  response.
- **PDFExport**: Allows users to export their meal plan as a PDF.

## Step 4: Integrate ChatGPT API

I used OpenAI's ChatGPT API to generate meal plans. I created a service function
that sends user data to the API and receives a structured meal plan response.

```typescript
import axios from "axios";

const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

export const generateMealPlan = async (preferences: any) => {
    const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "user",
                    content:
                        `Generate a weekly meal plan based on these preferences: ${
                            JSON.stringify(preferences)
                        }`,
                },
            ],
        },
        {
            headers: {
                "Authorization": `Bearer ${API_KEY}`,
                "Content-Type": "application/json",
            },
        },
    );

    return response.data.choices[0].message.content;
};
```

## Step 5: Style the application

I used CSS modules to style the components and make the app look professional
and user-friendly.

## Step 6: Test and refine

I tested the app with different user inputs and refined the prompts to ChatGPT
to get better and more specific meal plans.

## Conclusion

Creating this meal planning app was a fantastic learning experience. ChatGPT
proved to be an invaluable tool both as a development assistant and as the core
functionality of the app. The combination of React, TypeScript and AI creates
powerful possibilities for modern web applications.

The app is now ready to help users plan their meals efficiently and discover new
recipes based on their personal preferences and goals.
