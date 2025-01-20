import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "./components/ui/dialog";
import { Table, TableBody, TableHead, TableHeader, TableRow, TableCell } from "./components/ui/table";
import { ChartColumnIncreasing, Handshake, HomeIcon, LogOutIcon, Package, PlusCircle, Search, Settings, ShoppingCart, User } from "lucide-react";

import Logo from "./assets/Logo.png"
import { useState } from "react";
import { Label } from "./components/ui/label";

export function App() {
  
  const [search, setSearch] = useState('');

  const products = [
    { id: 1, name: "Minha ex", price: 35000, quantity: 10, type: "Rapariga", validade: "2025-12-31", status: "Ativo" },
    { id: 2, name: "Duas do job", price: 2000, quantity: 2, type: "Job", validade: "2025-06-15", status: "Ativo" },
    { id: 3, name: "Arroz", price: 100, quantity: 25, type: "Alimentação", validade: "2026-01-01", status: "Ativo" },
    { id: 4, name: "Cadeira Gamer", price: 1200, quantity: 5, type: "Mobiliário", validade: "2027-05-10", status: "Ativo" },
    { id: 5, name: "Fejão", price: 100, quantity: 30, type: "Periférico", validade: "2025-03-20", status: "Inativo" },
    { id: 6, name: "Loló", price: 100, quantity: 30, type: "Periférico", validade: "2025-03-20", status: "Inativo" },
    { id: 7, name: "Maconha", price: 100, quantity: 30, type: "Periférico", validade: "2025-03-20", status: "Inativo" },
    { id: 8, name: "Cimento", price: 100, quantity: 30, type: "Construção", validade: "2025-03-20", status: "Inativo" },
    { id: 9, name: "Carne", price: 100, quantity: 30, type: "Periférico", validade: "2025-03-20", status: "Inativo" },
    { id: 10, name: "Carne", price: 100, quantity: 30, type: "Periférico", validade: "2025-03-20", status: "Inativo" },
  ];

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  const productFiltered = () => {
    return products.filter((product) => 
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  };

  return (
    <div className="h-screen flex">

      {/* Sidebar */}
      <aside className="w-72 bg-gray-100 border-r p-10 flex flex-col item-center">
        <div className="flex gap-3 justify-center">
          <img src={Logo} alt="logo" className="w-10 h-10 rounded-full" />
          <h1 className="font-bold text-xl mb-9 text-blue-600">ESTOQUE DSJ</h1>
        </div>

        <nav className="flex flex-col gap-9 text-gray-600 text-base mt-3">
          <a
            href="#"
            className="flex items-center gap-4 hover:text-blue-600 cursor-pointer font-semibold"
          >
            <HomeIcon className="w-5 h-5" />
            Dashboard
          </a>

          <a
            href="#"
            className="flex items-center gap-4 text-blue-600 hover:text-blue-500 cursor-pointer font-semibold"
          >
            <ShoppingCart className="w-5 h-5" />
            Estoque
          </a>

          <a
            href="#"
            className="flex items-center gap-4 hover:text-blue-600 cursor-pointer font-semibold"
          >
            <ChartColumnIncreasing className="w-5 h-5" />
            Relatórios
          </a>

          <a
            href="#"
            className="flex items-center gap-4 hover:text-blue-600 cursor-pointer font-semibold"
          >
            <Handshake className="w-5 h-5" />
            Fornecedores
          </a>

          <a
            href="#"
            className="flex items-center gap-4 hover:text-blue-600 cursor-pointer mb-40 font-semibold"
          >
            <Package className="w-5 h-5" />
            Pedidos
          </a>

          <a
            href="#"
            className="flex items-center gap-4 hover:text-blue-600 cursor-pointer font-semibold"
          >
            <Settings className="w-5 h-5" />
            Configurações
          </a>

          <a
            href="#"
            className="flex items-center gap-4 text-red-600 hover:text-red-800 cursor-pointer font-semibold"
          >
            <LogOutIcon className="w-5 h-5" />
            Logout
          </a>
        </nav>
      </aside>

      {/* Conteúdo principal */}
      <main className="flex-1 p-7">
        
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-3xl font-bold text-gray-800">Produtos</h1>
        <div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full">
          <User className="w-5 h-5 text-gray-600" />
        </div>
      </div>

        
        {/* Barra de busca e botões */}
        <div className="flex justify-between items-center mb-6">
          <Input name="nome" placeholder="Localizar produtos" value={search} onChange={handleSearch} className="w-3/4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <div className="flex gap-4">
            
            <Dialog>
              <DialogTrigger asChild>
                <Button className="flex items-center gap-1 bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded">
                  <PlusCircle className="w-5 h-5" />
                  Novo Produto
                </Button>
              </DialogTrigger>

              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Novo produto</DialogTitle>
                  <DialogDescription>Criar um novo produto no sistema</DialogDescription>
                </DialogHeader>

                <form action="" className="space-y-6">
                  <div className="grid grid-cols-4 items-center text-right gap-3">
                    <Label htmlFor="name">Produto</Label>
                    <Input className="col-span-3" id="name" /> 
                  </div>

                  <div className="grid grid-cols-4 items-center text-right gap-3">
                    <Label htmlFor="price">Preço</Label>
                    <Input className="col-span-3" id="price" /> 
                  </div>
                  
                  <div className="grid grid-cols-4 items-center text-right gap-3">
                    <Label htmlFor="quantity">Quantidade</Label>
                    <Input className="col-span-3" id="quantity" /> 
                  </div>

                  <div className="grid grid-cols-4 items-center text-right gap-3">
                    <Label htmlFor="type">Tipo</Label>
                    <Input className="col-span-3" id="type" /> 
                  </div>

                  <div className="grid grid-cols-4 items-center text-right gap-3">
                    <Label htmlFor="validity">Data de validade</Label>
                    <Input className="col-span-3" id="validity" type="date" /> 
                  </div>

                  <div className="grid grid-cols-4 items-center text-right gap-3">
                    <Label htmlFor="status">Status</Label>
                    <Input className="col-span-3" id="status"/> 
                  </div>

                  <DialogFooter>
                    <DialogClose>
                      <Button type="button" variant="destructive">Cancelar</Button>
                    </DialogClose>
                    <Button type="submit" className="bg-blue-700">Salvar</Button> 
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>

            <Button className="flex items-center gap-1 bg-white hover:bg-blue-300 text-gray-950 px-4 py-2 rounded">
              <Search className="w-5 h-5" />
              Filtrar
            </Button>
          </div>
        </div>

        {/* Tabela de produtos  */}
        <div className="border rounded-lg shadow overflow-x-auto">
          <Table className="min-w-full text-sm">
            <TableHeader>
              <TableRow className="bg-gray-200">
                <TableHead>Produto</TableHead >
                <TableHead>Preço</TableHead>
                <TableHead>Quantidade</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Data de validade</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {productFiltered().length > 0 ? (
                productFiltered().map((product) => (
                  <TableRow key={product.id} className="hover:bg-gray-100">
                    <TableCell>{product.name}</TableCell>
                    <TableCell>R$ {product.price.toFixed(2)}</TableCell>
                    <TableCell>{product.quantity}</TableCell>
                    <TableCell>{product.type}</TableCell>
                    <TableCell>{product.validade}</TableCell>
                    <TableCell>
                      <span
                        className={`${
                          product.status === "Ativo"
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {product.status}
                      </span>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan="6" className="text-center py-4">
                    Nenhum produto encontrado.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </main>
    </div>
  );
}
