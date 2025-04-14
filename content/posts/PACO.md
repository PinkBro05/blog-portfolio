+++
title = "PACO - Pink Ant Colony Optimization"
date = "2025-04-13"
author = "Pink"
cover = ""
tags = ["Optimization", "Shortest Path Problem", "Travelling Sale Man"]
keywords = ["ACO", "TSP", "Shortest path problem"]
description = "Discuss about PACO, shorest path problem and TSP problem"
showFullContent = false
readingTime = true
hideComments = false
math = true  # Enable math rendering for this post
+++

## Paper Information

**Title**: Pink Ant Colony Optimization - PACO for Shorest Path Problem
**Authors**: Pink 
**Published**: 2025 
**Link**: [https://github.com/PinkBro05/PACO-Optimization](https://github.com/PinkBro05/PACO-Optimization)  

## TL;DR

This blog introduces PACO, an ACO algorithm use wide range of comprehensive techniqus to improve the quality of solution and reduce time complexity and computational cost.

## Problem Statement

The Routing Finding Problem also known as Shortest Path Problem where the algorithm needs to determining the most optimal path between a starting location (origin) and one or more target locations (destinations) in a given environment, It's also have many of variable such as Traveling Sale Man (TSP) where the algorithm need to construct a tour which travel to all locations only once and comeback to the start location. In this project, we will primarily focus on Shorest Path Problem.

In mathematical terms, given a graph $G = (V, E)$ with vertices $V$ and edges $E$, and a cost function $L: E \rightarrow \mathbb{R}^+$, find a path $P = (v_1, v_2, \ldots, v_n)$ such that:

$$\sum_{i=1}^{n-1} L(v_i, v_{i+1})$$

is minimized, where $v_1$ is the origin and $v_n$ is the destination.

The environment is modeled as a 2D directed graph, where nodes represent locations and edges represent possible paths with associated traversal cost (the connection between nodes can be either 1 direction or bidirectional). The goal is to search for the lowest-cost path from the origin to one of the destination nodes.

There are many of algorithms which can use for this problem such as:
- Breadth-First Search (BFS) - exploring all neighboring nodes at the current depth before moving to the next level
- Depth-First Search (DFS) - exploring as far as possible along each branch before backtracking
- A* (A-Star) Search: combines the cost to reach the node and a **heuristic estimate** of the remaining cost to the goal
- Greedy Best-First Search (GBFS): **only** use the **heuristic estimate** to guide its search
- Dijkstra's Algorithm: Only use cost of path without need heuristics.

Now, you may question that what is **heuristic estimate** ? This is a function which help an algorithm estimate the quality of 

Ant Colony Optimization (ACO) : ACO is a meta-heuristic inspired by the ant's behavior. It uses probabilistic paths influenced by pheromone trails and heuristic information. ACO is well-suited for complex and dynamic problems but can be computationally expensive. 

<!-- ## Methodology

The approach is remarkably straightforward:

1. **Gradient Descent and AdaDelta Optimizer**: Implementing gradient descent for adaptively update pheromone.
2. **Elitist**: Global best ant get more reward (deposit extra pheromone)
3. **MaxMin**: The pheromone of a path is bounding in a certain range
4. **Local Search (2opt)**: Using local search every certain iteration to improve the quality of solution
5. **Floyd Warshall**: This algorithm is applied to refine the graph before applying ACO
6. **Parrallelize ant processing**: Using ThreadPoolExecutor to ultilize multiple threads of CPU -->

### ACO Formula and Implementation

The core of ACO is the pheromone update rule:

$$\tau_{xy} \leftarrow (1-\rho) \cdot \tau_{xy} + \sum_{k=1}^{m} \Delta\tau_{xy}^{k}$$

Where:
- $\tau_{xy}$ represents the pheromone level on edge $(x,y)$
- $\rho$ is the evaporation rate, typically in $[0,1)$
- $\Delta\tau_{xy}^{k}$ is the pheromone deposited by ant $k$

The transition probability for an ant to move from node $i$ to node $j$ is:

$$p_{ij}^k = 
\begin{cases} 
\frac{[\tau_{ij}]^\alpha \cdot [\eta_{ij}]^\beta}{\sum_{l \in N_i^k} [\tau_{il}]^\alpha \cdot [\eta_{il}]^\beta} & \text{if } j \in N_i^k \\
0 & \text{otherwise}
\end{cases}$$

Where:
- $N_i^k$ is the feasible neighborhood of node $i$ for ant $k$
- $\alpha$ and $\beta$ are parameters controlling the influence of pheromone versus heuristic information
- $\eta_{ij}$ is the heuristic information, typically $\eta_{ij} = \frac{1}{d_{ij}}$ where $d_{ij}$ is the distance

## My Analysis

The Vision Transformer represents a conceptual breakthrough in computer vision. By demonstrating that the same general architecture can excel at both language and vision tasks, ViT challenges the assumption that domain-specific inductive biases are necessary for top performance.

What's particularly interesting is the data efficiency trade-off: ViTs are computationally efficient but data-hungry compared to CNNs. This suggests that architectural inductive biases (like those in CNNs) can be viewed as a form of implicit regularization that becomes less necessary with sufficient data.

The attention maps visualization reveals that ViT learns to attend to relevant image regions without explicit locality bias, even developing CNN-like features in early layers while capturing longer-range dependencies in later layers.

One limitation is the model's poor performance on smaller datasets, though subsequent research has addressed this with data augmentation and regularization techniques.

## Implications for the Field

The success of ViT has had profound implications:

1. Sparked a wave of transformer-based models in computer vision, many of which now outperform CNNs across various tasks
2. Accelerated the trend toward unified architectures across modalities (text, images, audio)
3. Shifted focus from architecture engineering to scaling and transfer learning
4. Influenced the development of foundation models with cross-modal capabilities

The paper also raised important questions about the necessity of domain-specific inductive biases versus the power of large-scale learning from data. This debate continues to shape research in machine learning architecture design.

## Acknowledgement
- COS30018 – Intelligence Systems – Swinburne: Module 8 – Collective Intelligence/Swarm Intelligence: Understanding theory of ACO algorithm, how ant indirect communication work ("Stigmergy"), how ant identify which path is optimize using concept of "pheromone" and "evaporate". Understanding concept of Transition Probability Policy, Basic pheromone update formular. This lecture helps me understand what actually happens behind the ACO algorithm, knowing what hyper-parameter should consider and how they control performance.

- ACO blog and base code – Hasnain Roopawalla: 
https://medium.com/@hasnain.roopawalla/ant-colony-optimization-1bbc346c2da5
https://github.com/hasnainroopawalla/ant-colony-optimization/tree/master?tab=readme-ov-file
Provide snippet code which can be used to solve problem with 1 origin and 1 destination. And also using external library for data structure. The author also used wrong formular, instead of updated pheromone with corrected formular:  $\tau_{xy} \leftarrow (1-\rho) \cdot \tau_{xy} + \sum_{k=1}^{m} \Delta\tau_{xy}^{k}$, he used $\tau_{xy} \leftarrow \sum_{k=1}^{m} \Delta\tau_{xy}^{k} + n(1-\rho)\tau_{xy}$ where $n$ is the number of time path being used in that iteration.

- ACO blog: 
http://www.theprojectspot.com/tutorial-post/ant-colony-optimization-
for-hackers/10
Idea for Elitist and MMSA (Min Max System Ant)

-ADACO [1]:
Providing knowledge of Gradient descent to ACO, ACO alignment with Reinforcement Learning (Policy learning – Q Learning).

## References

- Zhou, Y., Li, W., Wang, X., Qiu, Y., & Shen, W. (2022). Adaptive gradient descent enabled ant colony optimization for routing problems. Swarm and Evolutionary Computation, 70, 101046. https://doi.org/10.1016/j.swevo.2022.101046
- Kumar, H. S., Singh, A., & Ojha, M. K. (2024). Artificial Intelligence Based Navigation in Quasi Structured Environment. ArXiv.org. https://arxiv.org/abs/2407.17508
- M. Dorigo, V. Maniezzo, A. Colorni, et al., Ant system: optimization by a colony of cooperating agents, IEEE Transactions on Systems, man, and cybernetics, Part B: Cybernetics 26 (1) (1996)
- M. Dorigo, L. M. Gambardella, Ant colony system: a cooperative learning approach to the traveling salesman problem, IEEE Transactions on Evolutionary Computation 1 (1) (1997)
- Hasnain Roopawalla. (2024, April 22). Ant Colony Optimization - Hasnain Roopawalla - Medium. Medium. https://medium.com/@hasnain.roopawalla/ant-colony-optimization-1bbc346c2da5
- T. Stützle, H. H. Hoos, Max-min ant system, Future Generation Computer Systems 16 (8) (2000).
- Lipowski, A., & Lipowska, D. (2012). Roulette-wheel selection via stochastic acceptance. Physica A: Statistical Mechanics and Its Applications, 391(6), 2193–2196. https://doi.org/10.1016/j.physa.2011.12.004
- D. J. Watts and S. H. Strogatz, Nature 393, 440-442 (1998)
- Kumar, H. S., Singh, A., & Ojha, M. K. (2024). Artificial Intelligence Based Navigation in Quasi Structured Environment. ArXiv.org. https://arxiv.org/abs/2407.17508
