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

## Abstract

This blog introduces PACO, an ACO algorithm use wide range of comprehensive techniqus to improve the quality of solution and reduce time complexity and computational cost.

## Problem Statement

The Routing Finding Problem also known as Shortest Path Problem where the algorithm needs to determining the most optimal path between a starting location (origin) and one or more target locations (destinations) in a given environment, It's also have many of variable such as Traveling Sale Man (TSP) where the algorithm need to construct a tour which travel to all locations only once and comeback to the start location. In this project, we will primarily focus on Shorest Path Problem.

In mathematical terms, given a graph $G = (V, E)$ with vertices $V$ and edges $E$, and a cost function $L:$, find a path $P = (v_1, v_2, \ldots, v_n)$ such that:

$$\sum_{i=1}^{n-1} L(v_i, v_{i+1})$$

is minimized, where $v_1$ is the origin and $v_n$ is the destination.

The environment is modeled as a 2D directed graph, where nodes represent locations and edges represent possible paths with associated traversal cost (the connection between nodes can be either 1 direction or bidirectional). The goal is to search for the lowest-cost path from the origin to one of the destination nodes.

There are many of **heuristic** algorithms which can use for this problem such as 

Now, you may question that what is **heuristic** ?  In the simple word, its "prior environment knowledge" which help algorithm to find the best (approximately) next node making the path shortest. There are many heuristic *function* can be defined but the most easiest is "cost" or "distance" of the path between node - let say we stand at node A which can move to node B (5 meter), C (10 meter) then we simply choose B. Of course, designing a robust algorithm is not that easy, this function usually encodes our **extra** knowledge of the problem. A higher level of heuristic is meta-heuristic wherein the algorithm design smaller heristic function to find a sufficiently good solution. 

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
\frac{[\tau_{ij}]^\alpha \cdot [\eta_{ij}]^\beta}{\sum_{l \in N_i^k} [\tau_{il}]^\alpha \cdot [\eta_{il}]^\beta} & \text{if } j \in N_i^k \\\
0 & \text{otherwise}
\end{cases}$$

Where:
- $N_i^k$ is the feasible neighborhood of node $i$ for ant $k$
- $\alpha$ and $\beta$ are parameters controlling the influence of pheromone versus heuristic information
- $\eta_{ij}$ is the heuristic information, typically $\eta_{ij} = \frac{1}{d_{ij}}$ where $d_{ij}$ is the distance (This make ACO a meta-heuristic)

In summary, the core of this algorithm is how ant indirectly communicate and tell others ant "Hey this path seem potential, try this" by laying **trail of pheromone** when they use that path, the *pheromone* then can be used to direct others ant. This act of laying pheromone is done **iteratively** by multiple ants. Important here is the **amount of pheromone** is *evaporate* (decay) over time, so that only the the path which have enough amount of ant used have pheromone $\rightarrow$ find the optimal path. 

## Related work

While it has proven effictive for solving optimization problems, the orignal ACO suffers from several key limitations that reduce its robustness and scalability:

1. Premature Convergence: the traiditonal pheromonoe update mechanism allows even poor-quality solutions to influence future search directions leading to an imbalance between exploration and exploitation which is a common issue of optimization algorithm, often causing the ant to focus on a local optimal prematurely. 
2. Hyper-parameter Sensitivity: performance of algorithm heavily depends on hyper-params such as pheromone evaporation rate ($\rho$), the influence factors ($\alpha$ and $\beta$), etc. These requre tunning either using systematic method such as grid search, bayes optimization or manually method for specific problem to achieve high-quality solution $\rightarrow$ making it non-robus and less adaptive
3. Slow convergence on complex problem: in large-scale or irregular topologies, because at the very first iterations, the algorithm random find solution $\rightarrow$ might end up with no solution.

$\Rightarrow$ In Machine Learning word, we can say that this algorithm has fixed learning rate, no memory of past (momentum) and no gradient normalization making the peronomone become overgrowth over time.

To deal with these issues, many advanced techniques were introduced in this algorithm: **Elitist, Maxmin, Gradient descent, Adaelta optimizer and pseudo-random-proportional policy**. 

In traditional ACO, all ant deposit to path even if it doesn't successfully construct a solution, but as mentioned, this approach is not optimized since this leading to permature convergence make the algorithm stuck in local optimal. By applying **Elitist**, For the first 75% iteration, the *iteration best solution* is allowed to deposit and if it is also *global best solution*, it can deposit **extra** pheromone. For the rest iteration, **only global best** is allowed to deposit. This encourages the ant to refine its search around the potential solution more at the end of search while maintain certain exploration. The *Pheromone update policy* now add a small update:
$$\tau_{xy} \leftarrow (1-\rho) \cdot \tau_{xy} + \sum_{k=1}^{m} \Delta\tau_{xy}^{k} + e\Delta\tau_{xy}^{k*} $$ where $k*$ is global best solution.

Further, to better enhance the exploration and exploitation trade-off, *MaxMin* system is implemented. The idea is every path's pheromone is bounded between a certain range (Max and Min) so that neither a path dominate or a path vanish. Now after update the new pheromone by the above policy, we filter it again with:
$$\tau_{xy} \leftarrow maxmin(\tau_{xy})$$ 
where 
$$
maxmin(\tau_{xy}) = 
\begin{cases}
\max\tau_{xy} & \text{if } x > \max\tau_{xy} \\\
x & \text{if}\ \min\tau_{xy} \leq x \leq \max\tau_{xy}\\\
\min\tau_{xy} & \text{if} x < \min\tau_{xy}
\end{cases}
$$

$\max\tau_{xy} = \frac{Q}{L(k*)}$ and $\min\tau_{xy} = \max\tau_{xxy} \cdot scaling factor$

When looking closer to ACO, we will notice that there are many similar features to Reinforcement Learning, more specify, *Q-Learning* where ant is an agent which do the action choosing the next node based on the **Transition Probability Policy (TPP)**. but here instead of directly learning the TPP, we want to learn Pheromone Update Policy which actually the key of this algorithm.

$$
\begin{array}{cc}
\bold{Reinforcement Learning} & \bold{ACO} \\\ \hline
\text{Agent} & \text{Ant} \\\
\text{Environment} & \text{Graph} \\\
\text{State} & \text{Path (or partial path)} \\\
\text{Action} & \text{Choosing next node} \\\
\text{Policy} & \text{TPP} \\\
\text{Reward} & \text{{Pheromone deposit}} \\\
\end{array}
$$

After mapping the components, the ACO now actually "learning" over iteration to update the policy based on the reward function, [[Mathematically]](#apendix).

Additionally, the Transition Probability Policy currently use *roulette-wheel selection*[[7]](#references) but instead of biased exploration using this technique, we want each ant can better balance exploration-exploitation trade-off when picking next node. *pseudo-random-proportional* [[4]](#apendix) with a little modification is implemented. The next city now will be chosen using this formular:
$$
s_{t+1} = 
\begin{cases}
\displaystyle\argmax_{u\in N(s_t)}{(\tau_t^\alpha)\cdot(\eta_t^\beta)} & \text{if } q \le q_0 \text{~(exploitation)} \\\
\text{Normal TPP} & \text{ Otherwise (exploration)}
\end{cases}
$$

This idea that everytime an ant chooses the next ndoe, the $q$ value will be random from range $\lbrack 0, 1\rbrack$ and if it smaller than the threshold $q_0$ then the ant exploitation otherwise. This will make the choice of each ant more robust increasing the quality of the solution.

Enhance, to deal with complex graph, the **Floyd-Warshall** [[9]](#references) to refine the graph *before* applying ACO, it will calculate the shortest path for **all pairs** of nodes which help the ACO avoid the dead-end or local minima trap and find better solutions since the ACO is very *sensitive* with initial state. Another algorithm is implemented to improve searching of ACO is *local search - 2opt*, the idea that every certain iterations, this sub algorithm will try to make a small change by swapping two edges of the iteration best then keep it if the refine is better than originally. This will help the alrotihm exploration happen independently of the pheromone trails allowing the algorithm to discover promising regions that might not have been heavily reinforced by pheromone yet. 

But by adding these improvements, our ACO may now using too much computational resource, because of that, **Parallelize ant processing** is implemented. Instead of deploying the ant one by one, *ThreadPoolExecutor* ultilize the parallel charisteristic by process ant scaling with thread's number of CPU. Resulting that our algorithm reduces **26,67%** of execution time. 

## Testing Result
$$
\begin{array}{ccc}
\bold{Algorithm} & \bold{Index} & \bold{Eil51} \\\ \hline
\text{ACS} & \text{Min} & \text{426} \\\
\text{ } & \text{Max} & \text{445} \\\
\text{ } & \text{Average} & \text{431.28} \\\ \hline
\text{ADACO} & \text{Min} & \text{426} \\\
\text{ } & \text{Max} & \text{433} \\\
\text{ } & \text{Average} & \text{428.76 (-0.58\\%)} \\\ \hline
\text{PACO} & \text{Min} & \text{426} \\\
\text{ } & \text{Max} & \text{438} \\\
\text{ } & \text{Average} & \text{429.04 (-0.52\\%)} \\\ \hline
\end{array}
$$
Note: The first 2 result were collected from [[1]](#references)

## Conclusion
The original ACO was enhanced by many advanced techniques to deal with majority of weakness
and result increase in several test cases. This application can be used for many real-world problem such as Vehicle-Routing Problem (VRP), Traveling Saleman Problem improving the quality of delivering, map service,... 

## Acknowledgement
- COS30018 – Intelligence Systems – Swinburne: Module 8 – Collective Intelligence/Swarm Intelligence: Understanding theory of ACO algorithm, how ant indirect communication work ("Stigmergy"), how ant identify which path is optimize using concept of "pheromone" and "evaporate". Understanding concept of Transition Probability Policy, Basic pheromone update formular. This lecture helps me understand what actually happens behind the ACO algorithm, knowing what hyper-parameter should consider and how they control performance.

- ACO blog and base code – Hasnain Roopawalla: 
[Medium](https://medium.com/@hasnain.roopawalla/ant-colony-optimization-1bbc346c2da5)
[GitHub](https://github.com/hasnainroopawalla/ant-colony-optimization/tree/master?tab=readme-ov-file)
Provide snippet code which can be used to solve problem with 1 origin and 1 destination. And also using external library for data structure. The author also used wrong formular, instead of updated pheromone with corrected formular:  $\tau_{xy} \leftarrow (1-\rho) \cdot \tau_{xy} + \sum_{k=1}^{m} \Delta\tau_{xy}^{k}$, he used $\tau_{xy} \leftarrow \sum_{k=1}^{m} \Delta\tau_{xy}^{k} + n(1-\rho)\tau_{xy}$ where $n$ is the number of time path being used in that iteration.

- ACO blog: 
[theprojectspot](https://www.theprojectspot.com/tutorial-post/ant-colony-optimization-for-hackers/10)
Idea for Elitist and MMSA (Min Max System Ant)

-ADACO [1](#references):
Providing knowledge of Gradient descent to ACO, ACO alignment with Reinforcement Learning (Policy learning – Q Learning).

## Apendix
1. **Ojbective Function**:
$$
A(\tau) = \frac{L(s)}{L(s*)}
$$

Where: \
$\tau$: *pheromone amount* of the path considering \
s: iteration best \
s*: global best

The maximum of this objective function is 1 since we always update the s*. This tells us the quality of current solution compared with global bet. If value equal 1 means the current solution is global bet and if it near 0 means the current solution is much worse than the global best. We want to maximize this function

2. **Loss function**:
$$
J(\tau) = E[1 - A(\tau)] + \frac{1}{2}~\cdot \parallel{\tau}\parallel ^2_2
$$

Where:\
First term: Expected error over all constructed solutions (since its stochastic)\
Second term: L2 (Ridge) regularization to prevent overgrowth pheromone

This can be written as:
$$
J(\tau) = 1 + \displaystyle\sum_{s\in S}{-\frac{L(s*)}{s} \cdot~ P(s\mid \tau)+ \frac{1}{2}~\cdot \parallel{\tau}\parallel ^2_2} 
$$

The second terms represent the expected error overall constructed solution (S). Since each ant chooses node and constructs solution independently, we can use multiple probabilities. The goal is to minimize this loss so that every new solution will have more *accuracy* toward the best solution **adaptively**.

3. **Gradient calculation**:
$$
\nabla J(\tau) = \frac{\mathrm{d}{J(\tau)}}{\mathrm{d}{\tau}} = - \displaystyle\sum_{s\in S}{\frac{1}{L(s)}~ \cdot \frac{\mathrm{d}{P(S\mid\tau)}}{\mathrm{d}{\tau}}~ + \tau}
$$

The first term can be expanded as:
$$
P(s\mid\tau)~ \cdot \displaystyle\sum_{k=1}^{N-1}{\frac{\mathrm{d}{(\ln\cdot P(s_{k+1}\mid \tau,~ s_k))}}{\mathrm{d}{\tau}}} = T(\tau) \\\
\Rightarrow \nabla J(\tau) = -E[\frac{T(\tau)}{L(s)}\mid\tau] + \tau
$$

Now we have new pheromone update policy:
$$
\tau_{xy} \leftarrow \tau_{xy} + \frac{\rho\cdot T(\tau)}{L(s)}
$$
But considering calcultaing **all posible** solution's expecttations cost too much computational resource, we make it simple by just using Q - the constant pheromone deposit weight instead and adjusting the $p$ and we have the final form of update policy:
$$
\tau_{xy} \leftarrow \tau_{xy} + \frac{Q}{\rho\cdot L(s)}
$$

And the gradient can be calculated by follow equation:
$$
g_t = \tau_{xy} - \tau_{xy}^{\'} = \tau_{xy} - \frac{Q}{\rho\cdot L(s)}
$$

4. **Applying Adadelta optimizer**:
$$
G_t = \gamma\cdot G_{t-1} + (1-\gamma)\cdot g_t^2 \\\
$$

$$
H_t = g_t\cdot \frac{\sqrt{\Delta{G_t} + \epsilon}}{\sqrt{G_t + \epsilon}} \\\
$$

$$
\tau_t = maxmin(\tau_t-1 - H_t) \\\
$$

$$
\Delta{G_t} = \gamma\cdot G_{t-1} + (1-\gamma)\cdot H_t^2
$$

Where: \
$G_t$: Exponentially decay average of squared gradient \
$\gamma, \epsilon$: decay factors \
$H_t$: corrected update through an approximation of Hessian of the pheromone matrix

## References

1.	Zhou, Y., Li, W., Wang, X., Qiu, Y., & Shen, W. (2022). Adaptive gradient descent enabled ant colony optimization for routing problems. Swarm and Evolutionary Computation, 70, 101046. https://doi.org/10.1016/j.swevo.2022.101046
2.	Kumar, H. S., Singh, A., & Ojha, M. K. (2024). Artificial Intelligence Based Navigation in Quasi Structured Environment. ArXiv.org. https://arxiv.org/abs/2407.17508
3.	M. Dorigo, V. Maniezzo, A. Colorni, et al., Ant system: optimization by a colony of cooperating agents, IEEE Transactions on Systems, man, and cybernetics, Part B: Cybernetics 26 (1) (1996)
4.	M. Dorigo, L. M. Gambardella, Ant colony system: a cooperative learning approach to the traveling salesman problem, IEEE Transactions on Evolutionary Computation 1 (1) (1997)
5.	Hasnain Roopawalla. (2024, April 22). Ant Colony Optimization - Hasnain Roopawalla - Medium. Medium. https://medium.com/@hasnain.roopawalla/ant-colony-optimization-1bbc346c2da5
6.	T. Stützle, H. H. Hoos, Max-min ant system, Future Generation Computer Systems 16 (8) (2000).
7.	Lipowski, A., & Lipowska, D. (2012). Roulette-wheel selection via stochastic acceptance. Physica A: Statistical Mechanics and Its Applications, 391(6), 2193–2196. https://doi.org/10.1016/j.physa.2011.12.004
8.	D. J. Watts and S. H. Strogatz, Nature 393, 440-442 (1998)
9.	Kumar, H. S., Singh, A., & Ojha, M. K. (2024). Artificial Intelligence Based Navigation in Quasi Structured Environment. ArXiv.org. https://arxiv.org/abs/2407.17508
