<template>
  <div>
   <v-card class="pa-4">
  <v-row>
    <v-col cols="12" md="6">
      <video
        class="fm-video"
        controls
        autoplay
        muted
        loop
        :src="mainVideoSrc"
      >
        Your browser does not support the video tag.
      </video>
    </v-col>

    <v-col cols="12" md="6">
      <v-card flat class="mx-auto" subtitle="Sat La Sarnilla" title="Quienes Somos">
        <template v-slot:prepend>
          <v-icon color="green" icon="mdi-account-cowboy-hat"></v-icon>
        </template>
      
        <v-card-text>
          <p>
         En las verdes praderas del valle de Villacarriedo, en los Montes Pasiegos de Cantabria, se encuentra SAT La Sarnilla, una ganadería que ha resistido el paso del tiempo y se ha convertido en un símbolo de tradición y perseverancia.
<br>
Fundada por generaciones anteriores de la familia, esta explotación ganadera comenzó con tan solo 20 vacas y un profundo compromiso con la tierra y los animales. Con esfuerzo, dedicación y amor por el oficio, fue creciendo de forma progresiva, transmitiendo de padres a hijos no solo el conocimiento del campo, sino también los valores de respeto, trabajo y arraigo al territorio.
<br>
 La Sarnilla sigue siendo una empresa familiar, modernizada pero fiel a sus orígenes, combinando las técnicas tradicionales con avances tecnológicos para garantizar el bienestar animal y la calidad de su producción láctea. Lo que empezó como un pequeño sueño rural, se ha transformado en un proyecto sólido que representa la historia viva del campo pasiego.

       </p> </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</v-card>
  
 <v-card class="pa-4">
     <v-card-title>
  <v-responsive class="text-h5 font-weight-bold">
    ¿Qué hacemos?
  </v-responsive>
</v-card-title>
      <v-card-text>
        <p>
          Nos dedicamos a la producción de leche de alta calidad, manteniendo
          una tradición que ha pasado de generación en generación. Ubicados
          en el valle de Villacarriedo, en los Montes Pasiegos de Cantabria,
          combinamos prácticas tradicionales con innovaciones modernas para
          ofrecer productos lácteos excepcionales.
        </p>

        <!-- Secciones con tarjetas expandibles -->
        <v-expansion-panels multiple>

          <!-- Cuidado del Ganado -->
          <v-expansion-panel>
            
            <v-expansion-panel-title>
              <v-icon color="green" icon="mdi-cow"></v-icon>
              <h2>Cuidado del Ganado</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row>
                <v-col cols="12" md="6">
 <p>
                Nuestro compromiso comienza con el bienestar de nuestras vacas... <br>
                 Cada ternero y ternera recibe leche pasteurizada individualmente, asegurando una nutrición segura, higiénica y adaptada a sus necesidades desde los primeros días de vida. Este cuidado personalizado se complementa con una alimentación equilibrada a base de pienso de calidad, que favorece su desarrollo óptimo y fortalece su sistema inmunológico.

Gracias a este enfoque integral, garantizamos que cada animal crezca sano, fuerte y en condiciones de máximo bienestar, lo cual se refleja directamente en la calidad de nuestra producción.
              </p>
                </v-col>
                <v-col cols="12" md="6">
<video class="fm-video" controls loop :src="taxiVideoSrc" />
                </v-col>
               
              
              </v-row>
              
            </v-expansion-panel-text>
          </v-expansion-panel>

          <!-- Producción de Leche -->
          <v-expansion-panel>
            <v-expansion-panel-title>
              <v-icon color="green" icon="mdi-cup"></v-icon>
              <h2>Producción de Leche</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <p>
                Nuestra leche es conocida por su pureza y sabor, fruto del cuidado que ponemos en cada etapa del proceso. Utilizamos técnicas de ordeño cuidadosas y controladas que garantizan que cada gota cumpla con los más altos estándares de higiene y calidad.

Contamos con dos robots Lely Astronaut de última generación, que permiten un ordeño automático, eficiente y respetuoso con el ritmo natural de cada vaca. Gracias a esta tecnología, logramos una producción constante sin estrés para el animal, mejorando su bienestar y la trazabilidad del producto.

Además, para aquellas vacas de mayor edad o que requieren una atención especial —como en casos de enfermedad o recuperación— disponemos de una sala de ordeño tradicional. Allí realizamos el proceso de forma manual y personalizada, asegurando que cada animal reciba el cuidado que necesita sin comprometer su comodidad ni la calidad de la leche.

Este enfoque combinado nos permite mantener un equilibrio entre innovación y atención individualizada, garantizando una leche excepcional en todos los sentidos.
              </p>
              <v-row>
                <v-col cols="12" md="6">
                  <video class="fm-video" controls loop :src="robot" />
                </v-col>
                <v-col cols="12" md="6">
                  <video class="fm-video" controls loop :src="ordeno" />
                </v-col>
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>

          <!-- Bolas de Silo -->
          <v-expansion-panel>
            <v-expansion-panel-title>
              <v-icon color="green" icon="mdi-circle"></v-icon>
              <h2>Producción de Bolas de Silo</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <p>
                  Además de nuestra producción de leche, también producimos bolas de
              silo. Este proceso implica la recolección y fermentación de
              forraje verde, asegurando una fuente de alimento rica en nutrientes
              para nuestro ganado durante todo el año, especialmente en invierno
              cuando el pasto es escaso.
           
              </p>
            </v-expansion-panel-text>
          </v-expansion-panel>

          <!-- Silo de Maíz -->
          <v-expansion-panel>
            <v-expansion-panel-title>
               <v-icon color="green" icon="mdi mdi-corn"></v-icon>
              <h2>Producción de Silo de Maíz</h2>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
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
      </v-card-text>
    </v-card>
    
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
      robot: require('../assets/Videos/robot-pezoneras.mp4'),
      ordeno: require('../assets/Videos/sala-ordeno.mp4'),
    };
  },
};
</script>

<style>
.icon-ubre {
  width: 48px;
  height: 48px;
  filter: invert(32%) sepia(86%) saturate(2145%) hue-rotate(201deg) brightness(93%) contrast(101%);
}
@media screen and (min-width: 900px) {
.fm-video {
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9; /* Fuerza misma proporción */
  object-fit: cover;
  border-radius: 8px;
  display: block;
  margin: 0 auto;
}
.sala {
  width: 50%;
  height: auto;
}
.robot {
  width: 50%;
  height: 20%;
}
}
@media screen and (max-width: 900px) {
  .fm-video {
  width: 100%;
  height: auto;
}

}




.v-container {
  margin-bottom: 16px;
}

.v-expansion-panel-text {
  overflow: hidden;
}
</style>
