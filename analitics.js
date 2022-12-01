/*Cookies e Identificación de Usuario

Para que Google Analytics determine que dos hits distintos
pertenecen al mismo usuario, se debe enviar un identificador único, asociado con ese usuario en particular, con cada hit.

Te recomiendo que tu servidor y tu cliente negocien un identificador y que éste sea almacenado en algún lugar en el que 
pueda persistir, tanto en el cliente como en el servidor.

En tu servidor yo almacenaría los identificadores registrados en una tabla de una base de datos.
En los clientes web, este id se guardaría como una cookie o en el local storage (https://developer.mozilla.org/es/docs/Web/API/Window/localStorage)

En los clientes nativos (como apps), guardaría el identificador del dispositivo donde te sea permitido (como el sistema de ficheros o, si quieres 
algo más sofisticado, una bb.dd. de SQL lite).

Alicia se conecta mediante su navegador web.

Establece una solicitud de identificación al servidor. Busca en su localstorage y no encuentra un identificador,
así que la solicitud no tiene un identificador como parámetro. El servidor genera un identificador (por ejemplo el "#dfefwer234").
El servidor almacena el identificador en la base de datos. El servidor devuelve el identificador. El cliente lo recibe y lo guarda en su localStorage.

La próxima vez que Alicia se conecte encontrará su identificador en su localstorage y hará la solicitud con "#dfefwer234".
El servidor sabe que el dispositivo con id "#dfefwer234" se ha conectado.

Consideraciones:
Lo ideal es que las solicitudes y respuestas estén protegidas (puedes usar SSL, por ejemplo) para garantizar la privacidad de la comunicación.
Tu algoritmo de generación de id debe de ser capaz de generar un gran abanico de ids que hagan dificil la labor de simular otros ids
(Te recomiendo ids que tengan 256 o más bits).



















*/
