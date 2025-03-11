---
sidebar_position: 1
---

# Creating Sequence Diagrams with Umbrello 5

## Table of Contents
1. [Introduction to Sequence Diagrams](#1-introduction-to-sequence-diagrams)
2. [Problem Statement: Food Ordering System](#2-problem-statement-food-ordering-system)
3. [Getting Started](#3-getting-started)
4. [Creating Object Lifelines](#4-creating-object-lifelines)
5. [Adding Synchronous Messages](#5-adding-synchronous-messages)
6. [Adding Asynchronous Messages](#6-adding-asynchronous-messages)
7. [Working with Activation Boxes](#7-working-with-activation-boxes)
8. [Managing Destruction](#8-managing-destruction)
9. [Saving and Exporting](#9-saving-and-exporting)
10. [Keyboard Shortcuts](#10-keyboard-shortcuts)

## 1. Introduction to Sequence Diagrams

Sequence diagrams in UML visualize the interactions between objects over time. They are particularly useful for:

- Showing the sequence of messages/method calls between objects
- Illustrating how processes operate with one another
- Documenting runtime scenarios in a graphical manner
- Representing complex interactions in a time-ordered manner

Key components of sequence diagrams include:

- **Lifelines**: Represent individual objects or components in the system
- **Messages**: Show interactions between lifelines
- **Activation Boxes**: Indicate when an object is actively processing
- **Return Messages**: Represent the completion of processing and return of control

![Final Diagram](/img/sequence-diagram/0-FinalDiagram.png)
*Completed sequence diagram for a food ordering system*

## 2. Problem Statement: Food Ordering System

In this tutorial, we'll create a sequence diagram for an online food ordering system with the following components:

- **Customer**: Places orders and receives confirmations
- **App**: Manages the ordering process
- **Restaurant**: Provides availability information and receives order notifications
- **Payment**: Processes transactions
- **Analytics**: Logs order data for business intelligence

The sequence includes:
1. Customer placing an order
2. App checking restaurant availability
3. Processing payment
4. Notifying the restaurant (asynchronous)
5. Logging order data (asynchronous)

This example demonstrates both synchronous operations (which require waiting for responses) and asynchronous operations (which continue without waiting).

## 3. Getting Started

### Creating a New Sequence Diagram
1. Launch Umbrello 5
2. Go to Diagram → New → Sequence Diagram
   ![Create New Sequence Diagram](/img/sequence-diagram/1-CreateNewSequenceDiagram.png)
   *Creating a new sequence diagram*

3. Name your diagram (e.g., "Food Ordering System Sequence")

## 4. Creating Object Lifelines

### Adding the First Object
1. Right-click on the blank diagram
2. Select New → Object
3. Click on the diagram where you want to place it
   ![Create New Object](/img/sequence-diagram/2-CreateNewObject.png)
   *Creating a new object*

### Setting Object Properties
1. Right-click on the newly created object
2. Select Properties
   ![Open Properties](/img/sequence-diagram/3-OpenProps.png)
   *Opening object properties*

3. Change the class name to "Customer"
4. Check "Draw as actor" to represent a user
   ![Select Actor](/img/sequence-diagram/4-SelectActor.png)
   *Setting an object as an actor*

5. Click OK to apply changes

### Adding More Objects
1. Repeat the process to add more objects:
   - App
   - Restaurant
   - Payment
   - Analytics
2. Position them in a horizontal row at the top of the diagram
   ![Add More Objects](/img/sequence-diagram/5-AddMoreObjects.png)
   *Adding more object lifelines*

## 5. Adding Synchronous Messages

### Creating the First Synchronous Message
1. Click on the Synchronous Message tool in the toolbar
2. Click and drag from the source object (Customer) to the target object (App)
   ![Create Synchronous Message](/img/sequence-diagram/6-CreateSM.png)
   *Creating a synchronous message*

3. In the dialog that appears, enter "Place Order" as the custom operation
   ![Synchronous Message Operations](/img/sequence-diagram/7-SMOps.png)
   *Setting the message name*

4. Select the Label tool, and then add a return message
   ![Add Label](/img/sequence-diagram/8-AddLabel.png)
   *Message with label added*

### Adding More Synchronous Messages
1. Add the following synchronous messages in sequence:
   - From App to Restaurant: "Check Availability"
   - From Restaurant to App: "Confirm Available"
   - From App to Payment: "Process Payment"
   - From Payment to App: "Payment Confirmed"
   
   ![Add More Synchronous Messages](/img/sequence-diagram/9-AddMoreSync.png)
   *Adding multiple synchronous messages*

## 6. Adding Asynchronous Messages

### Creating Asynchronous Messages
1. In Umbrello, asynchronous messages don't require a return message
2. Click on the Asynchronous Message tool in the toolbar
3. Click and drag from App to Restaurant
4. Enter "New Order Notification" as the custom operation
   ![Add Asynchronous Message](/img/sequence-diagram/11-AddAsync.png)
   *Creating an asynchronous message*

### Adding Another Asynchronous Message
1. Add another asynchronous message from App to Analytics
2. Enter "Log Order Data" as the custom operation
   ![Add Another Asynchronous Message](/img/sequence-diagram/12-AddAnotherAsnyc.png)
   *Adding a second asynchronous message*

## 7. Working with Activation Boxes

### Adjusting Activation Boxes
1. Activation boxes (yellow rectangles) are automatically created for synchronous messages
2. To adjust their size:
   - Select the activation box
   - Drag the bottom edge to resize it
   
   ![Adjust Activation Boxes](/img/sequence-diagram/10-Adjust.gif)
   *Adjusting the size and position of messages and activation boxes*

3. Position boxes to clearly show the sequence of operations:
   - Place later messages below earlier ones
   - Ensure proper spacing for readability
   - Align related messages to show their relationships

## 8. Managing Destruction

### Working with Destruction Markers
1. In some cases, you may want to show object destruction
2. To enable this option, right-click on an object and select Properties
3. Check "Show destruction" to display an X at the end of the lifeline
   ![Select Destruction](/img/sequence-diagram/13-SelectDestruction.png)
   *Enabling destruction display*

### Hiding Destruction Markers
1. If you don't need to show destruction, you can hide these markers
2. Right-click on the object and select "Hide destruction box"
   ![Hide Destruction](/img/sequence-diagram/14-HideDesc.png)
   *Hiding destruction markers*

3. This is useful when modeling services or components that continue to exist after the interaction

## 9. Saving and Exporting

### Saving Your Work
1. Go to File → Save As
2. Choose a location and filename
3. Select .xmi format
4. Click Save

### Exporting as an Image
1. Go to Diagram → Export as Picture
2. Select your preferred format (PNG, SVG, etc.)
3. Choose location and save

## 10. Keyboard Shortcuts
- Ctrl+S: Save
- Ctrl+Z: Undo
- Ctrl+Y: Redo
- Delete: Remove selected element

## Additional Tips for Working with Sequence Diagrams

### Message Types
- **Synchronous Messages**: Show operations where the sender waits for a response
- **Asynchronous Messages**: Show operations where the sender continues without waiting
- **Reply/Return Messages**: Show the return of control (often with return values)
- **Creation Messages**: Show the creation of objects during the sequence
- **Destruction Messages**: Show when objects are destroyed

### Best Practices
- Arrange lifelines from left to right based on their first interaction in the sequence
- Keep the diagram focused on a specific scenario or use case
- Use descriptive message names that indicate the action being performed
- Maintain proper time sequence (messages flow from top to bottom)
- Group related messages with proper spacing for clarity
- Add notes or comments for complex interactions