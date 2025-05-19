import random

class Gene:
    def __init__(self, value=None):
        self.value = value if value in [0, 1] else random.randint(0, 1)

    def mutate(self):
        self.value = 1 - self.value

    def __str__(self):
        return str(self.value)


class Chromosome:
    def __init__(self):
        self.genes = [Gene() for _ in range(10)]

    def mutate(self):
        for gene in self.genes:
            if random.random() < 0.5:
                gene.mutate()

    def is_all_ones(self):
        return all(g.value == 1 for g in self.genes)

    def __str__(self):
        return ''.join(str(g) for g in self.genes)


class DNA:
    def __init__(self):
        self.chromosomes = [Chromosome() for _ in range(10)]

    def mutate(self):
        for chromosome in self.chromosomes:
            if random.random() < 0.5:
                chromosome.mutate()

    def is_all_ones(self):
        return all(chromo.is_all_ones() for chromo in self.chromosomes)

    def __str__(self):
        return '\n'.join(str(c) for c in self.chromosomes)


class Organism:
    def __init__(self, dna, environment=0.9):
        self.dna = dna
        self.environment = environment

    def mutate(self):
        if random.random() < self.environment:
            self.dna.mutate()


def run_simulation():
    dna = DNA()
    organism = Organism(dna=dna, environment=0.9)
    generations = 0
    MAX_GENERATIONS = 10000

    print("🔬 Starting simulation...\n")

    while not organism.dna.is_all_ones() and generations < MAX_GENERATIONS:
        organism.mutate()
        generations += 1
        if generations % 100 == 0:
            print(f"Generation {generations}")

    print("\n🧬 Final DNA:")
    print(organism.dna)

    if organism.dna.is_all_ones():
        print(f"\n✅ Fully evolved in {generations} generations!")
    else:
        print(f"\n❌ Stopped after {MAX_GENERATIONS} generations. DNA not fully evolved.")


if __name__ == "__main__":
    run_simulation()
