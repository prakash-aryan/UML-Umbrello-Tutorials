---
sidebar_position: 1
---

# Creating Component Diagrams with Umbrello 5

## Table of Contents
1. [Introduction to Component Diagrams](#1-introduction-to-component-diagrams)
2. [Understanding Component Diagram Elements](#2-understanding-component-diagram-elements)
3. [Problem Statement: E-Commerce System](#3-problem-statement-e-commerce-system)
4. [Getting Started](#4-getting-started)
5. [Creating Components](#5-creating-components)
6. [Adding Ports](#6-adding-ports)
7. [Creating Interfaces](#7-creating-interfaces)
8. [Creating Relationships](#8-creating-relationships)
9. [Finalizing the Diagram](#9-finalizing-the-diagram)
10. [Saving and Exporting](#10-saving-and-exporting)
11. [Best Practices](#11-best-practices)

## 1. Introduction to Component Diagrams

Component diagrams in UML represent the physical aspects of an object-oriented software system. They illustrate the structure of the software components, their interfaces, and the dependencies between them.

### Key Benefits of Component Diagrams
- Visualize the high-level structure of complex systems
- Identify component dependencies and interfaces
- Model replaceable parts of a system
- Support component-based development
- Facilitate software reuse and maintenance

Component diagrams are particularly useful during the implementation phase of development, as they help bridge the gap between design and actual code structure.

![Final Component Diagram](/img/component-diagram/16-FinalDiagram.png)

*Final component diagram we'll create in this tutorial*

## 2. Understanding Component Diagram Elements

### Components
Components are modular, reusable, and replaceable parts of a system with well-defined interfaces. They represent:
- Executable code (libraries, applications)
- Runtime entities (processes)
- Development-time entities (source code)

### Interfaces
Interfaces define the contracts that components fulfill or require:
- **Provided Interface** (lollipop symbol): Services the component offers to other components
- **Required Interface** (socket symbol): Services the component needs from other components

**Each interface must have a specific and unique name** that indicates the service it provides or requires.

### Ports
Ports are interaction points between components and their environment:
- Define where interfaces are exposed
- Can have multiple interfaces attached
- Represent distinct interaction points

**Every port must have a specific and unique name** to describe its purpose.

### Relationships
- **Dependency**: One component depends on another
- **Delegation**: A component delegates responsibilities to another component
- **Realization**: A component implements an interface
- **Assembly**: Connection between required and provided interfaces

## 3. Problem Statement: E-Commerce System

For this tutorial, we'll create a component diagram for an e-commerce system with the following components:

- **ShoppingCart**: Manages the user's shopping items
- **Order**: Processes and tracks customer orders
- **Product**: Maintains product information
- **BackOrder**: Handles out-of-stock items
- **Customer**: Manages customer information
- **Organization**: Handles business customer accounts

We'll model the interactions between these components using named interfaces to represent a complete ordering system.

## 4. Getting Started

### Creating a New Component Diagram
1. Launch Umbrello 5
2. Go to **Diagram → New → Component Diagram**

![Create New Component Diagram](/img/component-diagram/1-CreateNewOne.png)

*Creating a new component diagram*

3. Enter a name for your diagram (e.g., "E-Commerce System")

## 5. Creating Components

### Adding the First Component
1. From the toolbar, select the **Component** tool

![Create New Component](/img/component-diagram/2-CreateNewComp.png)

*Selecting the component tool*

2. Click on the diagram canvas to place the component
3. A dialog will appear where you can name the component "ShoppingCart"

![Name Component](/img/component-diagram/3-GiveCompName.png)

*Naming the component*

4. Right-click on the component and select **Properties**

![Open Properties](/img/component-diagram/4-OpenProps.png)

*Opening component properties*

5. In the **General** tab, ensure `<<Component>>` is displayed in the stereotype field

![Set Stereotype](/img/component-diagram/5-GiveStereotype.png)

*Setting component stereotype*

### Creating Additional Components
1. Create the following components in their respective positions:
   - **Order**: Place in the center of the diagram
   - **Product**: Place below the Order component
   - **BackOrder**: Place at the top of the diagram
   - **Customer**: Place on the right side
   - **Organization**: Place below the Customer component

2. For each component:
   - Select the Component tool
   - Click on the diagram
   - Enter the component name
   - Set properties as needed

![Create More Components](/img/component-diagram/6-CreateMoreDiagrams.png)

*Creating all components for the system*

## 6. Adding Ports

### Adding Ports to Components
1. **To add a port, right-click on the component and select New → Port**

![Creating Ports](/img/component-diagram/7-CreatingPorts.png)

*Adding a port to a component*

2. Click where you want to place the port on the component boundary
3. A small square will appear on the component boundary
4. **Right-click on the port and select Properties**
5. **Enter the specific port name:**

![Naming Port](/img/component-diagram/8-namingPort.png)

*Naming a port*

6. Add the following ports to each component:
   - ShoppingCart: "CartAccessPort"
   - Order: "OrderEntryPort" (left side), "ProductPort" (bottom), "CustomerPort" (right)
   - Product: "CatalogPort"
   - BackOrder: "InventoryPort"
   - Customer: "ProfilePort"
   - Organization: "MembershipPort"

![Create More Ports](/img/component-diagram/9-CreateMorePorts.png)

*Adding multiple ports to components*

## 7. Creating Interfaces

### Creating Required Interfaces
1. **To add a required interface, right-click on the component (or its port) and select New → Required Interface**

![Create Required Interface](/img/component-diagram/10-CreateReqInterface.png)

*Creating a required interface*

2. Click on the component or port where you want to place the interface
3. **Name the required interfaces:**
   - ShoppingCart: "OrderEntry"
   - Order: "OrderableItem" and "Person"
   - Customer: "OrganizationAffiliation"

4. Adjust the position of required interfaces along the component edges

![Adjust Position of Required Interface](/img/component-diagram/11-adjustPosRI.png)

*Adjusting the position of required interfaces*

### Creating Provided Interfaces
1. **To add a provided interface, right-click on the component (or its port) and select New → Provided Interface**

![Create Provided Interface](/img/component-diagram/12-CreateProvInter.png)

*Creating a provided interface*

2. Click on the component or port where you want to place the interface
3. **Name the provided interfaces:**
   - Order: "OrderEntry"
   - Product: "OrderableItem"
   - Customer: "Person"
   - Organization: "OrganizationAffiliation"
   - BackOrder: "BackOrderProcessing"

4. Adjust the position of provided interfaces along the component edges

![Adjust Position of Provided Interface](/img/component-diagram/13-AdjustPosPI.png)

*Adjusting the position of provided interfaces*

5. Continue adding all interfaces to complete the diagram

![Create More Interfaces](/img/component-diagram/14-CreateMoreInterfaces.png)

*Adding all interfaces to the diagram*

## 8. Creating Relationships

### Connecting Interfaces
1. Connect the required and provided interfaces:
   - Select the **Association** tool from the toolbar
   - Click on the required interface
   - Drag to the matching provided interface

![Create Associations](/img/component-diagram/15-CreateAssociations.gif)

*Connecting interfaces with associations*

2. Create the following connections:
   - Connect "OrderEntry" from ShoppingCart to "OrderEntry" on Order
   - Connect "OrderableItem" from Order to "OrderableItem" on Product
   - Connect "Person" from Order to "Person" on Customer
   - Connect "OrganizationAffiliation" from Customer to "OrganizationAffiliation" on Organization

## 9. Finalizing the Diagram

### Final Layout Adjustments
1. Review the entire diagram for clarity and completeness
2. Ensure all components have appropriate stereotypes
3. Verify that all interfaces have specific and unique names:
   - "OrderEntry" - Connection between ShoppingCart and Order
   - "OrderableItem" - Connection between Order and Product
   - "Person" - Connection between Order and Customer
   - "OrganizationAffiliation" - Connection between Customer and Organization
   - "BackOrderProcessing" - Service provided by BackOrder

4. Verify that all ports have specific and unique names:
   - "CartAccessPort" - On ShoppingCart
   - "OrderEntryPort", "ProductPort", "CustomerPort" - On Order
   - "CatalogPort" - On Product
   - "ProfilePort" - On Customer
   - "MembershipPort" - On Organization
   - "InventoryPort" - On BackOrder

5. Adjust positions and sizes for optimal readability

![Final Diagram](/img/component-diagram/16-FinalDiagram.png)

*Completed component diagram*

## 10. Saving and Exporting

### Saving Your Work
1. Go to **File → Save As**
2. Choose a location and filename
3. Select .xmi format

### Exporting as an Image
1. Go to **File → Export as Picture**
2. Select your preferred format (PNG, SVG, etc.)
3. Choose location and save

## 11. Best Practices

### Component Diagram Guidelines
1. **Keep it Simple**: Focus on the essential components and relationships
2. **Meaningful Names**: Use descriptive, specific, and unique names for components, interfaces, and ports
3. **Consistent Stereotypes**: Apply stereotypes consistently across similar elements
4. **Color Coding**: Use colors to group related components or indicate their nature
5. **Clear Interfaces**: Explicitly model and name provided and required interfaces
6. **Direct Connections**: Make sure connecting lines are as straight and uncrossed as possible
7. **Annotations**: Use notes to clarify complex relationships or constraints

### Interface and Port Naming Conventions
Use descriptive, specific, and unique names for interfaces and ports:
- **Interface Names**: Should reflect the service offered or required ("OrderEntry", "Person", "OrderableItem", "BackOrderProcessing", "OrganizationAffiliation")
- **Port Names**: Should describe the connection point's purpose ("CartAccessPort", "OrderEntryPort", "ProductPort", "CustomerPort", "CatalogPort", "ProfilePort", "MembershipPort", "InventoryPort")
- **Avoid Generic Names**: Don't use names like "Interface1" or "Port1"
- **Be Consistent**: Use similar naming patterns for related interfaces and ports

### Component Diagram Anti-patterns
1. **Too Many Components**: Overwhelming diagrams with too many elements
2. **Missing Interfaces**: Not specifying how components interact
3. **Unnamed or Generic Names**: Failing to provide specific and unique names for interfaces and ports
4. **Ambiguous Dependencies**: Unclear relationship types
5. **Inconsistent Layout**: Random positioning that makes the diagram hard to follow

## Keyboard Shortcuts
- Ctrl+S: Save
- Ctrl+Z: Undo
- Ctrl+Y: Redo
- Delete: Remove selected element

Remember that component diagrams should clearly show the structure and interactions of your system's components. Proper naming of all elements, especially interfaces and ports, is crucial for creating diagrams that effectively communicate your design.