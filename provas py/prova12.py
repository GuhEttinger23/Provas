class Veiculo:
    def movimentar(self):
        print("Veículo está em movimento.")

# Subclasse (Filha) que herda de Veiculo
class Carro(Veiculo):
    def movimentar(self):
        print("Carro está dirigindo.")

# Subclasse (Filha) que herda de Veiculo
class Moto(Veiculo):
    def movimentar(self):
        print("Moto está acelerando.")

# --- Testando o código ---


meu_veiculo = Veiculo()
meu_carro = Carro()
minha_moto = Moto()

meu_veiculo.movimentar()  
meu_carro.movimentar()    
minha_moto.movimentar()   