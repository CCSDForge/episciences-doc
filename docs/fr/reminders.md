# Relances automatiques
> **Rôles** : administrateur, rédacteur, rédacteur en chef, secrétaire de rédaction

Dans le site de la revue, il est possible de paramétrer des notifications qui seront envoyées lorsque le document change de statut (soumis, mis à jour, refusé).

Pour créer et paramétrer ces relances, aller dans : Gérer la revue > Mails > Relances automatiques.

Neuf types de relance sont proposés :

1. **Invitation de relecteur sans réponse** : permet de relancer un relecteur qui n’a pas répondu à une invitation.
2. **Rappel avant date de livraison de relecture** : permet de rappeler la date limite à un relecteur qui a accepté l’invitation.
3. **Relance après date de livraison de relecture** : permet de relancer un relecteur ayant accepté l’invitation mais 
   qui a dépassé le délai.
4. **Rappel avant date limite de modification** : permet de rappeler à l’auteur ou l’équipe éditoriale l’imminence du 
   délai de modification.
5. **Relance après date limite de modification** : permet de relancer l’auteur ou l’équipe éditoriale lorsque le délai 
   de modification d’un article est dépassé.
6. **Pas assez de relecteurs** : permet de rappeler à l’équipe éditoriale que l’article n’a pas encore assez de 
   relecteurs. Pour paramétrer le nombre minimum de relecteurs requis, aller dans Gérer la revue > Revue > Paramètres > Paramètres des rédacteurs.
7. **Article bloqué à l’état accepté** : permet de relancer les rédacteurs lorsque l’article a été accepté mais qu’il 
   n’est pas passé par les phases de correction et de mise en page.
8. **Article bloqué à l’état initial (soumis)** : permet de relancer les rédacteurs lorsque l’article a été accepté 
   mais qu’il n’a été ni refusé ni accepté.
9. **Article bloqué à l’état relu** : permet de relancer les rédacteurs lorsque l’article a été relu mais qu’il n’a été 
   ni refusé ni accepté.

Pour paramétrer, cliquer sur “Créer une relance automatique”. Un écran s’affiche avec une liste de paramètres à définir pour les types de relances souhaitées.

![Alt text](img/reminders-1.png "Créer une relance automatique : formulaire")

Les champs marqués d’un astérisque sont obligatoires.

+ **Type** : sélectionner le type de relance dans la liste déroulante. Au choix :

  - Invitation de relecteur sans réponse 
  - Rappel avant date de livraison de relecture 
  - Relance après date de livraison de relecture 
  - Rappel avant date limite de modification 
  - Relance après date limite de modification 
  - Pas assez de relecteurs 
  - Article bloqué à l’état accepté
  - Article bloqué à l’état initial (soumis)
  - Article bloqué à l’état relu


+ **Destinataire** : sélectionner le rôle concerné dans la liste déroulante. Au choix :

  - Rédacteur en chef 
  - Rédacteur 
  - Relecteur : pour ce rôle, les délais de relances sont conditionnés par les délais paramétrés dans Gérer la revue > Revue > Paramètres > Paramètres de relecture. Se référer à la page Paramètres de la revue de la documentation.
  - Auteur

+ **Délai*** : saisir un nombre correspondant au nombre de jours (la relance sera envoyée X jours après l’expiration du délai paramétré dans la revue).

+ **Répétition** : sélectionner la fréquence des relances dans la liste déroulante. Au choix :
  - Jamais 
  - Quotidienne 
  - Hebdomadaire 
  - Toutes les deux semaines 
  - Mensuelles

+ **Personnalisation** : sélectionner “Template par défaut” (non modifiable) ou “Template personnalisé” afin de pouvoir modifier le sujet du mail et le texte du message.

Cliquer sur “Valider” pour enregistrer vos modifications. Une relance automatique est créée. Il est possible de la modifier.

![Alt text](img/reminders-2.png "Créer une relance automatique : liste des relances")

Les envois de rappels automatiques sont effectués tous les jours à 00:00.

Les messages sont consultables dans l’historique des mails : Gérer la revue >  Mails > Historique.