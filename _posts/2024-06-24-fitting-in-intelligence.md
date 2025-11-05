---
layout: post
title: Fitting in Intelligence
date: 2024-06-24
tags: [AGI, Machine Learning, Intelligence, Philosophy]
excerpt: A framing of intelligence as next-token prediction, and how this perspective guides the path to AGI.
---

Assuming that humans have AGI.

They can observe the world, and build a world representation (fitted function between their observations and predictions over time). Then they can use this world representation as a grounding factual source.

In addition to observing the world, they also plan and design actions. I believe that a lot of their planning is random, especially as it gets higher level. By definition, they use this world model to make plans for lower-level actions, of which they have seen a lot of observations before. But for things of higher order of complexity for which they have no samples in their training data, they just make it up. That's what religions, philosophies, and speculations are.

We are nothing but glorified next token predictors. When we don't have enough samples in our training set for what to predict for next token (meaning of life?), we just hallucinate (religions, philosophies).

We tend to make up stuff that are complex, yet still making stuff up.

There's a fabric of reality which we experience. The only way to know more about it, is to use the scientific method. Hypothesize, test the hypothesis, collect observations, and move on.

This is an incredibly powerful framing of our intelligence.

According to that framing, the way to get to an AGI is to build the best next token predictor.  
For that, you need the best loss and the best architecture (CE, Transformer)? Is there a better loss or a better architecture?  
I believe there will be a better architecture for sure!! (better suited for a specific cuda/Hardware)

Once this is built, project the space of knowledge, and identify the gap areas.  
How to project the space knowledge?  
Once gap areas are identified, design experiments to collect more samples for these data and fix the model.  
Keep re-iterating until the space knowledge is fully explored!!

Given that this is the goal,

Assuming the following inputs: images && text vs. Video && Audio  
Assuming the following loss: Next token prediction (CE) loss  
Assuming the following hardware: cuda && 4xH100

1. Find the best architecture to learn the inputs on the given hardware for images && text– Must generalize to videos && audio
2. Build an auto-scraper and train the model constantly– Scraper direction can be optimized by the learning direction?
3. Project the knowledge space. Which areas does it know about, which areas it lacks. Collect more data for which it lacks.
4. If can't find data in the space(scraper), design an experiment to test a hypothesis. Either hypothesis is true or false until it fills the knowledge space.  
Is knowledge space infinite? (Only one way to know)

