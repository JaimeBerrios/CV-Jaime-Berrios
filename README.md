# CV de Jaime Berrios

Colección de currículums de **Jaime Fernando Berrios Ortiz** desarrollados en
LaTeX e identificados como las armaduras de Iron Man.

## Versiones disponibles

- [Mark I](./pdf/Mark_I_CV_Jaime_Berrios.pdf): AltaCV compacto.
- [Mark II](./pdf/Mark_II_CV_Jaime_Berrios.pdf): barra lateral moderna.
- [Mark III](./pdf/Mark_III_CV_Jaime_Berrios.pdf): AltaCV clásico en teal.
- [Mark IV](./pdf/Mark_IV_CV_Jaime_Berrios.pdf): diseño púrpura con gráfico.
- [Mark V](./pdf/Mark_V_CV_Jaime_Berrios.pdf): diseño infográfico.
- [Mark VI](./pdf/Mark_VI_CV_Jaime_Berrios.pdf): diseño ReCeiVe.
- [Mark VII](./pdf/Mark_VII_CV_Jaime_Berrios.pdf): diseño con portada
  fotográfica original y barra lateral teal.

## Organización

```text
assets/
  iconos/                 Iconos reutilizables por cualquier CV
  Jaime_Berrios.jpg       Fotografía compartida
  Mark_VI_Fondo.pdf       Fondo exclusivo de Mark VI

cvs/
  Mark_I_CV_Jaime_Berrios.tex
  Mark_II_CV_Jaime_Berrios.tex
  ...

pdf/
  Mark_I_CV_Jaime_Berrios.pdf
  Mark_II_CV_Jaime_Berrios.pdf
  ...

plantilla/
  Mark_I_Plantilla.cls
  Mark_II_Plantilla.cls
  ...
```

Mark V no tiene una clase `.cls`; su diseño está contenido directamente en su
archivo `.tex`.

## Compilación

Para compilar Mark I:

```powershell
.\compilar.ps1
```

Para compilar otra versión:

```powershell
.\compilar.ps1 -Archivo "cvs/Mark_VI_CV_Jaime_Berrios.tex"
```

El script selecciona automáticamente PDFLaTeX, XeLaTeX o LuaLaTeX y guarda el
resultado dentro de `pdf/`.

## Galería web

El archivo `index.html` de la raíz contiene una galería responsiva desarrollada
con Bootstrap, CSS y JavaScript. Los estilos, scripts y miniaturas están
organizados dentro de `web/`. Abre `index.html` en el navegador para visualizar
y descargar las siete versiones del CV o publica la raíz mediante GitHub Pages.

## Contacto

- [LinkedIn](https://www.linkedin.com/in/jaimeberrios08/)
- [GitHub](https://github.com/JaimeBerrios)
- [YouTube](https://www.youtube.com/@jaimeberrios08/)
