class ContaBancaria:
    def __init__(self, titular, saldo_inicial=0):
        # Atributos protegidos (Encapsulamento)
        self._titular = titular
        self._saldo = saldo_inicial

    def depositar(self, valor):
        if valor > 0:
            self._saldo += valor
            print(f"Depósito de R${valor:.2f} realizado com sucesso!")
        else:
            print("O valor do depósito deve ser positivo.")

    def sacar(self, valor):
        if 0 < valor <= self._saldo:
            self._saldo -= valor
            print(f"Saque de R${valor:.2f} realizado com sucesso!")
        else:
            print("Saque negado: Saldo insuficiente ou valor inválido.")

    def exibir_saldo(self):
        print(f"Titular: {self._titular} | Saldo Atual: R${self._saldo:.2f}")

# --- Testando a funcionalidade ---

minha_conta = ContaBancaria("João Silva", 1000)

minha_conta.exibir_saldo()   # Saldo: R$1000.00
minha_conta.depositar(500)   # Saldo: R$1500.00
minha_conta.sacar(200)       # Saldo: R$1300.00
minha_conta.sacar(2000)      # Mensagem de saldo insuficiente
minha_conta.exibir_saldo()   # Saldo Final: R$1300.00