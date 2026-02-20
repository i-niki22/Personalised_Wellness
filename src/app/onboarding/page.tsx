"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Onboarding() {
    const [formData, setFormData] = useState({
        age: "",
        gender: "",
        height: "",
        weight: "",
        workType: "",
        goal: "",
        stressLevel: 3,
        sleepHours: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Data:", formData);
        alert("Generating your personalized plan... (Check console for data)");
    };

    return (
        <main className="min-h-screen flex items-center justify-center p-4 bg-background relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background -z-10" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full max-w-2xl bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl rounded-3xl p-8 md:p-12 relative z-10"
            >
                <Link href="/" className="inline-flex items-center text-stone-500 hover:text-primary mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home 
                </Link>

                <div className="text-center mb-10">
                    <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-3">About You</h2>
                    <p className="text-stone-500">Help us design your perfect yoga journey.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-stone-600 ml-1">Age</label>
                            <Input
                                name="age"
                                type="number"
                                placeholder="Years"
                                value={formData.age}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-stone-600 ml-1">Gender</label>
                            <Select name="gender" value={formData.gender} onChange={handleChange} required>
                                <option value="" disabled>Select Gender</option>
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                                {/* <option value="non-binary">Non-binary</option> */}
                                <option value="prefer-not-to-say">Prefer not to say</option>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-stone-600 ml-1">Height (cm)</label>
                            <Input
                                name="height"
                                type="number"
                                placeholder="cm"
                                value={formData.height}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-stone-600 ml-1">Weight (kg)</label>
                            <Input
                                name="weight"
                                type="number"
                                placeholder="kg"
                                value={formData.weight}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-stone-600 ml-1">Work Type</label>
                            <Select name="workType" value={formData.workType} onChange={handleChange} required>
                                <option value="" disabled>Select Activity Level</option>
                                <option value="sedentary">Sedentary (Desk Job)</option>
                                <option value="moderate">Moderate (Standing/Walking)</option>
                                <option value="active">Active (Manual Labor)</option>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-stone-600 ml-1">Main Goal</label>
                            <Select name="goal" value={formData.goal} onChange={handleChange} required>
                                <option value="" disabled>Select Goal</option>
                                <option value="weight-loss">Weight Loss</option>
                                <option value="flexibility">Flexibility & Mobilty</option>
                                <option value="stress-relief">Stress Relief</option>
                                <option value="strength">Strength & Toning</option>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-stone-600 ml-1">Sleep Hours</label>
                            <Input
                                name="sleepHours"
                                type="number"
                                placeholder="Hours/night"
                                value={formData.sleepHours}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="space-y-2 md:col-span-2">
                            <div className="flex justify-between items-center mb-2">
                                <label className="text-sm font-medium text-stone-600 ml-1">Stress Level (1-5)</label>
                                <span className="text-sm font-semibold text-primary">{formData.stressLevel}</span>
                            </div>
                            <input
                                type="range"
                                name="stressLevel"
                                min="1"
                                max="5"
                                step="1"
                                className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
                                value={formData.stressLevel}
                                onChange={handleChange}
                            />
                            <div className="flex justify-between text-xs text-stone-400 px-1">
                                <span>Low</span>
                                <span>High</span>
                            </div>
                        </div>
                    </div>

                    <div className="pt-6">
                        <Button type="submit" className="w-full text-lg h-14 text-black cursor-pointer" variant="primary">
                            Generate My Plan
                        </Button>
                    </div>
                </form>
            </motion.div>
        </main>
    );
}
