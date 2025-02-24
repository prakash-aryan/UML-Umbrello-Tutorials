# Creating Class Diagrams with Umbrello 5: Guide

## Table of Contents
1. [Introduction to UML Class Diagrams](#1-introduction-to-uml-class-diagrams)
2. [Understanding Class Diagram Components](#2-understanding-class-diagram-components)
3. [Problem Statement: Credit Card System](#3-problem-statement-credit-card-system)
4. [Installation and Setup](#4-installation-and-setup)
5. [Creating Your First Class Diagram](#5-creating-your-first-class-diagram)
6. [Building the Class Structure](#6-building-the-class-structure)
7. [Implementing Relationships](#7-implementing-relationships)


## 1. Introduction to UML Class Diagrams

### What are Class Diagrams?
Class diagrams are the backbone of Object-Oriented modeling. They show:
- Static structure of a system
- Classes and their features
- Relationships between elements
- Inheritance hierarchies
- Multiplicity and navigation

### Why Use Class Diagrams?
- Visualize class structures
- Plan application structure before coding
- Document existing systems
- Communicate designs between team members
- Model database schemas

## 2. Understanding Class Diagram Components

### Classes
A class represents a template for objects and consists of:
- Name (top compartment)
- Attributes (middle compartment)
- Operations (bottom compartment)

### Visibility Modifiers
```
+ Public: Accessible from any class
- Private: Only accessible within the class
# Protected: Accessible in class and its subclasses
~ Package: Accessible within the same package
```

### Relationships Types
1. **Association**: Basic relationship between classes
   - Unidirectional: One-way relationship
   - Bidirectional: Two-way relationship

2. **Aggregation**: Weak "whole-part" relationship
   - Parts can exist independently
   - Shown with hollow diamond

3. **Composition**: Strong "whole-part" relationship
   - Parts cannot exist without the whole
   - Shown with filled diamond

4. **Inheritance**: "is-a" relationship
   - Shown with hollow triangle
   - Points to parent class

5. **Implementation**: Class implementing interface
   - Shown with dashed line and hollow triangle
   - Points to interface

### Multiplicity
- 1: Exactly one
- *: Zero or more
- 1..*: One or more
- 0..1: Zero or one
- n: Specific number
- n..m: Range of numbers

## 3. Problem Statement: Credit Card System

### System Overview
Creating a credit card management system that handles:
- 6.5 million cardholders
- 500,000 retailers
- Various retail types (hotels, shops, etc.)
- Transaction processing
- Statement generation

![Class Diagram](/static/img/class-diagram/0-Target.png)

### Key Requirements
1. **Transaction Processing**
   - Validate transactions over $50
   - Generate two-part vouchers
   - Track transaction status

2. **User Management**
   - Store cardholder information
   - Manage retailer details
   - Handle credit limits

3. **Reporting**
   - Generate monthly statements
   - Track transaction history
   - Monitor credit usage



## 4. Installation and Setup

### Prerequisites
- Linux/Windows operating system
- Umbrello 5 installed
- Basic understanding of UML concepts
- Familiarity with object-oriented programming

### Environment Setup
1. Launch Umbrello from terminal:
```bash
umbrello5
```

2. Configure initial workspace:
   - Maximize window for better visibility
   - Arrange toolbars as needed
   - Enable grid view for alignment (optional)

## 5. Creating Your First Class Diagram

### Step 1: Create New Diagram
1. Click File → New
2. Name project "Credit Card System"
3. Select "Class Diagram" from available options

![Create New Class Diagram](/static/img/class-diagram/1-CreateNewClassDiagram.png)

*Tip: Use meaningful project names that reflect your system's purpose*

![Name Diagram](/static/img/class-diagram/2-NameDiagram.png)


## 6. Building the Class Structure

### Creating the CreditCardCompany Class

1. **Add Class**
   - Right Click your mouse
   - From New --> Class
   - Name it "CreditCardCompany"

![Create New Class](/static/img/class-diagram/3-CreateNewClass.png)
![Name Class](/static/img/class-diagram/4-NameClass.png)

2. **Configure Class Properties**
   - Right-click on the class → Properties

![Open Properties](/static/img/class-diagram/5-OpenProps.png)

3. **Add Attributes**
   ```
   - companyName: string (private)
   - transactionThreshold: float (private)
   - minCreditLimit: float (private)
   ```

   For each attribute:
   - Click "New Attribute"
   - Set name, type, visibility

![Add Attributes](/static/img/class-diagram/6-AddAttr.png)
![Add Attribute Properties](/static/img/class-diagram/7-AddAttrProps.png)

*Important: Choose appropriate visibility modifiers based on encapsulation principles*

4. **Add Operations**
   ```
   + checkCredit(): boolean
   + authorizeTransaction(): boolean
   + generateMonthlyStatement()
   ```

   For each operation:
   - Click "New Operation"
   - Set name, return type, visibility 
   - Click Apply and then OK

![Add Operations](/static/img/class-diagram/9-AddOps.png)
![Add Operation Properties](/static/img/class-diagram/10-AddOpsProps.png)
![Add More Operations](/static/img/class-diagram/11-AddMoreOps.png)

### Creating the CardHolder Class

1. **Add Class Structure**
   ```
   Class: CardHolder
   Attributes:
   - cardHolderId: string
   - name: string
   - creditLimit: float
   - cardNumber: string
   
   Operations:
   + makePayment()
   + getCreditStatus(): boolean
   + viewStatement()
   ```

2. **Configure Class Properties**
   - Set proper visibility for attributes
   - Add validation methods
   - Configure relationships

### Creating the Transaction Class

1. **Define Transaction Structure**
   ```
   Class: Transaction
   Attributes:
   - transactionId: string
   - amount: float
   - date: Date
   - status: string
   - needsAuthorization: boolean
   
   Operations:
   + authorize(): boolean
   + createVoucher()
   + checkThreshold(): boolean
   ```

![Add More Classes](/static/img/class-diagram/12-AddMoreClasses.png)
![After Adding All Classes](/static/img/class-diagram/13-AfterAddingAllClasses.png)

## 7. Implementing Relationships

### Creating Class Relationships

1. **Composition Relationships**
   - CreditCardCompany to CardHolder (1 to 6.5M)
   
   Steps for each:
   - Select composition tool
   - Click source class
   - Drag to target class
   - Configure multiplicity

![Select Composition](/static/img/class-diagram/14-CreateComposition.png)
2. **Setting Multiplicities**
   - Click on relationship line
   - Open properties
   - Set source and target multiplicities
   - Configure navigation

![Select Component and Open Properties](/static/img/class-diagram/15-AddPropsComp.png)
![Add Multiplicity](/static/img/class-diagram/16-AddMultiplic.png)

3. **Add  More Association and Multiplicity**
![Add Association](/static/img/class-diagram/17-AddSimple.png)
![Add Multiplicity](/static/img/class-diagram/18-AddRemMult.png)

## Saving and Exporting

### Saving Your Work
1. Go to File → Save As
2. Choose a location and filename
3. Select .xmi format

### Printing or Exporting
1. Go to File → Print or Export
2. Select desired format and options
