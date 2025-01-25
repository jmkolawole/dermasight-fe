import {colors} from '../..';
import * as S from './Colors.style';

export const Colors = () => {
  const copyColor = (colorText) => {
    navigator.clipboard.writeText(colorText);
  };

  return (
    <S.ColorsContainer>
      <h2>Colours</h2>
      <p>Click on any of the colors to copy</p>

      {Object.entries(colors).map((entry, i) => (
        <div key={i}>
          <h3>{entry[0]}</h3>
          <S.ColorGroup key={i}>
            {Object.entries(entry[1]).map((color, i) => (
              <S.Color
                key={i}
                $color={color[1]}
                title="Click to copy color"
                onClick={() => copyColor(`colors.${entry[0]}[${color[0]}]`)}
              >
                <p>
                  {color[0]}: {color[1]}
                </p>
              </S.Color>
            ))}
          </S.ColorGroup>
        </div>
      ))}
    </S.ColorsContainer>
  );
};
