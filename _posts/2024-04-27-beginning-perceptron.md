---
layout: post
title: In the beginning, there was the Perceptron
date: 2024-04-27
tags: [Neural Networks, Machine Learning, History]
excerpt: The humble Perceptron introduced the concept of activation functions and demonstrated how simplicity can compound into powerful non-linear solutions.
---

In the beginning, there was the Perceptron, and it was good. Well, sort of.

It was the first neural network model, introduced in the 1950s, and it was a bit of a simpleton. I mean, it could only learn linearly separable patterns. Think of it like a neural network that could only solve problems that are straightforward.

The Perceptron's simplicity was also its strength. It introduced the concept of the activation function, like the sigmoid 

$$ \left( \frac{1}{1 + e^{-x}} \right) $$

, which allowed it to make predictions and classify data. And, let's not forget the weights and biases, which made it all work like magic!

## What?

A single layer neural network that takes in inputs, applies weights and biases, and then passes the output through an activation function. The output is then compared to the target output, and the error is calculated. 

$$f(x) = \text{activation}\left(\sum_{i=1}^{n} w_i x_i + b\right)$$

The primary function of the perceptron is classification by finding a linear separator in the feature space—the perceptron learning algorithm iteratively adjusts the weights and bias based on classification errors, striving to minimize these errors.

## Legacy

It's limited. It can only solve problems that are separable with a single line (e.g., XOR problem). But, its beauty lies in its ability to compound linearity to solve non-linearity. 

Multi-Layer Perceptron (MLP) is merely the compounding of many perceptron units together and applying a non-linear activation. Et voila, now you can solve non-linearly separable problems as well.

**So, next time you're building a Large Neural Network, remember the humble Perceptron, and the power of simplicity!**

