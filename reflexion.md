# Meine Erfahrungen mit GitHub Copilot beim Entwickeln einer React-App

## Einleitung

Beim Entwickeln einer React-Anwendung habe ich GitHub Copilot eingesetzt, um mich beim Schreiben von Code unterstützen zu lassen. Dabei habe ich sowohl positive als auch negative Erfahrungen gemacht, die ich in diesem Bericht zusammenfassen möchte.

## Erste Eindrücke

Bereits beim einfachen Hereinkopieren der Aufgabenstellung zeigte sich die Stärke von GitHub Copilot: Die KI generierte eine benutzbare App, die weitgehend den Anforderungen entsprach. Diese erste Interaktion war erstaunlich effektiv und hat mir viel manuellen Aufwand erspart.

## Komplexere Aufgabenstellung

Als nächstes habe ich Copilot gebeten, einen zweiten Component zu erstellen – konkret eine Einzelseite, auf die man von der Hauptseite aus durch Klicken auf ein Land weitergeleitet werden sollte. Dabei traten jedoch einige Probleme auf:

- **Fehlende Dependencies**: Copilot generierte Code, der auf eine externe Dependency zurückgriff, die in meinem Projekt noch nicht installiert war. Erst nachdem ich explizit nachgefragt habe, konnte mir Copilot die nötige Installation (z. B. über `npm install`) empfehlen.
- **Unvollständige Navigation**: Trotz funktionierendem Komponenten-Code funktionierte das Weiterleiten zu den einzelnen Länder-Seiten nicht wie erwartet. Copilot konnte nicht eigenständig erkennen, woran das lag, und lieferte keine hilfreiche Fehlerdiagnose.

## Fazit

GitHub Copilot ist ein starkes Werkzeug, insbesondere für einfache Aufgaben und Boilerplate-Code. Bei komplexeren Interaktionen oder Fehleranalysen stößt es jedoch an seine Grenzen und benötigt teilweise gezielte Rückfragen und manuelles Eingreifen. Als Unterstützung beim Entwickeln ist es hilfreich – aber kein vollständiger Ersatz für ein tiefes Verständnis des eigenen Codes.

