import React from 'react';
import { IDefinition } from '../../interface/IDefinition';

interface GlossaryProps {
  glossary: IDefinition[]
}

export const Glossary: React.FC<GlossaryProps> = ({
  glossary
}) => {
  return (
    <div className="flex flex-wrap mt-[50px] ml-[7px]">
      {glossary.map(definition =>
        <div className="w-[calc(25%-7px)] h-[150px] rounded-xl border-amber-800 border-2 mt-[7px] mr-[7px]">
          <div className="flex justify-center font-bold text-sm">
            {definition.name}
          </div>
          <div className="ml-[7px] text-sm mr-[7px] font-mono">
            {definition.meaning}
          </div>
        </div>)}
    </div>
  );
};


