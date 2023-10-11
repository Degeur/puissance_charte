import React, { useState, useEffect } from 'react';
import FeedbackModal from './FeedbackModal';


const questions = [
  {
    question: "Qu'est-ce que le harcèlement sexuel au travail ?",
    options: [
      "a) Une forme de compliment professionnel",
      "b) Une manière amicale de traiter les collègues",
      "c) Une conduite non désirée de nature sexuelle qui affecte le travail",
      "d) Un moyen de renforcer l'esprit d'équipe"
    ],
    correctAnswer: "c"
  },
  {
    question: "Qui peut être victime de harcèlement sexuel au travail ?",
    options: [
      "a) Uniquement les personnes qui portent des tenues provocantes",
      "b) Uniquement les supérieurs hiérarchiques",
      "c) Toute personne, indépendamment du sexe, de la position ou de l'apparence",
      "d) Uniquement les personnes avec un tempérament faible"
    ],
    correctAnswer: "c"
  },
  {
    question: "Quelle est la meilleure façon de prévenir le harcèlement sexuel au travail ?",
    options: [
      "a) Ignorer le problème et espérer qu'il disparaîtra de lui-même",
      "b) Sensibiliser et éduquer les employés sur le harcèlement sexuel",
      "c) Encourager les comportements sexistes",
      "d) Isoler les victimes pour éviter les conflits"
    ],
    correctAnswer: "b"
  },
  {
    question: "Comment devriez-vous réagir si vous êtes victime de harcèlement sexuel au travail ?",
    options: [
      "a) Ne rien faire et endurer la situation",
      "b) En parler à votre supérieur ou aux ressources humaines",
      "c) Répondre avec des insultes et de la violence",
      "d) Ignorer complètement l'incident"
    ],
    correctAnswer: "b"
  },
  {
    question: "Quelles sont les conséquences du harcèlement sexuel pour la victime ?",
    options: [
      "a) Augmentation de l'estime de soi",
      "b) Dommages psychologiques, stress, anxiété et dépression",
      "c) Renforcement des compétences en communication",
      "d) Promotion professionnelle rapide"
    ],
    correctAnswer: "b"
  },
  {
    question: "Que faire si vous êtes témoin de harcèlement sexuel au travail ?",
    options: [
      "a) Participer activement au harcèlement",
      "b) Encourager la victime à se défendre seule",
      "c) Intervenir, soutenir la victime et signaler l'incident",
      "d) Ignorer la situation et partir"
    ],
    correctAnswer: "c"
  },
  {
    question: "Quel est le rôle de l'employeur dans la prévention du harcèlement sexuel au travail ?",
    options: [
      "a) Encourager le harcèlement pour améliorer la productivité",
      "b) Éduquer les employés sur leurs droits et responsabilités",
      "c) Ignorer les cas de harcèlement",
      "d) Promouvoir des blagues offensantes au travail"
    ],
    correctAnswer: "b"
  },
  {
    question: "Comment pouvez-vous soutenir un collègue victime de harcèlement sexuel au travail ?",
    options: [
      "a) Blâmer la victime pour sa situation",
      "b) Offrir du soutien et écouter la victime sans jugement",
      "c) Encourager la victime à quitter son emploi",
      "d) Ignorer la victime et ne rien faire"
    ],
    correctAnswer: "b"
  },
  {
    question: "Quelles sont les conséquences juridiques du harcèlement sexuel au travail ?",
    options: [
      "a) Aucune conséquence légale",
      "b) Possibilité d'une plainte en justice, de sanctions et de dommages-intérêts",
      "c) Récompense financière pour la victime",
      "d) Promotion de la personne coupable de harcèlement"
    ],
    correctAnswer: "b"
  },
  {
    question: "Quels sont les signes courants de harcèlement sexuel au travail ?",
    options: [
      "a) Respect mutuel et communication ouverte",
      "b) Égalité des chances et encouragement de la diversité",
      "c) Compliments appropriés et reconnaissance du travail",
      "d) Commentaires sexuels inappropriés, avances non désirées et blagues offensantes"
    ],
    correctAnswer: "d"
  },
  {
    question: "Comment réagir si un collègue vous fait des commentaires déplacés sur votre apparence au travail ?",
    options: [
      "a) Rire et remercier pour le compliment",
      "b) Dire fermement que ce type de commentaires est inapproprié",
      "c) Ignorer et éviter ce collègue",
      "d) Répondre par des commentaires déplacés en retour"
    ],
    correctAnswer: "b"
  },
  {
    question: "Qu'est-ce qui caractérise le harcèlement sexuel au travail ?",
    options: [
      "a) Comportements agréables envers les collègues",
      "b) Une série de compliments légers sur l'apparence",
      "c) Toute action indésirable à connotation sexuelle qui affecte le milieu professionnel",
      "d) Échange de plaisanteries amicales entre collègues"
    ],
    correctAnswer: "c"
  },
  {
    question: "Que faire si vous êtes victime de harcèlement sexuel et que votre supérieur est l'auteur du harcèlement ?",
    options: [
      "a) Ignorer le harcèlement et chercher un nouvel emploi",
      "b) Parler à un autre supérieur ou aux ressources humaines de l'entreprise",
      "c) Encourager les comportements en évitant toute confrontation",
      "d) Faire la remarque au harceleur directement"
    ],
    correctAnswer: "b"
  },
  {
    question: "Comment promouvoir un environnement de travail respectueux et inclusif ?",
    options: [
      "a) Encourager des blagues légères entre collègues",
      "b) Sensibiliser sur le respect et la diversité au travail",
      "c) Éviter toute interaction sociale au travail",
      "d) Favoriser le second degré au travail"
    ],
    correctAnswer: "b"
  },
  {
    question: "Quelles mesures pouvez-vous prendre pour prévenir le harcèlement sexuel au travail en tant qu'employé ?",
    options: [
      "a) Soutenir activement les harceleurs pour qu’ils n’aient plus envie de déranger",
      "b) Participer aux conversations déplacées pour que la victime se sente soutenue",
      "c) Signaler tout comportement suspect ou inapproprié",
      "d) Ignorer les situations de harcèlement car ça ne vous regarde pas"
    ],
    correctAnswer: "c"
  },
  {
    question: "Qu’entend-on par VSS ?",
    options: [
      "a) Violences SchutzStaffel",
      "b) Violences Sexistes et Sexuelles",
      "c) Violations sexuelles et suspects"
    ],
    correctAnswer: "b"
  },
  {
    question: "Comment définir le consentement ?",
    options: [
      "a) L'accord mutuel, explicite et volontaire entre toutes les parties impliquées",
      "b) L'accord uniquement verbal sans prise en compte des sentiments des autres",
      "c) L'absence de refus explicite",
      "d) L'obtention du consentement en utilisant des moyens coercitifs"
    ],
    correctAnswer: "a"
  },
  {
    question: "Le harcèlement sexuel se limite-t-il à des avances physiques non désirées ?",
    options: [
      "a) Oui",
      "b) Non"
    ],
    correctAnswer: "a"
  },
  {
    question: "Le harcèlement sexuel ne peut survenir que dans les relations entre collègues de même niveau hiérarchique.",
    options: [
      "a) Vrai",
      "b) Faux"
    ],
    correctAnswer: "b"
  },
  {
    question: "Que signifie le terme 'cyber-harcèlement sexuel' ?",
    options: [
      "a) Harcèlement sexuel impliquant l'utilisation d'ordinateurs et d'internet",
      "b) Harcèlement sexuel sur les réseaux sociaux uniquement",
      "c) Harcèlement sexuel commis uniquement par des inconnus",
      "d) Harcèlement sexuel lié à la cybersécurité"
    ],
    correctAnswer: "a"
  },
  {
    question: "Si vous êtes victime de harcèlement sexuel au travail, est-il important de conserver des preuves ?",
    options: [
      "a) Non, cela ne fait pas de différence",
      "b) Oui, c'est essentiel pour étayer votre cas",
      "c) Non, cela peut aggraver la situation",
      "d) Oui, mais uniquement si vous voulez porter plainte"
    ],
    correctAnswer: "b"
  },
  {
    question: "Le harcèlement sexuel est-il uniquement basé sur le genre ?",
    options: [
      "a) Oui",
      "b) Non"
    ],
    correctAnswer: "b"
  },
  {
    question: "Comment pouvez-vous soutenir un collègue victime de harcèlement sexuel au travail ?",
    options: [
      "a) Ignorer la situation pour éviter les conflits",
      "b) Encourager la victime à quitter l'entreprise",
      "c) Offrir du soutien, l'encourager à signaler l'incident et lui rappeler que ce n'est pas sa faute",
      "d) Se moquer de la victime pour minimiser la gravité de la situation"
    ],
    correctAnswer: "c"
  },
  {
    question: "Quelles sont les répercussions professionnelles du harcèlement sexuel au travail pour la victime ?",
    options: [
      "a) Promotion et augmentation de salaire",
      "b) Stagnation de carrière et diminution de la productivité",
      "c) Renforcement des compétences professionnelles",
      "d) Augmentation de la popularité au sein de l'entreprise"
    ],
    correctAnswer: "b"
  },
  {
    question: "Comment réagir si vous êtes témoin d'une situation de harcèlement sexuel au travail et que vous craignez des représailles ?",
    options: [
      "a) Garder le silence par peur de perdre votre emploi",
      "b) Parler de manière confidentielle à un collègue de confiance",
      "c) Signaler l'incident de manière anonyme aux ressources humaines",
      "d) Intervenir immédiatement et confronter le harceleur publiquement"
    ],
    correctAnswer: "c"
  },
  {
    question: "Comment prévenir le harcèlement sexuel au travail en tant qu'employeur ?",
    options: [
      "a) Établir des politiques et des procédures claires de prévention et de gestion du harcèlement",
      "b) Ignorer les comportements inappropriés pour éviter les conflits",
      "c) Favoriser un environnement de travail compétitif",
      "d) Éviter de sensibiliser les employés au harcèlement sexuel"
    ],
    correctAnswer: "a"
  },
  {
    question: "Quel est le rôle des témoins dans les cas de harcèlement sexuel au travail ?",
    options: [
      "a) Encourager le harceleur à persévérer",
      "b) Témoigner en faveur du harceleur",
      "c) Apporter des preuves tangibles du harcèlement",
      "d) Intervenir, soutenir la victime et témoigner si nécessaire"
    ],
    correctAnswer: "d"
  },
  {
    question: "Comment pouvez-vous éduquer vos collègues sur le harcèlement sexuel au travail ?",
    options: [
      "a) Ignorer le sujet car il est gênant",
      "b) Organiser des séances de sensibilisation et de formation",
      "c) Promouvoir des comportements sexistes pour susciter le débat",
      "d) Encourager les blagues sur le harcèlement"
    ],
    correctAnswer: "b"
  },
  {
    question: "Quelles mesures peuvent être prises pour prévenir le harcèlement sexuel dans le processus de recrutement ?",
    options: [
      "a) Encourager les questions discriminatoires lors des entretiens",
      "b) Évaluer les candidats uniquement sur leur apparence physique",
      "c) Sensibiliser les recruteurs à l'importance de l'égalité des chances et du respect",
      "d) Sélectionner uniquement les candidats du sexe opposé du recruteur"
    ],
    correctAnswer: "c"
  },
  {
    question: "Comment dénoncer le harcèlement sexuel au travail de manière anonyme et sécurisée ?",
    options: [
      "a) Publier l'incident sur les réseaux sociaux avec un compte anonyme",
      "b) Signaler l'incident via les canaux de signalement prévus par l'entreprise",
      "c) Ne rien faire car il n'y a pas de moyen de signalement anonyme",
      "d) Parler directement au harceleur de manière confidentielle"
    ],
    correctAnswer: "b"
  },
  {
    question: "Quel est le rôle des ressources humaines en cas de harcèlement sexuel au travail ?",
    options: [
      "a) Ignorer les plaintes pour éviter des complications",
      "b) Prendre les plaintes au sérieux, mener des enquêtes et prendre des mesures appropriées",
      "c) Encourager le harcèlement en minimisant les conséquences pour les harceleurs",
      "d) Discréditer les victimes et les dissuader de porter plainte"
    ],
    correctAnswer: "b"
  },
  {
    question: "Quelle est la définition légale du harcèlement sexuel au travail selon la législation en vigueur ?",
    options: [
      "a) Une simple expression de désir entre collègues",
      "b) Un comportement toléré si les deux parties sont consentantes",
      "c) Un ensemble d'actes à connotation sexuelle non désirés, répétés ou un acte grave qui porte atteinte à la dignité de la personne",
      "d) Une méthode pour renforcer les relations interpersonnelles"
    ],
    correctAnswer: "c"
  },
  {
    question: "Quel élément caractérise le harcèlement sexuel au travail selon les lois en vigueur ?",
    options: [
      "a) Consentement mutuel entre les parties",
      "b) Acte physique isolé sans répétition",
      "c) Comportements non désirés et répétés de nature sexuelle",
      "d) Actions effectuées dans le cadre du travail"
    ],
    correctAnswer: "c"
  },
  {
    question: "Quelles sanctions peuvent être prévues en cas de harcèlement sexuel au travail, conformément à la loi ?",
    options: [
      "a) Aucune sanction, car il s'agit de relations professionnelles",
      "b) Avertissement verbal",
      "c) Sanctions disciplinaires, amendes, et même sanctions pénales",
      "d) Renvoi du harceleur sans enquête approfondie"
    ],
    correctAnswer: "c"
  },
  {
    question: "Quels sont les recours légaux pour une victime de harcèlement sexuel au travail ?",
    options: [
      "a) Se défendre physiquement contre l'agresseur",
      "b) Ignorer les agressions pour éviter les conflits",
      "c) Signaler à sa hiérarchie et/ou aux ressources humaines, engager des poursuites judiciaires",
      "d) Changer de lieu de travail sans en informer l'employeur"
    ],
    correctAnswer: "c"
  },
  {
    question: "Quelles obligations incombent à l'employeur en cas de harcèlement sexuel au travail, selon la législation en vigueur ?",
    options: [
      "a) Aucune obligation, car c'est la responsabilité individuelle de chaque employé",
      "b) Sensibiliser les employés sur le harcèlement, mais pas d'intervention directe en cas d'incident",
      "c) Prévenir et agir en mettant en place des mesures de prévention, de formation et de sanctions contre le harcèlement sexuel",
      "d) Encourager les comportements inappropriés pour booster la productivité"
    ],
    correctAnswer: "c"
  },
  {
    question: "Quel pourcentage des personnes interrogées dans l'étude IFOP ont été victimes de harcèlement (perçu au sens de la loi) au travail ?",
    options: [
      "a) 20%",
      "b) 30%",
      "c) 40%",
      "d) 50%"
    ],
    correctAnswer: "c"
  },
  {
    question: "Selon l'étude IFOP, environ quel pourcentage de personnes bi ou lesbiennes interrogées aurait été victime de harcèlement lié à l’orientation sexuelle au travail ?",
    options: [
      "a) 60%",
      "b) 70%",
      "c) 80%",
      "d) 90%"
    ],
    correctAnswer: "c"
  },
  {
    question: "Quel pourcentage des femmes du milieu professionnel sont victimes de comportements sexistes au travail selon les données fournies ?",
    options: [
      "a) 52.5%",
      "b) 33.5%",
      "c) 46.5%",
      "d) 38.5%"
    ],
    correctAnswer: "a"
  },
  {
    question: "Selon les données, quel pourcentage des hommes du milieu professionnel sont victimes de comportements sexistes au travail ?",
    options: [
      "a) 11%",
      "b) 14%",
      "c) 18%",
      "d) 9%"
    ],
    correctAnswer: "b"
  },
  {
    question: "Quelle forme d'agression liée au harcèlement est la plus fréquente dans le milieu professionnel ?",
    options: [
      "a) blagues ou remarques sexistes",
      "b) sifflements et gestes déplacés de la part d'un homme",
      "c) remarques sur la tenue vestimentaire ou le physique",
      "d) demandes d'acte explicite"
    ],
    correctAnswer: "a"
  },
  {
    question: "Un collègue vous envoie des messages suggestifs et insistants malgré votre refus.",
    options: [
      "a) harcèlement sexuel",
      "b) agression sexuelle",
      "c) drague",
      "d) aucun des 3"
    ],
    correctAnswer: "a"
  },
  {
    question: "Votre collègue vous complimente sur votre tenue de manière respectueuse et ponctuelle.",
    options: [
      "a) harcèlement sexuel",
      "b) agression sexuelle",
      "c) drague",
      "d) aucun des 3"
    ],
    correctAnswer: "d"
  },
  {
    question: "Un supérieur hiérarchique vous demande des faveurs sexuelles en échange d'une promotion.",
    options: [
      "a) harcèlement sexuel",
      "b) agression sexuelle",
      "c) drague",
      "d) aucun des 3"
    ],
    correctAnswer: "b"
  },
  {
    question: "Un collègue vous propose d'aller boire un verre après le travail de manière amicale.",
    options: [
      "a) harcèlement sexuel",
      "b) agression sexuelle",
      "c) drague",
      "d) aucun des 3"
    ],
    correctAnswer: "c"
  },
  {
    question: "Votre collègue vous fait des avances persistantes et non désirées malgré vos refus répétés.",
    options: [
      "a) harcèlement sexuel",
      "b) agression sexuelle",
      "c) drague",
      "d) aucun des 3"
    ],
    correctAnswer: "a"
  },
  {
    question: "Votre supérieur vous touche de manière inappropriée et non consentie.",
    options: [
      "a) harcèlement sexuel",
      "b) agression sexuelle",
      "c) drague",
      "d) aucun des 3"
    ],
    correctAnswer: "b"
  },
  {
    question: "Un collègue vous invite à une réunion de travail de manière professionnelle.",
    options: [
      "a) harcèlement sexuel",
      "b) agression sexuelle",
      "c) drague",
      "d) aucun des 3"
    ],
    correctAnswer: "d"
  },
  {
    question: "Un collègue vous envoie une blague à caractère sexuel de manière occasionnelle.",
    options: [
      "a) harcèlement sexuel",
      "b) agression sexuelle",
      "c) drague",
      "d) aucun des 3"
    ],
    correctAnswer: "c"
  },
  {
    question: "Votre collègue vous fait des compliments persistants sur votre physique malgré votre gêne.",
    options: [
      "a) harcèlement sexuel",
      "b) agression sexuelle",
      "c) drague",
      "d) aucun des 3"
    ],
    correctAnswer: "a"
  },
  {
    question: "Votre collègue vous propose d’aller chercher à manger à la cafétéria.",
    options: [
      "a) harcèlement sexuel",
      "b) agression sexuelle",
      "c) drague",
      "d) aucun des 3"
    ],
    correctAnswer: "d"
  },
  {
    question: "Un collègue vous envoie régulièrement des messages sur votre apparence physique et vos vêtements.",
    options: [
      "a) harcèlement sexuel",
      "b) agression sexuelle",
      "c) drague",
      "d) aucun des 3"
    ],
    correctAnswer: "a"
  },
  {
    question: "Votre supérieur hiérarchique vous touche de manière inappropriée pendant une réunion d'équipe.",
    options: [
      "a) harcèlement sexuel",
      "b) agression sexuelle",
      "c) drague",
      "d) aucun des 3"
    ],
    correctAnswer: "b"
  },
  {
    question: "Un collègue vous invite à sortir pour un dîner romantique malgré vos refus clairs et répétés.",
    options: [
      "a) harcèlement sexuel",
      "b) agression sexuelle",
      "c) drague",
      "d) aucun des 3"
    ],
    correctAnswer: "a"
  },
  {
    question: "Un collègue vous propose de vous aider dans votre travail.",
    options: [
      "a) harcèlement sexuel",
      "b) agression sexuelle",
      "c) drague",
      "d) aucun des 3"
    ],
    correctAnswer: "d"
  },
  {
    question: "Votre collègue vous envoie des messages suggestifs et insistants, mais vous n'êtes pas gêné(e) par ces messages.",
    options: [
      "a) harcèlement sexuel",
      "b) agression sexuelle",
      "c) drague",
      "d) aucun des 3"
    ],
    correctAnswer: "c"
  },
  {
    question: "Un supérieur hiérarchique vous dit qu’une robe vous irait bien.",
    options: [
      "a) harcèlement sexuel",
      "b) agression sexuelle",
      "c) drague",
      "d) aucun des 3"
    ],
    correctAnswer: "c"
  },
  {
    question: "Un collègue vous fait des avances et vous vous sentez menacé(e) et mal à l'aise.",
    options: [
      "a) harcèlement sexuel",
      "b) agression sexuelle",
      "c) drague",
      "d) aucun des 3"
    ],
    correctAnswer: "b"
  },
  {
    question: "Un collègue vous reluque au travail.",
    options: [
      "a) harcèlement sexuel",
      "b) agression sexuelle",
      "c) drague",
      "d) aucun des 3"
    ],
    correctAnswer: "b"
  },
  {
    question: "Votre collègue vous propose de prendre un café ensemble pour discuter du travail.",
    options: [
      "a) harcèlement sexuel",
      "b) agression sexuelle",
      "c) drague",
      "d) aucun des 3"
    ],
    correctAnswer: "d"
  },
  {
    question: "Votre collègue vous fait des compliments sur votre travail et votre professionnalisme.",
    options: [
      "a) harcèlement sexuel",
      "b) agression sexuelle",
      "c) drague",
      "d) aucun des 3"
    ],
    correctAnswer: "d"
  }
];

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null);
  const [score, setScore] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [timer, setTimer] = useState(0);
  const [timerId, setTimerId] = useState(null);

  const startQuiz = () => {
    setScore(0);
    setIsModalOpen(false);
    getNextRandomQuestionIndex();
    setTimer(30); // Reset timer for each new question

    // Start the timer for the new game
    const id = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          // The time is up, consider it as an incorrect answer
          handleAnswerClick(''); // Pass an empty answer to mark as incorrect
          clearInterval(id); // Clear the timer interval
          return prevTimer;
        }
      });
    }, 1000);
    setTimerId(id);
  };

  const getNextRandomQuestionIndex = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    setCurrentQuestionIndex(randomIndex);
    setIsModalOpen(false);
    setFeedbackMessage('');
  };

  const handleAnswerClick = (selectedAnswer) => {
    // Stop the timer if a button is clicked
    if (timerId) {
      clearInterval(timerId);
    }

    const correctAnswer = questions[currentQuestionIndex].correctAnswer;

    if (selectedAnswer === correctAnswer) {
      setScore(score + 1);
      setIsAnswerCorrect(true);
      setFeedbackMessage('Bonne réponse !');
    } else {
      setIsAnswerCorrect(false);
      setFeedbackMessage('Mauvaise réponse.');
    }

    setIsModalOpen(true);
  };

  const handleNextQuestion = () => {
    setIsModalOpen(false);
    getNextRandomQuestionIndex();
    setTimer(30); // Reset timer for each new question

    // Start the timer for the new question
    const id = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          // The time is up, consider it as an incorrect answer
          handleAnswerClick(''); // Pass an empty answer to mark as incorrect
          clearInterval(id); // Clear the timer interval
          return prevTimer;
        }
      });
    }, 1000);
    setTimerId(id);
  };

  useEffect(() => {
    return () => {
      // Clear the timer interval when the component is unmounted
      clearInterval(timerId);
    };
  }, [timerId]);

  useEffect(() => {
    if (currentQuestionIndex === null && score !== 0) {
      // Quiz completed, reset and get a new random question
      alert(`Quiz completed! Your score: ${score}/${questions.length}`);
      getNextRandomQuestionIndex();
    }
  }, [currentQuestionIndex, score]);

  return (
    <div style={{ padding: '20px' }}>
      {currentQuestionIndex === null ? (
        <button onClick={startQuiz}>Commencer le jeu</button>
      ) : (
        <div>
          <h2>{questions[currentQuestionIndex].question}</h2>
          <p>Temps restant : {timer} secondes</p>
          <ul>
            {questions[currentQuestionIndex].options.map((option, index) => (
              <li key={index}>
                <button onClick={() => handleAnswerClick(option.charAt(0))}>
                  {option}
                </button>
              </li>
            ))}
          </ul>
          {isModalOpen && (
            <div>
              <FeedbackModal
                isOpen={isModalOpen}
                onClose={handleNextQuestion}
                message={feedbackMessage}
                isCorrect={isAnswerCorrect}
              />
              <button onClick={handleNextQuestion}>Question Suivante</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default App;