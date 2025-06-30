import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-purple-800/30 bg-black/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Icon name="Gamepad2" size={20} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white">VanillaRP</h1>
            </div>
            <div className="flex space-x-1">
              <Button
                variant={activeTab === "home" ? "default" : "ghost"}
                onClick={() => setActiveTab("home")}
                className="text-white hover:bg-purple-800/30"
              >
                <Icon name="Home" size={16} className="mr-2" />
                Главная
              </Button>
              <Button
                variant={activeTab === "donate" ? "default" : "ghost"}
                onClick={() => setActiveTab("donate")}
                className="text-white hover:bg-purple-800/30"
              >
                <Icon name="CreditCard" size={16} className="mr-2" />
                Донат
              </Button>
              <Button
                variant={activeTab === "rules" ? "default" : "ghost"}
                onClick={() => setActiveTab("rules")}
                className="text-white hover:bg-purple-800/30"
              >
                <Icon name="ScrollText" size={16} className="mr-2" />
                Правила
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        {activeTab === "home" && (
          <div className="space-y-8">
            {/* Hero Section */}
            <div className="text-center space-y-6">
              <h1 className="text-5xl font-bold text-white mb-4">
                Ванильное{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Полу-РП
                </span>{" "}
                Выживание
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Испытай настоящее выживание, где каждая смерть имеет значение.
                Потеряй сердце — потеряй часть себя.
              </p>
              <div className="flex justify-center space-x-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  <Icon name="Play" size={20} className="mr-2" />
                  Играть сейчас
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-500 text-purple-300 hover:bg-purple-800/30"
                >
                  <Icon name="Users" size={20} className="mr-2" />
                  Сообщество
                </Button>
              </div>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6 mt-16">
              <Card className="bg-black/40 border-purple-800/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Icon
                      name="Heart"
                      size={24}
                      className="mr-3 text-red-500"
                    />
                    Система Сердец
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Каждая смерть отнимает сердце. Будь осторожен — твоя жизнь
                    драгоценна.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-purple-800/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Icon
                      name="Users"
                      size={24}
                      className="mr-3 text-blue-500"
                    />
                    Полу-РП
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Создай свою историю в мире, где каждое действие имеет
                    последствия.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-purple-800/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Icon
                      name="Pickaxe"
                      size={24}
                      className="mr-3 text-yellow-500"
                    />
                    Ванильный Опыт
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Чистый Minecraft без лишних модификаций, только суровое
                    выживание.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === "donate" && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-4">
                Поддержать Сервер
              </h2>
              <p className="text-gray-300 text-lg">
                Помоги нам развивать лучший ванильный сервер
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="bg-black/40 border-purple-800/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">
                    Проходка на Сервер
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Получи доступ к серверу и начни своё приключение
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-3xl font-bold text-purple-400">299₽</div>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-center">
                      <Icon
                        name="Check"
                        size={16}
                        className="mr-2 text-green-500"
                      />
                      Пожизненный доступ
                    </li>
                    <li className="flex items-center">
                      <Icon
                        name="Check"
                        size={16}
                        className="mr-2 text-green-500"
                      />
                      Стартовый набор
                    </li>
                    <li className="flex items-center">
                      <Icon
                        name="Check"
                        size={16}
                        className="mr-2 text-green-500"
                      />
                      Доступ к Discord
                    </li>
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    Купить Проходку
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-purple-800/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">
                    Дополнительные Сердца
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Восстанови утраченные сердца или получи дополнительные
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-red-900/20 rounded-lg border border-red-800/30">
                      <div className="flex items-center">
                        <Icon
                          name="Heart"
                          size={20}
                          className="mr-2 text-red-500"
                        />
                        <span className="text-white">1 Сердце</span>
                      </div>
                      <span className="text-red-400 font-bold">99₽</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-red-900/20 rounded-lg border border-red-800/30">
                      <div className="flex items-center">
                        <Icon
                          name="Heart"
                          size={20}
                          className="mr-2 text-red-500"
                        />
                        <span className="text-white">5 Сердец</span>
                      </div>
                      <span className="text-red-400 font-bold">399₽</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-red-900/20 rounded-lg border border-red-800/30">
                      <div className="flex items-center">
                        <Icon
                          name="Heart"
                          size={20}
                          className="mr-2 text-red-500"
                        />
                        <span className="text-white">10 Сердец</span>
                      </div>
                      <span className="text-red-400 font-bold">699₽</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700">
                    <Icon name="Heart" size={16} className="mr-2" />
                    Выбрать Пакет
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === "rules" && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-4">
                Правила Сервера
              </h2>
              <p className="text-gray-300 text-lg">
                Соблюдай правила для комфортной игры всех
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              <Card className="bg-black/40 border-purple-800/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Icon
                      name="Shield"
                      size={24}
                      className="mr-3 text-blue-500"
                    />
                    Основные Правила
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 space-y-3">
                  <div className="flex items-start">
                    <span className="text-purple-400 font-bold mr-3">1.</span>
                    <span>Запрещён гриф и воровство без РП причины</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-400 font-bold mr-3">2.</span>
                    <span>Уважай других игроков и администрацию</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-400 font-bold mr-3">3.</span>
                    <span>Запрещены читы, дюпы и баги</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-400 font-bold mr-3">4.</span>
                    <span>Мат разрешён, но в пределах разумного</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-400 font-bold mr-3">5.</span>
                    <span>Реклама сторонних проектов запрещена</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-purple-800/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Icon
                      name="Users"
                      size={24}
                      className="mr-3 text-green-500"
                    />
                    РП Правила
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 space-y-3">
                  <div className="flex items-start">
                    <span className="text-green-400 font-bold mr-3">•</span>
                    <span>Создай биографию своего персонажа</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-400 font-bold mr-3">•</span>
                    <span>Играй согласно характеру персонажа</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-400 font-bold mr-3">•</span>
                    <span>Конфликты решай через РП, а не в ООС</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-400 font-bold mr-3">•</span>
                    <span>Разрешено убийство с веской РП причиной</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-purple-800/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Icon
                      name="AlertTriangle"
                      size={24}
                      className="mr-3 text-red-500"
                    />
                    Наказания
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 space-y-3">
                  <div className="flex items-start">
                    <span className="text-red-400 font-bold mr-3">⚠️</span>
                    <span>Предупреждение → Мут → Кик → Бан</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-400 font-bold mr-3">⚠️</span>
                    <span>За серьёзные нарушения — сразу бан</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-400 font-bold mr-3">⚠️</span>
                    <span>Обжалование банов в Discord</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
