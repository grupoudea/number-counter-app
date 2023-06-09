# Comandos

## crar proyecto

npx react-native init <PROJECT_NAME> --template react-native-template-typescript

## ejecutar

npx react-native run-android

## Layout with flexbox

### Flex direction: column (default)

Tiene el eje principal (main-axis) y el eje transversal (cross-axis). Al ser una columna, su main-axis es de arriba-abajo (top-bottom) y su cross-axis es de izquierda-derecha. 

### Flex direction: row

Tiene su main-axis de izquierda-derecha (letf-right) y su cross-axis de arriba-abajo. 


### Flex
Indica como los items se van a llenar.

### Flex direction

controla la dirección en la que se disponen los elementos secundarios de un nodo. 

- column: viene por defecto. Alinea a los hijos de arriba a abajo. 
- row: Alinea a los hijos de izquierda a derecha. 
- column-reverse: alinea a los hijos de abajo a arriba. 
- row-reverse: alinea a los hijos de derecha a izquierda. 


### justify-content - MAIN-AXIS

Describe como se alinearan los items dentro del eje principal de su contenedor. 

- flex-start: viene por defecto. Alinea a los hijos al inicio del eje principal del contenedor.
- flex-end: alinea a los hijos al final del eje principal del contenedor.
- center: alinea a los hijso al centro del eje principal del contenedor.
- space-between: Los distribuye uniformemente a lo largo del eje principal del contenedor, dejando el espaciado uniforme entre ellos.
Demostración. 
![sp-bw](/docs/img/space-between.jpg)
- space-around: Distribuye el espacio al rededor de los hijos, en otras palabras, los hijos tendran un espaciado uniforme arriba y abajo y no solo entre ellos.  
Dmostración:
![sp-ar](/docs/img/space-around.jpg)
- space-evenly: Distribuye el espacio entre ellos teniendo en cuenta el borde del de inicio principal y el primer elemento y el borde extremo principal y el ultimo elemento. 
![sp-el](/docs/img/space-around.jpg)

### Align items - CROSS-AXIS
Es similar a justify content, pero en lugar de alinear a los hijos en el eje principal del contenedor, los alinea en el eje transversal. 

- stretch: Viene por defecto. Estira los elementos de un contenedor para que coincida con el tamaño del eje transversal (cross axis).
- flex-start: alinea los elementos hijos de un contenedor al inicio del cross-axis.
- flex-end: alinea los hijos de un contenedor al final del eje transversal.
- center: alinea los elementos hijos de un contenedor en el centro del eje transversal.
- baseline: alinea los hijos de un contenedor a lo largo de una linea base comun. 

### Align self
Tiene las mismas opciones y efectos que Align items, pero, en lugar de aplicarse a los hijos de un contenedor se aplica a un hiji individual, para cambiar su alineación con el padre.  