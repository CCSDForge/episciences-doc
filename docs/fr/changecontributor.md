# Changer le contributeur

## Présentation

La fonctionnalité "Changement de contributeur" permet aux utilisateurs autorisés de transférer la propriété d'un article d'un contributeur à un autre.

## Permissions requises pour changer le contributeur

Seuls les rôles suivants peuvent changer le contributeur d'un article :

- **Administrateurs**
- **Rédacteurs en chef**

## Procédure

1. Accédez à la page d'administration de l'article
2. Dans le panneau **Contributeur**, cliquez sur le bouton **Changer le contributeur**
![Bouton changer le contributeur](img/contributor-0.png "changer le contributeur")
3. Une fenêtre modale s'ouvre :
    - Recherchez le nouveau contributeur par nom ou email
    - Sélectionnez l'utilisateur dans les résultats de l'autocomplétion
    - Cochez éventuellement **"Ajouter l'ancien contributeur comme co-auteur"** (coché par défaut)
4. Cliquez sur **Confirmer** pour appliquer le changement
![Fenêtre modale changer le contributeur](img/contributor-1.png "changer le contributeur")

## Option Ajouter l'ancien contributeur comme co-auteur

Lorsque cette option est **cochée** :

- L'ancien contributeur est ajouté comme co-auteur de l'article

![Changer le contributeur](img/contributor-2.png "changer le contributeur")

- Il continuera à recevoir des notifications concernant l'article
- Il peut toujours voir l'article dans son espace auteur

![Changer le contributeur](img/contributor-3.png "ancien contributeur")

- Notification reçue par le nouveau contributeur :

![Changer le contributeur](img/contributor-4.png "nouveau contributeur")

Lorsque cette option est **décochée** :

- L'ancien contributeur n'est pas ajouté comme co-auteur
- L'ancien contributeur reçoit une notification du changement, mais ne recevra plus de notifications concernant cet article par la suite.

![Changer le contributeur](img/contributor-5.png "changer le contributeur")

![Changer le contributeur](img/contributor-6.png "ancien contributeur")

## Co-auteur devenant contributeur

Un co-auteur peut être sélectionné comme nouveau contributeur. Dans ce cas :
- Son rôle de co-auteur est automatiquement supprimé
- Il devient le contributeur principal (propriétaire) de l'article

![Changer le contributeur](img/contributor-7.png "ancien co-auteur vers contributeur")

## Journal d'activité

L'action est enregistrée dans l'historique de l'article avec les détails suivants :
![Changer le contributeur](img/contributor-8.png "article historique")

## Affichage dans la chronologie

Dans la chronologie de l'article (panneau historique), le changement de contributeur apparaît comme suit :

![Changer le contributeur](img/contributor-9.png "conrtibuteur dans la chronologie")

## Notifications par email

Deux notifications par email sont envoyées lors du changement de contributeur, vous pouvez consulter les modèles d'email ici :

- Notification au nouveau contributeur
- Notification à l'ancien contributeur

![Changer le contributeur](img/contributor-10.png "modèle d'email")


