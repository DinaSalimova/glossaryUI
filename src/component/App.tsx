import { Navigation } from "./navigation/Navigation";
import { Navigate, Route, Routes } from "react-router-dom";
import { MindMap } from "./mind-map/MindMap";
import { Glossary } from "./glossary/Glossary";
import { glossary } from "../data/glossary";
import { mindMap } from "../data/mind-map";

export function App() {
  return (
    <div className="flex flex-col w-full h-full">
      <Navigation/>

      <Routes>
        <Route path="/" element={<Navigate to="/glossary"/>}/>
        <Route path="/mind-map" element={<MindMap mindMap={mindMap}/>}/>
        <Route path="/glossary" element={<Glossary glossary={glossary}/>}/>
      </Routes>
    </div>
  )
}