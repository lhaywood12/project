//Using textNodes in a array in order to set them a specific order that will align with the choices that are selected
const textNodes = [
    {
        id:1,
        text:'You sneak into the royal palace at night with a large bag. You sneak around until you break into the treasure chamber of the king. You filled the bag with lots of gems and jewels left the chamber. Rushing down the narrow hallway, you see it breaks off into two different paths.',
        img: 'media2/treasure1.jpg',
        options: [
            {
                text:'Go left',
                nextText: 2
            },
            {
                text:'Go Right',
                nextText: 3
            }
        ]
    },
    {
        id:2,
        text:'Turning left, you bumped into none other than the king himself. Seeing the large bag in your hands, the king freaks out and yells for the guards. You had to run away not, but not before you knocked out the king and stole his jewels and crown. You never liked that guy anyways.',
        img: 'media2/treasure2.jpg',
        options: [
            {
                text:'CONTINUE',
                nextText: 4 
            }
        ] 
    },
    {
        id:3,
        text: 'Turning right, you bumped into a guard of low rant. Confused at first, he notices the large bag you were carrying. Realizing you were a thief, he yells for back up. In a panick, you swung the bag upside the helmet of the guard, knocking him out cold.',
        img: 'media2/treasure3.jpg',
        options: [
            {
                text:'CONTINUE',
                nextText: 4
            }
        ]
    },
    {
        id:4,
        text: 'As you ran, you felt your heart pounding against your chest as you heard the sound of several footsteps that were not to far behind you. You ran across the great hall towards the direction of an area that split into different paths',
        img: 'media2/treasure4.jpg',
        options: [
            {
                text: 'Go Left',
                nextText: 5
            },
            {
                text: 'Go Right',
                nextText: 6
            }
        ]
    },
    {
        id:5,
        text:'Going left, you see a door made of a thick, dense wood. You quickly opened the door and entered. You then took the flight of stairs that leads you to a large under ground tunnel that leads out to the open sea. Inside the tunnel were many ships and boats of many sizes. With so many options, which one will you take?',
       img: 'media2/treasure5.jpg',
        options: [
            {
                text:'The tiny boat',
                nextText: 7
            },
            {
                text:'The small ship',
                nextText: 8
            }
        ]
    },
    {
        id:6,
        text:'Turning right, you see a dead end. However, you also see a cargo cart with five large barrels in it. They looked large enough to hold a person. Seeing no other option, you decide to hide in one of the empty barrels. You waited until to no longer hear the footsteps of the guards any more. After a few moments of silence, you thought about what your next move was.',
        img: 'media2/treasure6.jpg',
        options: [
            {
                text:'Play it safe and Keep Hiding',
                nextText: 9
            },
            {
                text:'Leave Your Hiding Spot and Take Your Chance',
                nextText: 10
            }
        ]
    },
    {
        id:7,
        text:'You decide to take the tiny boat. You placed the bag on the opposite side of you and rowed the boat out to sea. Two hours later, you were hit by a terrible storm. The seas were so rough that it caused the boat to flip over. You were no match for mother nature and you lost the treasure forever to the sea.',
        img:'media2/treasure7.jpg',
        options: [
            {
                text:'RESTART',
                nextText: -1
            }
        ]        
    },
    {
        id:8,
        text:'You decide to take the small ship and set out on the open sea. Everything was going fine until a band of pirates spotted you and attacked your ship. You remembered that you found a sword on the ship earlier. But, was the ship really worth defending at this point?',
        img:'media2/treasure8.jpg',
        options:[
            {
                text:'Abandon Ship',
                nextText: 11
            },
            {
                text:'Grab the sword and take your chances',
                nextText: 12
            }
        ]
    },
    {
        id:11,
        text:'Coming to the conclusion that the ship was not worth saving, you decide to jump into the sea. However, you did not take anything to keep you alfoat in those rough waters. You did not survive.',
        img:'media2/treasure9.jpg',
        options: [
            {
                text:'RESTART',
                nextText: -1
            }
        ]
    },
    {
        id:12,
        text:'Realizing that the ship was your only salvation at this point, you choose to fight for it. The battle was tough but you managed to fight off the pirates and take care of you injuries. Two days later, you arrived at the docks of a small town. Now, it was time for you next course of action.',
        img:'media2/treasure10.jpg',
        options: [
            {
                text:'Purchase a hose with some of the jewels',
                nextText: 13
            },
            {
                text:'Find a easy target and make take out of town',
                nextText: 14
            }
        ]
    },
    {
        id:9,
        text:'Feeling it was not safe yet, you choose to remain in the barrel a little longer. Suddenly, a maid approached the barrel with a basket. When she opens it, she finds you inside. Screaming at the top of her lungs, she alerts the guards and you are arrested. After reclaming his jewels, the king sentences you to life in prison.',
        img:'media2/treasure11.jpg',
        options: [
            {
                text:'RESTART',
                nextText: -1
            }
        ]
    },
    {
        id:10,
        text: 'Feeling that the time was right to leave, you quietly left the barrel and carefully make your way through the palace. Soon you see a guard outfit hanging on the wall next to an open that was about three stories high.',
        img:'media2/treasure12.jpg',
        options: [
            {
                text:'Disguise as a guard',
                nextText: 15
            },
            {
                text:'Jump out the window',
                nextText: 16
            }
        ]
    },
    {
        id:15,
        text: 'Grabing the outfit off the wall, you quickly get dressed and make your way to the front door. However, there were two guards at the door. Trying not too act suspicious, you demanded them to let you through. Unfortnuately for you, they easily saw through you disgusie and arrested you on the spot. The king sentenced you to prison and awarded the two guards.',
        img:'media2/treasure13.jpg',
        options: [
            {
                text:'RESTART',
                nextText: -1
            }
        ]
    },
    {
        id:16,
        text: 'Seeing some bushes underneath the window, you position yourself and jumped out the window. You landed in the bushes, but you had sprand your ankle in the proccess. You had to think quick. The guards were too far behind. What are you going to do next?',
        img:'media2/treasure14.jpg',
        options: [
            {
                text:'Go to your friend house',
                nextText: 17
            },
            {
                text:'DIY the wound yourself',
                nextText: 18
            }
        ]
    },
    {
        id:13,
        text: 'You paid the merchant the price he asked and takes the horse. You contined to purchase food, water, and other things. Your journey was going was going to be long, so you had to prepare for it. After getting you needed, you left the town with lots of treasure to spare.',
        img:'media2/treasure15.jpg',
        options: [
            {
            text:'YOU WIN!',
            nextText: -1
            }
        ]
    },
    {
       id:14,
       text: 'Spotting an old man you decided to attack him, and force him to take to your next destination. What you did not know was that the old man was once a skilled fighter in his prime, and he uses his skills to easily beats you up. You were arrest soon after and your treasure was taken away from you.',
       img:'media2/treasure11.jpg',
       options: [
           {
               text:'RESTART',
               nextText: -1
           }
       ] 
    },
    {
        id:17,
        text: 'Limping away from the palace, you decided to go to your friend house. He was actually known as a great doctor. When you arrived at his home, you tell him about your situation. He agrees to help you and hide you, but only if you give him half of the treasure.',
        img:'media2/treasure16.jpg',
        options: [
            {
                text:'Agree',
                nextText: 19,
            },
            {
                text:'Refuse',
                nextText: 20,
            }
        ]
    },
    {
        id:18,
        text: 'Even though your friend was a doctor, he was also a greedy man.  You decide to take care the injury yourself. Using some pieces of wood and cloth from you clothes, you did the best you could. Sadly, you wasted too much time and the guards caught you.',
        img:'media2/treasure11.jpg',
        options: [
            {
                text:'RESTART',
                nextText: -1,
            }
        ]
    },
    {
        id:19,
        text: 'Accepting his offer, you give him half of the jewels. For the next few weeks, the doctor keeps his word. He keeps you safe from capture and takes good care of your ankle. After it has healed up, he gives you one of his hoses. When night comes, you leave the city under the cover of darkness.',
        img:'media2/treasure15.jpg',
        options: [
            {
                text:'YOU WIN!',
                nextText: -1,
            }
        ]
    },
    {
        id:20,
        text:'Declining his offer, you lay on the sofa and tried to get some sleep. The doctor leaves the room in anger. About one hour later, a knock came at the door, and the doctor happily opens the door. It was the guards and they came to arrest you. The doctor has sold you out in exchange for money from the king. The guards drag you out the house and to your prison cell.',
        img:'media2/treasure11.jpg',
        options: [
            {
                text:'RESTART',
                nextText: -1,
            }
        ]
    }
]

//Used an example from https://github.com/WebDevSimplified/JavaScript-Text-Adventure
//Declaring reference to the value 
const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')
const display = document.getElementById('display')
const displayimg = document.getElementById('image')
let state = {}


function startGame() {
    state = {}
    showTextNode(1)
}

//Allows at the text in each textNodes in appear individually depending on what option is choosen.
function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNodes => textNodes.id === textNodeIndex)
    textElement.innerText = textNode.text
    console.log(textNode)
    displayimg.src = textNode.img //Makes each image within each textNodes appear 
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    //Giving function to the buttons once clicked on. Showing the option on the buttons. Displaying each text within the button.
    //Having each text appear for each buttons options within the textNodes. 
    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click',() => selectOption(option))
            optionButtonsElement.appendChild(button)
        }
    })
}

//Allows the option buttons to appear in the brower. Without it, the buttons will not show.
  function showOption (option) {
    return option.requireState == null || option.requiredState(state)
}

//Giving functions to go to the next textNode after the previous is clicked.
//Once it reaches its end it will restart at the beginning of the game.
function selectOption (option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
       return startGame()
    }

    //Object assigned to the options and set to function with the options to allow the next textNode to appear after the previous one. 
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}

startGame()

