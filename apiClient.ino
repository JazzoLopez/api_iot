#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
const char* ssid = "StarTI"; //Nombre de tu red
const char* password = "H1p0dr0m0";//Contraseña de tu red  wifi
String url = "http://000.000.00.00:3000/api/getAll"; //Ip de tu dispositivo y la  ruta 

void setup()
{
  Serial.begin(9600);
  delay(10);
  // Conectar WiFi
  WiFi.begin(ssid,password);
  while (WiFi.status() != WL_CONNECTED) {
    Serial.println("No se puede establecer la conexión con la red");
    delay(4000);
  }
}

void loop()
{
  HTTPClient http;
  WiFiClient client;
  if (http.begin(client, url)) //Iniciar conexión
  {
    Serial.println("[HTTP] POST...");
    http.addHeader("Content-Type", "application/json");
    String temperatura=getTemperatura();
    // int humidity = 45.0;
    //   int temperatureC = 45.0;
    //     int temperatureF = 45.0;
    //       int heatindexC = 45.0;
    //         int humidity = 45.0;


    String presion="99";
    String folio="5";

    //Prueba de metodo POST, puedes usar el componente DHT11 para tenerlos en tiempo real
    int httpCode = http.POST(
      "{\"humidity\":17" 
      ",\"temperaturec\":18" 
      ",\"temperaturef\":128"  
      ",\"heatindexc\":25"
      ",\"heatindexf\":52}"
    );  // Realizar petición

  //Prueba del metodo GET
   // int httpCode = http.GET();

    if (httpCode > 0) {
      Serial.printf("[HTTP] POST... code: %d\n", httpCode);

      if (httpCode == HTTP_CODE_OK || httpCode == HTTP_CODE_MOVED_PERMANENTLY) {
        String respuesta = http.getString();  // Obtener respuesta
        Serial.println(respuesta);  // Mostrar respuesta por serial
      }
    }
    else {
      Serial.printf("[HTTP] POST... failed, error: %s\n", http.errorToString(httpCode).c_str());
    }

    http.end();
  }
  else {
    Serial.printf("[HTTP} Unable to connect\n");
  }

  delay(30000);
}
 String getTemperatura(){
  return "20";
}
