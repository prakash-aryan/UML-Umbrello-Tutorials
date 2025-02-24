# Creating Use Case Diagrams with Umbrello 5: A Comprehensive Tutorial

## Table of Contents
1. Introduction to Umbrello
2. Getting Started
3. Creating a New Use Case Diagram
4. Adding Elements to the Diagram
5. Creating Relationships
6. Saving Your Work
7. Example Project: Online Shopping System

## 1. Introduction to Umbrello

Umbrello UML Modeller is a powerful UML diagram tool that supports various aspects of software development. It's particularly useful during the analysis and design phases of software development.

![Umbrello's welcome screen showing available diagram types](/static/img/use-case/Screenshot%202025-02-06%20090838.png)
*Umbrello's welcome screen showing available diagram types*

## 2. Getting Started

### Starting a New Project
1. Launch Umbrello 5, type this command in mobaxterm after logging in
![mobaxterm](/static/img/use-case/launch.png)
2. Simply click on type of diagram you will be working with, in this case we will be creating a use case diagram
3. You'll be presented with a blank workspace

![Initial Umbrello interface](/static/img/use-case/choose-diagram.png)
*Initial Umbrello interface showing the main workspace*

## 3. Adding Elements to the Diagram

### Adding Actors
1. Select the Actor tool from the toolbar (looks like a stick figure)
2. Click on the diagram where you want to place the actor
3. A dialog will appear asking for the actor's name
4. Enter the name (e.g., "Customer" or "Admin")

![Dialog for adding a new actor](/static/img/use-case/actor-tool.png)

### Adding System Boundary
1. Select the Box tool from the toolbar
2. Draw a rectangle that will contain all use cases
3. This represents your system's boundaries
![Dialog for adding a box](/static/img/use-case/add-box.png)

### Adding Use Cases
1. Select the Use Case tool from the toolbar (oval shape)
2. Click inside the system boundary where you want to place the use case
3. Name your use case (e.g., "Browse Products", "Add to Cart")
![Dialog for adding a use-case](/static/img/use-case/add-use-cases.png)


### Adjust Size and Position
One of the most important aspects of creating clear use case diagrams is properly positioning and sizing your elements. Here's how to do it:

#### Selecting Elements:
- Click the Select tool (arrow icon) in the toolbar
- Click on the element you want to adjust

#### Adjusting Position:
- With the element selected, click and hold the left mouse button
- Drag the element to the desired position
- Release the mouse button to place the element

#### Adjusting Size:
- Select the element you want to resize
- Look for the lines at the right-bottom corners of the element
- Click and drag the lines to adjust the size
- The bottom-right corner handle is most commonly used for proportional resizing

![Dialog for size adjustment](/static/img/use-case/adjust-size.png)

## 5. Creating Relationships

### Creating Basic Associations
1. Select the Association tool from the toolbar
2. Click on the source element (usually an actor)
3. Click on the target element (usually a use case)
4. A solid line will appear connecting them
![Dialog for Associations](/static/img/use-case/Associations.png)

### Creating Include Relationships
1. Select the Include relationship tool
2. Click on the base use case
3. Click on the included use case
4. A dashed line will appear
![Dialog for Dependency](/static/img/use-case/Dep.png)

![Properties dialog for relationships](/static/img/use-case/properties.png)


To modify relationship properties:
1. Right-click on the relationship line
2. Select "Properties"
3. Adjust settings as needed
4. Edit the name and add the name of the assosication

![Relationship properties dialog](/static/img/use-case/name_and_roles.png)
*Relationship properties dialog showing available options*

## 6. Saving Your Work

1. Go to File → Save As
2. Choose a location and filename
3. Select .xmi file format
4. Click Save

![Save dialog](/static/img/use-case/saving.png)
*Save dialog showing file options*

## 7. Example Project: Online Shopping System

Let's create a complete use case diagram for an online shopping system:

1. Add Actors:
   - Customer
   - Admin

2. Add Use Cases:
   - Browse Products
   - Add to Cart
   - Make Payment
   - Manage Products

3. Create Relationships:
   - Connect Customer to Browse Products, Add to Cart, and Make Payment
   - Connect Admin to Manage Products
   - Add include relationship between Add to Cart and Make Payment

![Completed online shopping system](/static/img/use-case/example.png)
*Completed example of an online shopping system use case diagram*

### Additional Screenshots for Reference:
## 1. Save as png
- Go to Diagram
- Select the option to Export as picture
![Creating associations](/static/img/use-case/save-image.png)


### Tips and Best Practices:
- Keep your diagram clean and organized
- Use clear, descriptive names for actors and use cases
- Ensure relationships make logical sense
- Save your work frequently
- Use the alignment tools to maintain neat appearance

## Keyboard Shortcuts
- Ctrl+S: Save
- Ctrl+Z: Undo
- Ctrl+Y: Redo
- Delete: Remove selected element

Remember to regularly save your work and maintain a clear, organized layout for your diagrams. Use case diagrams should be easy to understand and effectively communicate the system's functionality to stakeholders.
