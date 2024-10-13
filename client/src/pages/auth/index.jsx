import React, { useState } from "react";
import Background from "@/assets/login2.png";
import Victory from "@/assets/victory.svg";
import { Tabs, TabsList } from "@/components/ui/tabs";
import { TabsContent, TabsTrigger } from "@radix-ui/react-tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleLogin = async () => {};

  const handleSignup = async () => {};

  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center">
      <div className="h-[80vh] bg-white border-2 border-white text-opacity-90 shadow-2xl w-[80vw] md:w-[90vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl grid xl:grid-cols-2">
        <div className="flex flex-col gap-8 items-center justify-center">
          <div className="flex items-center justify-center flex-col">
            <div className="flex items-center justify-center  pl-20">
              <h1 className="text-5xl font-bold md:text-6xl "> Welcome </h1>
              <img src={Victory} alt="Victory Emoji " className="h-[100px]" />
            </div>
            <p className="font-medium text-center">
            Join the ultimate chat experience by filling in your details and start connecting like never before!            </p>
          </div>
          <div className="flex items-center justify-center w-full">
            <Tabs className="w-3/4">
              <TabsList className="bg-transparent flex justify-center w-full">
                <TabsTrigger
                  value="login"
                  className="bg-transparent text-opacity-90 border-b-2 rounded-none px-4 data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 py-3 transition-all duration-300"
                >
                  Login
                </TabsTrigger>

                <TabsTrigger
                  value="signup"
                  className="bg-transparent text-opacity-90 border-b-2 rounded-none px-4 data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 py-3 transition-all duration-300"
                >
                  Signup
                </TabsTrigger>
              </TabsList>

              <TabsContent className=" flex flex-col gap-5 mt-10" value="login">
                <input
                  placeholder="Email"
                  type="email"
                  className="rounded-full p-4 "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <input
                  placeholder="Password"
                  type="password"
                  className="rounded-full p-4 "
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button className="rounded-full p-6" onClick={handleLogin}>
                  Login
                </Button>
              </TabsContent>
              
              <TabsContent className=" flex flex-col gap-5 " value="signup">
                <input
                  placeholder="Email"
                  type="email"
                  className="rounded-full p-3 "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <input
                  placeholder="Password"
                  type="password"
                  className="rounded-full p-3 "
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  placeholder="Confirm password"
                  type="password"
                  className="rounded-full p-3 "
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />

                <Button className="rounded-full p-6" onClick={handleSignup}>
                  Signup
                </Button>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        <div className=" hidden xl:flex justify-center items-center">
            <img src={Background} alt="background login" className="h-[500px]" />
        </div>
      </div>
    </div>
  );
};

export default Auth;
