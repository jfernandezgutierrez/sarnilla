<template>
  <div>
    <video
      class="fm-video"
      controls
      autoplay
      loop
      :src="mainVideoSrc"
    >
      Your browser does not support the video tag.
    </video>

    <v-container>
      <v-expansion-panels v-model="historia">
        <v-expansion-panel>
          <v-expansion-panel-title>
            <h1>Historia</h1>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <p>
              En las verdes praderas del valle de Villacarriedo, en los Montes
              Pasiegos de Cantabria, se encuentra Sat La Sarnilla, una ganadería
              que ha resistido el paso del tiempo y se ha convertido en un
              símbolo de tradición y perseverancia.
            </p>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>

    <v-container>
      <v-expansion-panels v-model="hacemos">
        <v-expansion-panel>
          <v-expansion-panel-title>
            <h1>¿Qué hacemos en Sat La Sarnilla?</h1>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <p>
              Nos dedicamos a la producción de leche de alta calidad, manteniendo
              una tradición que ha pasado de generación en generación. Ubicados
              en el valle de Villacarriedo, en los Montes Pasiegos de Cantabria,
              combinamos prácticas tradicionales con innovaciones modernas para
              ofrecer productos lácteos excepcionales. Aquí te contamos más
              sobre nuestro trabajo:
            </p>
            <h2>Cuidado del Ganado</h2>
            <p>
              Nuestro compromiso comienza con el bienestar de nuestras vacas.
              Criamos a nuestro ganado en un entorno natural y saludable, donde
              tienen acceso a pastos frescos y agua limpia. Creemos que vacas
              felices y saludables producen la mejor leche.
            </p>

            <video
              
              controls
              autoplay
              loop
              :src="taxiVideoSrc"
            >
              Your browser does not support the video tag.
            </video>

            <h2>Producción de Leche</h2>
            <p>
              Nuestra leche es conocida por su pureza y sabor. Utilizamos
              técnicas de ordeño cuidadosas y controladas para garantizar que
              cada gota de leche cumple con nuestros altos estándares de
              calidad. Todo el proceso, desde el ordeño hasta el envasado, se
              realiza con la máxima higiene y cuidado.
            </p>

            <h2>Producción de Bolas de Silo</h2>
            <p>
              Además de nuestra producción de leche, también producimos bolas de
              silo. Este proceso implica la recolección y fermentación de
              forraje verde, asegurando una fuente de alimento rica en nutrientes
              para nuestro ganado durante todo el año, especialmente en invierno
              cuando el pasto es escaso.
            </p>

            <h2>Producción de Silo de Maíz</h2>
            <p>
              Asimismo, cultivamos maíz en nuestras propias tierras para producir
              silo de maíz. Este silo se obtiene fermentando el maíz picado,
              proporcionando una excelente fuente de energía y nutrientes para
              nuestras vacas, complementando su dieta y ayudando a mantener su
              salud y productividad.
            </p>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'AppPanels',
  data() {
    return {
      historia: [],
      hacemos: [],
      mainVideoSrc: require('../assets/Videos/resumen.mp4'),
      taxiVideoSrc: require('../assets/Videos/taxi.mp4'),
    };
  },
};
</script>

<style>
/* Estilos para ajustar el tamaño del video */
.fm-video {
  width: 100%; /* Ajusta el tamaño según tus necesidades */
  height: auto; /* La altura se ajustará automáticamente para mantener la proporción original */
  transform: scale(1.1); /* Ajusta el factor de escala según sea necesario */
}
</style>
