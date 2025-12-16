import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Globe, ShieldCheck, Rocket } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">

      {/* HERO SECTION */}
      <section className="px-6 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Online Income Skills Blueprint
        </motion.h1>

        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Learn practical online income skills used worldwide. 
          Pay once, get instant access, and start building digital income.
        </p>

        <Button className="rounded-2xl px-8 py-6 text-lg shadow-lg">
          Buy Now – $40
        </Button>
      </section>

      {/* SERVICES */}
      <section className="px-6 py-16 grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {[
          {
            icon: <Globe className="w-8 h-8" />,
            title: "Global Skills",
            desc: "Learn online income skills that work anywhere in the world."
          },
      {
