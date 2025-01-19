import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import { Table, TableBody, TableHead, TableHeader, TableRow, TableCell } from "./components/ui/table";
import { Car, HomeIcon, LogOutIcon, PlusCircle, Search, Settings } from "lucide-react";

import Logo from "./assets/Logo.png"

export function App() {
  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <aside className="w-72 bg-gray-100 border-r p-10">
        {/* <h1 className="font-bold text-xl mb-6">Estoque DSJ</h1>
        <ul className="space-y-4 text-gray-700">
          <li className="hover:text-blue-600 cursor-pointer">Dashboard</li>
          <li className="hover:text-blue-600 cursor-pointer">Estoque</li>
          <li className="hover:text-blue-600 cursor-pointer">Configurações</li>
          <li className="text-red-600 hover:text-red-800 cursor-pointer">Logout</li>
        </ul> */}

        <div className="flex gap-3">
          <img src={Logo} alt="logo" className="w-8 h-8 rounded-full" />
          <h1 className="font-bold text-xl mb-9">ESTOQUE DSJ</h1>
        </div>

        <nav className="flex flex-col gap-9 text-gray-700 font-bold">
          <a
            href="#"
            className="flex items-center gap-3 hover:text-blue-600 cursor-pointer"
          >
            <HomeIcon className="w-5 h-5" />
            Dashboard
          </a>

          <a
            href="#"
            className="flex items-center gap-3 hover:text-blue-600 cursor-pointer"
          >
            <Car className="w-5 h-5" />
            Estoque
          </a>

          <a
            href="#"
            className="flex items-center gap-3 hover:text-blue-600 cursor-pointer"
          >
            <Settings className="w-5 h-5" />
            Configurações
          </a>

          <a
            href="#"
            className="flex items-center gap-3 text-red-600 hover:text-red-800 cursor-pointer"
          >
            <LogOutIcon className="w-5 h-5" />
            Logout
          </a>
        </nav>
      </aside>

      {/* Conteúdo principal */}
      <main className="flex-1 p-7">
        
        {/* Barra de busca e botões */}
        <div className="flex justify-between items-center mb-6">
          <Input name="nome" placeholder="Localizar produtos" className="w-3/4" />
          <div className="flex gap-4">
            <Button className="flex items-center gap-1 bg-blue-700 hover:bg-green-600 text-white px-4 py-2 rounded">
              <PlusCircle className="w-5 h-5" />
              Novo Produto
            </Button>
            <Button className="flex items-center gap-1 bg-white hover:bg-blue-600 text-gray-950 px-4 py-2 rounded">
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
                <TableHead>Produto</TableHead>
                <TableHead>Preço</TableHead>
                <TableHead>Quantidade</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Data de validade</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 10 }).map((_, i) => {
                return (
                  <TableRow key={i} className="hover:bg-gray-100">
                    <TableCell>Produto {i}</TableCell>
                    <TableCell>R$ {(Math.random() * 100).toFixed(2)}</TableCell>
                    <TableCell>{Math.floor(Math.random() * 50)}</TableCell>
                    <TableCell>Tipo {i % 3}</TableCell>
                    <TableCell>2025-01-20</TableCell>
                    <TableCell>
                      {i % 2 === 0 ? (
                        <span className="text-green-600">Ativo</span>
                      ) : (
                        <span className="text-red-600">Inativo</span>
                      )}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </main>
    </div>
  );
}
