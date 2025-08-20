---
title: Monofab SRM-20 Mill
description: Guide to using the Roland Monofab SRM-20 for PCB milling, prototyping, and precision cutting
---

# Monofab - srm20

![monofab](../../../assets/docs/machines/monofab.png)  
![monofab2](../../../assets/docs/machines/monofab2.png)

## Purpose

- This machine is capable of cutting a wide variety of materials including chemical wood, acrylic, and ABS
- it can be used in milling, casting or pcb production

## Minimum knowledge to use machine

- cutting tools  
  ![bits](../../../assets/docs/machines/bits.png)

- cutting area x,y  
  ![area](../../../assets/docs/machines/area.png)

- cutting area z  
  ![area2](../../../assets/docs/machines/area2.png)

- softwares used

  - `vpanel` : to control the axis and start the job  
    ![vpanel](../../../assets/docs/machines/vpanel.png)

  - `SRP Player` : This is a CAM software that imports general-use 3D data, (such as IGES, DXF (3D), or STL), and lets you easily prepare tool paths and output them to the SRM-20.  
    ![srp](../../../assets/docs/machines/srp.png)

  - `Modela Player 4` : This is a CAM software that imports general-use 3D data, (such as IGES, DXF (3D), or STL), and lets you easily prepare tool paths and output them to the SRM-20.  
    ![modela](../../../assets/docs/machines/modela.png)

- The Flow of One Side Cutting  
  ![one-side](../../../assets/docs/machines/one-side.png)

- Preparing the Machine  
  ![prepare](../../../assets/docs/machines/prepare.png)

- attaching the cutting tool  
  ![bit](../../../assets/docs/machines/bit.png)  
  ![bit2](../../../assets/docs/machines/cm.png)

- attach the material to the table

  - Mark the location that will be the origin point of the material.  
    ![origin](../../../assets/docs/machines/origin.png)

  - Stick double-stick tape on the material.  
    ![double](../../../assets/docs/machines/double.png)

  - set the origin of the vpanel  
    ![origin2](../../../assets/docs/machines/origin2.png)

- Loadable workpiece weight : 2 kg
- operating speed : 6 ~ 1800 mm/min
- maximum spindle rotation : 7,000 rpm

## Materials

- Chemical wood
- Sanmodur
- ABS
- Modeling wax

## Working time

- monday
- wednesday

## Maintenance

- ![cleann](../../../assets/docs/machines/cleann1.png)
- ![cleann2](../../../assets/docs/machines/cleann2.png)
- ![cleann3](../../../assets/docs/machines/cleann3.png)
- ![position](../../../assets/docs/machines/change-pos.png)

### Procedures

- lubricate and grease the axis and rail
- clean the container under the plate
- make sure the layer above the plate is leveled
- suck the wasted wood, wax or cubber from the machine

### Date

- Yearly maintenance
  - sunday `1\9\2019` hardware maintenance (cleaning, greasing)
  - monday `2\9\2019` software maintenance (installing O.S, softwares, mods, local server)
  - test the machine

## advanced

- Z Cutting Range by Changing the Position of the Spindle Unit  
  ![range](../../../assets/docs/machines/working-range.png)
