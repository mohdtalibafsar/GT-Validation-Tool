import React from "react";
import "./LeftPanel.css";

const LeftPanel = () => {
  return (
    <div className="leftPanel_container">
      <FirstContainer
        text={"PD Type?"}
        btn1Text="Scored Data"
        btn2Text="Rating Data"
      />
      <FirstContainer
        text={"Data Granularity?"}
        btn1Text="Account Level"
        btn2Text="Group (Bin) Level"
      />
      <div style={{ margin: "10px 0" }}>
        <SecondContainer text={"Select Reference (w/Performance) CSV File"} />
        <SecondContainer text={"Select Validation (w/Performance) CSV File"} />
      </div>
      <div style={{ marginTop: 40 }}>
        {" "}
        <ButtonOne text={"Process Data"} />{" "}
      </div>
      <div style={{ marginTop: 40 }}>
        <ThirdContainer
          heading={"Discriminatory Tests"}
          text1={"KS, Gini & Accuracy Ration"}
          text2={"KS, Gini & Accuracy Ration"}
          text3={"KS, Gini & Accuracy Ration"}
        />
      </div>
      <div className="firstRange">
        <form className="firstRange_form" action="/action_page.php">
          <input
            className="firstRange_range"
            type="range"
            id="vol"
            name="vol"
            min="0"
            max="20"
          />
          <label for="vol">Exclude Outliers For PDO Evaluation?</label>
        </form>
      </div>
      <div className="doublerange_container1">
        <DoubleRangeSlider heading={"KS warning/ Decline Trigger"} />{" "}
        <DoubleRangeSlider heading={"Gini warning/ Decline Trigger"} />{" "}
        <DoubleRangeSlider heading={"KS warning/ Decline Trigger"} />
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: 50,
          justifyContent: "space-between",
        }}>
        <SingleRangeSlider heading={"CIER warning Trigger"} />
        <SingleRangeSlider heading={"KL warning Trigger"} />
        <SingleRangeSlider heading={"IV warning Trigger"} />
      </div>
      <div style={{ marginTop: 40 }}>
        <ThirdContainer
          heading={"Calibration Tests"}
          text1={"Normality Analysis"}
          text2={"KS, Gini & Accuracy Ration"}
          text3={"KS, Gini & Accuracy Ration"}
        />
      </div>
      <div className="thirdContainer_container">
        <h4>Stability Checks</h4>
        <form className="thirdContainer_form" action="/action_page.php">
          <div>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1"> PSI & I-II-II</label>
          </div>
        </form>
      </div>
      <div className="doublerange_container1">
        <DoubleRangeSlider heading={"KS warning/ Decline Trigger"} />{" "}
        <DoubleRangeSlider heading={"KS warning/ Decline Trigger"} />
      </div>
      <div className="firstRange">
        <form className="firstRange_form" action="/action_page.php">
          <input
            className="firstRange_range"
            type="range"
            id="vol"
            name="vol"
            min="0"
            max="20"
          />
          <label for="vol">Include Outliers For PDO Evaluation?</label>
        </form>
      </div>

      <div
        style={{
          marginTop: 40,
        }}>
        <button className="button buttonTow">Generate Report</button>
        <button className="button buttonThree">Download Report</button>
      </div>
    </div>
  );
};

const ButtonOne = ({ text }) => {
  return <button className="buttonOne">{text}</button>;
};

const FirstContainer = ({ text, btn1Text, btn2Text }) => {
  return (
    <div className="radiobtn_container">
      <h4>{text}</h4>
      <div className="radiobtn_btn_container">
        <input
          className="radiobtn_input"
          type="radio"
          id={btn1Text}
          name="fav_language"
          value="JavaScript"
        />
        <label className="radiobtn_label" for="javascript">
          {btn1Text}
        </label>

        <input
          className="radiobtn_input"
          type="radio"
          id={btn2Text}
          name="fav_language"
          value="JavaScript"
        />
        <label className="radiobtn_label" for="javascript">
          {btn2Text}
        </label>
      </div>
    </div>
  );
};

const SecondContainer = ({ text }) => {
  const submithandler = (e) => {
    console.log("hey");
  };
  return (
    <div className="secondContainer_container">
      <h4>{text}</h4>
      <div className="secondContainer_btn_container">
        {/* <button>Browse...</button> */}

        <label onClick={(e) => submithandler(e)} className="button_file">
          Browse..
          <input type="file" />
        </label>
        <input type="text" label="No file selected" value={""} />
      </div>
    </div>
  );
};

const ThirdContainer = ({ heading, text1, text2, text3 }) => {
  return (
    <div className="thirdContainer_container">
      <h4>{heading}</h4>
      <form className="thirdContainer_form" action="/action_page.php">
        <div>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <label for="vehicle1"> {text1}</label>
        </div>

        <div>
          <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
          <label for="vehicle2"> {text2}</label>
        </div>

        <div>
          <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
          <label for="vehicle3"> {text3}</label>
        </div>
      </form>
    </div>
  );
};

const DoubleRangeSlider = ({ heading }) => {
  return (
    <div className="doubleRangeSlider">
      <h4>{heading}</h4>
      <div class="range">
        <div class="range-slider">
          <span class="range-selected"></span>
        </div>
        <div class="range-input">
          <input
            type="range"
            class="min"
            min="0"
            max="1000"
            value="300"
            step="10"
          />
          <input
            type="range"
            class="max"
            min="0"
            max="1000"
            value="700"
            step="10"
          />
        </div>
      </div>
    </div>
  );
};

const SingleRangeSlider = ({ heading }) => {
  return (
    <div className="singleRangeSlider_container">
      <h4>{heading}</h4>
      <form className="singleRangeSlider_form" action="/action_page.php">
        <input
          className="singleRangeSlider_range"
          type="range"
          id="vol"
          name="vol"
          min="0"
          max="20"
        />
        <label for="vol"></label>
      </form>
    </div>
  );
};

export default LeftPanel;
