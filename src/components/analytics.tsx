"use client";
import { useEffect } from "react";
import { track } from "@/lib-firebase";
export function Analytics() { useEffect(() => { void track("landing_view"); }, []); return null; }
