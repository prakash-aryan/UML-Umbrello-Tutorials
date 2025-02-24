---
sidebar_position: 1
---

# Creating Activity Diagrams with Umbrello 5

## Table of Contents
1. Introduction to Activity Diagrams
2. Getting Started
3. Creating Initial Activity
4. Adding Activities and Transitions
5. Adding Decision Nodes
6. Working with Fork/Join Nodes
7. Finalizing the Diagram
8. Saving and Exporting

## 1. Introduction to Activity Diagrams
Activity diagrams in UML are used to model the flow of actions in a system. They are particularly useful for visualizing business processes, workflows, and complex algorithms.
   ![final diagram](/img/activity-diagram/0_final_diagram.png)
   *Diagram To Create*

## 2. Getting Started

### Creating a New Activity Diagram
1. Launch Umbrello 5
2. Go to Diagram → New → Activity Diagram
   ![Select activity diagram](/img/activity-diagram/1_select_activity_diagram.png)
   *Creating a new activity diagram*

## 3. Creating Initial Activity

### Adding Initial Node
1. Click on the Initial Activity icon from the toolbar (solid black circle)
2. Click on the diagram where you want to place it
   ![Select initial activity](/img/activity-diagram/2_select_initial_activity.png)
   *Adding an initial node to the diagram*

### Adding First Activity
1. Click on the select tool
2. Right click on the Initial Node previously create, click on new --> activity
3. Enter a name for the activity (e.g., "Check Order"), to do this double click on the activity
   ![Select activity](/img/activity-diagram/3_select_activity.png)
   ![Name activity](/img/activity-diagram/4_name_activity.png)
   *Adding and naming an activity*

## 4. Adding Activities and Transitions

### Creating Decision Node
1. Click on Select tool, right Click on the new Activity previously created
2. Select New --> Branch
3. In toolbar select the Text Option, give it a name and the add it along with Activity Transition
4. Add text to the branch (e.g., "Valid?")
   ![Select branch](/img/activity-diagram/5_select_branch.png)
   ![Add text](/img/activity-diagram/6_add_text.png)
   *Creating a decision node with condition*

### Adding More Activities
1. Click on the Select Tool, Right click on the Branch previously created
2. Select New --> Activity
3.  Add additional activities for different paths (e.g., "Process Payment", "Reject Order")
4. Add the names for the Transitions by using the Text Tool
   ![Add more activities](/img/activity-diagram/7_add_more_activities.png)
   ![Add more text](/img/activity-diagram/8_add_more_text.png)
   *Adding activities and connecting them*

### Adding End Activities
Add end activity nodes to terminate the flows:
1. Click on Select tool, right Click on the new Activity("Reject Order")previously created
2. Select New --> End Activity
   ![End activity](/img/activity-diagram/8_end_act.png)
   *Adding end activities*

## 5. Working with Fork/Join Nodes

### Creating Parallel Activities
1. Click on Select tool, right Click on the new Activity("Process Payment") previously created
2. Select New --> Fork
3. In the Toolbar, Select Activity and add two more Activities
3. Add activities for parallel execution (e.g., "Update Inventory", "Send Confirmation")
   ![Add fork](/img/activity-diagram/9_add_fork.png)
   ![Two more activities](/img/activity-diagram/10_two_more_acts.png)
   *Creating parallel flows*

### Connecting Activities and Adding Join
1. Use Activity Transitions from the toolbar and select first the fork and then the activity which was created previously
2. Ensure proper flow between parallel activities
3. In toolbar select the Fork/Join Object and add it
4. Add Activity Transitions from the Activities to Join
   ![Select activity transition](/img/activity-diagram/11_select_act_trans.png)
   ![Add fork and join](/img/activity-diagram/12_add_fork_join.png)
   ![Ensure transitions](/img/activity-diagram/13_ensure_trans.png)
   *Connecting parallel activities*

## 6. Finalizing the Diagram

### Adding Final Activity
1. Add a final activity from the toolbar
2. Add a final Activity Transitions from previously created Merge to Final Activity
3. Click on Select Tool, Right Click on Prepare Shipment Activity, Select New --> Final Activity
   ![Add final activity and transitions](/img/activity-diagram/14_add_final_act_and_trans.png)
   ![Add end activity](/img/activity-diagram/15_add_end_act.png)
   *Completing the diagram*

## 7. Saving and Exporting

### Saving Your Work
1. Go to File → Save As
2. Choose a location and filename
3. Select .xmi format
   ![Save diagram](/img/activity-diagram/16_to_save.png)
   *Saving your diagram*

### Printing or Exporting
1. Go to File → Print or Export
2. Select desired format and options
   ![Print your work](/img/activity-diagram/17_print_your_work.png)
   *Printing or exporting your diagram*

## Keyboard Shortcuts
- Ctrl+S: Save
- Ctrl+Z: Undo
- Ctrl+Y: Redo
- Delete: Remove selected element