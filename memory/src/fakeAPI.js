function getCards(){
    return new promise((resolve, reject)=>{
        resolve(cards)
    })
}

/*function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }*/
const cards = [
    {
        id: 1,
        idPair: 1,
        photo: "",
        text: "H20",
        status: "oculto"
    },{
        id: 2,
        idPair: 1,
        photo: "http://agrega.juntadeandalucia.es/repositorio/16032017/1c/es-an_2017031612_9091520/mol_agua.png",
        text: "",
        status: "oculto"
    },{
        id: 3,
        idPair: 2,
        photo: "",
        text: "Exosfera",
        status: "oculto"
    },{
        id: 4,
        idPair: 2,
        photo: "https://www.capasdelatierra.org/wp-content/uploads/2018/04/atmosfera1-1.jpg",
        text: "",
        status: "oculto"
    },{
        id: 5,
        idPair: 3,
        photo: "",
        text: "Estado Sólido",
        status: "oculto"
    },{
        id: 6,
        idPair: 3,
        photo: "http://elbibliote.com/libro-pedia/manual_csnaturales/3grado/capitulo1/img/04/solido.jpg",
        text: "",
        status: "oculto"
    },{
        id: 7,
        idPair: 4,
        photo: "",
        text: "Sistema Heterogéneo",
        status: "oculto"
    },{
        id: 8,
        idPair: 4,
        photo: "https://www.ensambledeideas.com/wp-content/uploads/2017/02/lime-907124_1280-1024x682.jpg",
        text: "",
        status: "oculto"
    },{
        id: 9,
        idPair: 5,
        photo: "",
        text: "Residuos Orgánicos",
        status: "oculto"
    },{
        id: 10,
        idPair: 5,
        photo: "http://www.lanoticia.com/wp-content/uploads/2018/04/dreamstime_s_90415429.jpg",
        text: "",
        status: "oculto"
    },{
        id: 11,
        idPair: 6,
        photo: "",
        text: "Lixiviados",
        status: "oculto"
    },{
        id: 12,
        idPair: 6,
        photo: "https://tendenzias.com/wp-content/uploads/2015/02/lixiviados.jpg",
        text: "",
        status: "oculto"
    },{
        id: 13,
        idPair: 7,
        photo: "",
        text: "Combustión Completa",
        status: "oculto"
    },{
        id: 14,
        idPair: 7,
        photo: "https://1.bp.blogspot.com/-SAAJnI70aDM/WmtyvBsRvkI/AAAAAAAAQHY/Ji3Ubi1Is1ArZI-LoNm9m9PxzCWN6vPPwCLcBGAs/s1600/1317331815_red_de_gas_natural.jpg",
        text: "",
        status: "oculto"
    },{
        id: 15,
        idPair: 8,
        photo: "",
        text: "Fuente de Óxido de Nitrógeno (NOx)",
        status: "oculto"
    },{
        id: 16,
        idPair: 8,
        photo: "https://www.incimages.com/uploaded_files/image/970x450/getty_523821065_98040.jpg",
        text: "",
        status: "oculto"
    },{
        id: 17,
        idPair: 9,
        photo: "",
        text: "Densidad",
        status: "oculto"
    },{
        id: 18,
        idPair: 9,
        photo: "https://espaciociencia.com/wp-content/uploads/densidad-formula-2.jpg",
        text: "",
        status: "oculto"
    },{
        id: 19,
        idPair: 10,
        photo: "",
        text: "Destilación",
        status: "oculto"
    },{
        id: 20,
        idPair: 10,
        photo: "https://www.centroestudioscervantinos.es/wp-content/uploads/2019/06/destilacion1.jpg",
        text: "",
        status: "oculto"
    },{
        id: 21,
        idPair: 11,
        photo: "",
        text: "Agente Tensoactivo",
        status: "oculto"
    },{
        id: 22,
        idPair: 11,
        photo: "https://assets.epicurious.com/photos/582a339cb3446c1b212b9d5e/16:9/w_2560,c_limit/washing-dishes-111416.jpg",
        text: "",
        status: "oculto"
    },{
        id: 23,
        idPair: 12,
        photo: "",
        text: "Suelo",
        status: "oculto"
    },{
        id: 24,
        idPair: 12,
        photo: "http://universidadagricola.com/wp-content/uploads/2018/10/Suelos.jpg",
        text: "",
        status: "oculto"
    },{
        id: 25,
        idPair: 13,
        photo: "",
        text: "Ánima Clasifica",
        status: "oculto"
    },{
        id: 26,
        idPair: 13,
        photo: "https://i2.wp.com/lahuertinadetoni.es/wp-content/uploads/2014/06/CompostBinOpen.jpg?resize=1018%2C768",
        text: "",
        status: "oculto"
    },{
        id: 27,
        idPair: 14,
        photo: "",
        text: "Smog Fotoquímico",
        status: "oculto"
    },{
        id: 28,
        idPair: 14,
        photo: "https://t2.ev.ltmcdn.com/es/posts/2/7/6/consecuencias_del_smog_fotoquimico_1672_2_600.jpg",
        text: "",
        status: "oculto"
    }
    ]

export default getCards