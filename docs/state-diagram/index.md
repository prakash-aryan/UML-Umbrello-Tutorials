---
sidebar_position: 1
---

# Creating State Diagrams with Umbrello 5

## Table of Contents
1. [Introduction to State Diagrams](#1-introduction-to-state-diagrams)
2. [Getting Started](#2-getting-started)
3. [Creating Initial State](#3-creating-initial-state)
4. [Adding States](#4-adding-states)
5. [Adding Activities to States](#5-adding-activities-to-states)
6. [Creating Transitions](#6-creating-transitions)
7. [Naming Transitions](#7-naming-transitions)
8. [Finalizing the Diagram](#8-finalizing-the-diagram)
9. [Saving and Exporting](#9-saving-and-exporting)

## 1. Introduction to State Diagrams

State diagrams in UML model the behavior of a system by showing the different states an object can have and how those states change in response to events. They are particularly useful for:

- Modeling lifecycle of objects
- Describing event-driven systems
- Representing user interface flows
- Modeling real-time and reactive systems

In our tutorial, we'll create a state diagram for a simple digital watch with two buttons (A and B) that has different modes for displaying and setting time.

![Final Diagram](/img/state-diagram/15-AddMoreTransition.png)

## 2. Getting Started

### Creating a New State Diagram
1. Launch Umbrello 5
2. Go to Diagram → New → State Diagram
   ![Create State Diagram](/img/state-diagram/1-CreateStateDiagram.png)
   *Creating a new state diagram*

3. Name your diagram (e.g., "Digital Watch state diagram")
   ![Name Diagram](/img/state-diagram/2-NameDiagram.png)
   *Naming the state diagram*

## 3. Creating Initial State

### Adding Initial State
1. Right-click on the canvas and select New → Initial State
2. Click on the diagram where you want to place the initial state
   ![Create Initial State](/img/state-diagram/3-CreateInitialState.png)
   *Adding an initial state to the diagram*

## 4. Adding States

### Creating the Display Time State
1. Right-click on the initial state
2. Select New → State
3. Give it a name (e.g., "displaying time")
   ![Create New State](/img/state-diagram/4-CreateNewState.png)
   *Adding the display time state*

### Creating Additional States
1. Create additional states for the watch's different modes
2. Right-click on the previously created state and select New → State
3. Add states for "Setting Hours" and "Setting Minutes"
   ![Create Another State](/img/state-diagram/5-CreateAnotherState.png)
   *Adding additional states*

## 5. Adding Activities to States

### Adding Activities to States
1. Right-click on a state and select Properties
2. Go to the Activities tab
3. Add activities like "Do:Flash Hours" for the setting hours state
   ![Add Activity](/img/state-diagram/6-AddActivity.png)
   *Adding activities to states*

### Creating Final State
1. Right-click on the Setting Hours State and select New → New State
2. Place it on your diagram to represent the termination point (if needed)
   ![Create Final State](/img/state-diagram/7-CreateFinalState.png)
   *Adding a final state if needed*

## 6. Creating Transitions

### Adding Basic Transitions
1. Right-click on the source state
2. Select New → State Transition
3. Click on the target state to create the transition
   ![Add Transition](/img/state-diagram/8-AddTransition.png)
   *Creating transitions between states*

### Creating Self-Transitions
1. Right-click on a state
2. Select New → State Transition
3. Click on the same state to create a self-transition
   ![Self Transition](/img/state-diagram/9-SelfTransition.png)
   *Creating self-transitions*

### Adjusting Transition Routes
1. Right-click on a transition line
2. Select Layout → Spline to create curved transitions
   ![Select Spline](/img/state-diagram/10-SelectSpline.png)
   *Adjusting transition appearance with spline layout*


### Positioning Transition Curve for Clarity
1. Select the state and move it to improve Transition Curve
   ![Move the State](/img/state-diagram/11-MoveTheState.png)
   *Positioning states for better layout*

## 7. Naming Transitions

### Opening Properties for Final Adjustments
1. Right-click on elements to access their Properties
2. Make final adjustments to name
   ![Open Properties](/img/state-diagram/12-OpenProps.png)
   *Making final adjustments through properties dialog*

### Setting Transition Triggers
1. Right-click on the transition line
2. Select Properties
3. In the General tab, set the name (e.g., "Pressed B/increment hours") to indicate what triggers the transition
   ![Name Transition](/img/state-diagram/13-nameTransition.png)
   *Naming transitions with their triggers*

4. Adjust position of transition names for better readability
   ![Adjust Position of Name](/img/state-diagram/14-AdjustPositonOfName.png)
   *Fine-tuning transition label positions*



## 8. Finalizing the Diagram

### Complete the Digital Watch State Diagram
1. Add remaining transitions between states
2. Name all transitions according to their triggers (button presses)
3. Add appropriate activities to each state
   ![Add More Transitions](/img/state-diagram/15-AddMoreTransition.png)
   *Completed digital watch state diagram*

## 9. Saving and Exporting

### Saving Your Work
1. Go to File → Save As
2. Choose a location and filename
3. Select .xmi format

### Printing or Exporting
1. Go to File → Export as Picture
2. Select desired format (PNG, SVG, etc.)
3. Choose location and save

## Keyboard Shortcuts
- Ctrl+S: Save
- Ctrl+Z: Undo
- Ctrl+Y: Redo
- Delete: Remove selected element

Remember that state diagrams should clearly show how an object moves from one state to another based on events. Use appropriate naming for states and transitions to make your diagram easy to understand.