import React, { Component, CSSProperties } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './Style_Manga_Content.scss';
import { withRouter } from 'react-router';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assets/images/img_homeheader/bg_2.jpg';
import img2 from '../../assets/images/img_homeheader/bg_1.jpg';
import img3 from '../../assets/images/img_homeheader/bg_3.png';
import { useSpeechSynthesis } from "react-speech-kit";
import mobyMP3 from '../../assets/music/fv00jfsywh.mp3';
let soundMP3 = new Audio(mobyMP3);


class NgaoTheDanThan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            highlightedWordIndex: null,
            words: [],
        };
    }

    handleClickSpeak = () => {
        let text = "Giữa bầu trời mây đen nằm dày đặc, thỉnh thoảng sẽ bốc lên một tia chớp, kèm theo từng tiếng sấm rền, một trận mưa lớn sắp xảy ra. Bên trong Ngọa Hổ thành, Trầm Tường ngửa đầu nhìn bầu trời, thì thào nói rằng:  - Không thể kéo dài được nữa, ta phải nhanh chóng tìm được linh dược tốt, bằng không ta khó có thể có cơ hội xoay người.";
        let value = new SpeechSynthesisUtterance(text);
        value.lang = 'vi-VN';
        window.speechSynthesis.speak(value);

    }

    componentDidMount() {
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.playInLoop !== prevState.playInLoop) {
            soundMP3.loop = this.state.playInLoop;
        }
    }
    renderItem = (item, options) => {
        // Logic mặc định khi không có giá trị renderItem được truyền vào
        console.log('Huynh check item: option: ', item, options)
    }
    playSoundMP3 = () => {
        soundMP3.play();
    };

    pauseSoundMP3 = () => {
        soundMP3.pause();
    };

    stopSoundMP3 = () => {
        soundMP3.pause();
        soundMP3.currentTime = 0;
    };

    render() {

        // const { renderItem } = this.props;
        let { words, highlightedWordIndex } = this.state;
        return (
            <React.Fragment>

                {/* <Carousel
                    autoPlay={true}
                    dynamicHeight={true}
                    transitionTime={1.5}
                    showStatus={true}
                    showThumbs={false}
                    interval={4000}
                    infiniteLoop={true}
                >
                    <div>
                        <img src={img1} style={{ objectFit: "cover", width: "1500px", height: "600px" }} />
                    </div>
                    <div>
                        <img src={img2} style={{ objectFit: "cover", width: "1500px", height: "600px" }} />
                    </div>
                    <div>
                        <img src={img3} style={{ objectFit: "cover", width: "1500px", height: "600px" }} />
                    </div>
                    {/* Các mục (items) khác của Carousel */}
            {/* </Carousel> */}

            <div div className = 'container-manga' >
                    <div className='title-manga' >
                        Ngao thế đan thần<br />
                    </div>
                    <p>Chương 1: Địa ngục linh chi</p>
                    <p>Nguồn trích dẫn: truyenfull.vn</p>
                    <div>
                        <h3>Moby Porcelain</h3>
                        <input
                            type='button'
                            className='btn btn-primary mr-2'
                            value='Play'
                            onClick={() => this.playSoundMP3()}
                        />
                        <input
                            type='button'
                            className='btn btn-warning mr-2'
                            value='Pause'
                            onClick={() => this.pauseSoundMP3()}
                        />
                        <input
                            type='button'
                            className='btn btn-danger mr-3'
                            value='Stop'
                            onClick={() => this.stopSoundMP3()}
                        />
                        <label>
                            <input
                                type='checkbox'
                                checked={this.state.playInLoop}
                                onChange={(e) => this.setState({ playInLoop: e.target.checked })}
                            />
                            Loop
                        </label>
                    </div>
                    <div>
                        <button
                            className='btn btn-primary'
                            onClick={() => this.handleClickSpeak()}
                        >
                            Speak
                        </button>
                    </div>

                    <div className='content-manga'
                        style={{ userSelect: 'none' }}
                    >
                        Giữa bầu trời mây đen nằm dày đặc, thỉnh thoảng sẽ bốc lên một tia chớp, kèm theo từng tiếng sấm rền, một trận mưa lớn sắp xảy ra.<br /><br />

                        Bên trong Ngọa Hổ thành, Trầm Tường ngửa đầu nhìn bầu trời, thì thào nói rằng:<br /><br />

                        - Không thể kéo dài được nữa, ta phải nhanh chóng tìm được linh dược tốt, bằng không ta khó có thể có cơ hội xoay người.<br /><br />

                        Năm nay Trầm Tường mười sáu tuổi, thân hình so với bạn cùng lứa tuổi thì cường tráng cao lớn hơn, thân thể này cùng gương mặt tuấn tú mang theo tính trẻ con, nhìn rất là trái ngược, nhưng cặp mắt kia của hắn lại thâm thúy không tương xứng cùng tuổi tác, xem ra nhàn đến muốn thành thục hơn so với bạn cùng lứa tuổi một ít.<br /><br />

                        Lúc này Trầm Tường muốn đi hái thuốc, mặc dù hắn là trưởng tôn tử của Trầm gia tộc, nhưng bởi vì hắn không có linh mạch, không thể trở thành một võ giả lợi hại, bởi vậy, từ nhỏ hắn đã rất chăm chỉ rèn luyện thân thể của mình, thường thường ra ngoài tiến hành các loại huấn luyện bí mật, thậm chí còn tiến hành tranh đấu với Hổ thú, tuy hắn tuổi còn trẻ, nhưng cũng từng có mấy lần trải qua sinh tử, tâm tình cùng ý chí đều hơn xa bạn cùng lứa tuổi.<br /><br />

                        - Đây không phải là Trầm Tường sao? Sắp có mưa to, ngươi còn muốn đi rèn luyện sao?<br /><br />

                        Một lão quản gia đi tới nói, thấy Trầm Tường hăng hái như vậy, hắn không khỏi kính phục, nhưng trong ánh mắt càng nhiều chính là tiếc hận.<br /><br />

                        Mỗi ngày Trầm Tường đều chăm học khổ luyện, đến nay sáu năm, nhưng vẫn dừng lại ở Phàm Võ Cảnh tầng ba, con cháu Trầm gia cùng tuổi với hắn, đại đa số đều tiến vào Phàm Võ Cảnh tầng bốn, lợi hại càng là tiến vào tầng năm.<br /><br />

                        Tất cả những thứ này đều là bởi vì hắn không có linh mạch, cho nên mới không được gia tộc coi trọng, mà bây giờ hắn chỉ là một người rất bình thường bên trong Trầm gia.<br /><br />

                        Tuy không có linh mạch, nhưng xưa nay Trầm Tường chưa bao giờ nhụt chí, vẫn đều đang nỗ lực rèn luyện chính mình, chí ít trong quá trình nỗ lực để hắn cảm giác mình rất phong phú.<br /><br />

                        - Lão Mã, ta là đi hái thuốc.<br /><br />

                        Trầm Tường chạy đến phía sau lão quản gia, cười cợt nói chuyện với hắn.<br /><br />

                        - Vô dụng thôi, ngươi không có linh mạch, bất kể nỗ lực thế nào đều là không làm nên chuyện gì!<br /><br />

                        Lão quản gia kia lắc đầu than thở.<br /><br />

                        Đối với lời như vậy, Trầm Tường nghe qua vô số lần, nhưng hắn vẫn kiên trì như cũ, dù như thế nào hắn cũng sẽ không bỏ qua.<br /><br />

                        - Tường nhi, khí trời như vậy cũng đừng đi nữa!<br /><br />

                        Lúc này, một nam tử trung niên đi tới.<br /><br />

                        Trầm Tường bĩu môi, nói rằng:<br /><br />

                        - Cha, trời mưa xuống hái thuốc là một thời cơ tốt, chí ít không cần cướp đến bể đầu chảy máu cùng người khác.<br /><br />

                        Người đàn ông trung niên này tên là Trầm Thiên Hổ, là phụ thân của Trầm Tường, là một võ giả cường đại danh chấn một phương, cũng là người có hy vọng kế thừa Trầm gia tộc trưởng đời kế tiếp nhất, tuy con trai hắn không có linh mạch, nhưng hắn vẫn cổ vũ Trầm Tường, vẫn thỉnh thoảng cho hắn một ít đan dược trân quý, chỉ bất quá vẫn là không làm nên chuyện gì.<br /><br />

                        - Cầm.<br /><br />

                        Trầm Thiên Hổ bất đắc dĩ nở nụ cười, vứt cho Trầm Tường một cái hộp nhỏ.<br /><br />

                        Trầm Tường tiếp nhận cái hộp, cũng không thèm nhìn tới đồ vật bên trong, hắn biết bên trong là đan dược, cười cợt nói:<br /><br />

                        - Đa tạ cha, như vậy ta cũng không cần đi trộm những con gà này của Mã lão đầu để bổ dưỡng thân thể.<br /><br />

                        Điều này làm cho Mã quản gia kia mặt đầy cay đắng, hắn không nghĩ tới mình dĩ nhiên bị nhìn chằm chằm.<br /><br />

                        Nhìn bóng lưng Trầm Tường biến mất, Trầm Thiên Hổ chỉ có thể thở dài, tuy hắn ở Trầm gia có địa vị rất cao, nhưng Trầm gia trưởng lão quản lý đối với những đan dược trân quý hi hữu này rất nghiêm khắc, hắn chỉ có thể lấy của bản thân cho Trầm Tường, nhưng cái này cũng không có tác dụng gì, bởi vì đan dược quá ít.<br /><br />

                        Làm cha, cái nào không hy vọng nhi tử thành Long? Chỉ bất quá Trầm Thiên Hổ cũng không có cách nào, hắn chỉ có thể làm hết sức, tranh thủ đan dược cho Trầm Tường.<br /><br />

                        ...<br /><br />

                        Tiên Ma Nhai, đó là một địa phương phi thường hoang vu, giờ khắc này trên vách núi cheo leo có một thiếu niên ở trần leo lên.<br /><br />


                        Lúc này rơi xuống mưa rào tầm tã, nhưng Trầm Tường leo núi như vậy, đây là một chuyện vô cùng nguy hiểm, phải biết vách núi bên dưới Tiên Ma Nhai này là sâu không thấy đáy, hơn nữa phía dưới quanh năm tràn ngập một loại khí tức mang theo tử vong, vì lẽ đó rất nhiều người đều không muốn tới gần địa phương này.<br /><br />

                        Nhưng Trầm Tường tới nơi này hái thuốc, còn leo lên trên vách đá, chậm rãi đi xuống phía dưới, nếu để cho người khác biết, nhất định sẽ cười hắn là một kẻ không muốn sống, ai cũng biết loại địa phương chim không thèm ị này, tử khí dày đặc là chắc chắn sẽ không có linh dược tốt gì.<br /><br />

                        Trầm Tường không những không ngốc, mà còn rất thông minh, hắn biết Tiên Ma Nhai này tồn tại rất nhiều năm, đặc biệt là những tử khí này phía dưới, càng là không ai biết tồn tại bao nhiêu năm.<br /><br />

                        Ở bên trong nhận thức của người thường, địa phương không hề có sinh khí là không có linh dược, mà Trầm Tường lại không cho là như vậy, đạo lý vật cực tất phản hắn cũng biết, hắn khẳng định chắc chắn trên vách đá này nhất định có một loại linh dược trân quý trong truyền thuyết.<br /><br />

                        Địa Ngục Linh Chi, loại linh dược này nghe tới rất đáng sợ, nhưng là một loại linh dược có hiệu quả tẩy kinh phạt tủy, bình thường sinh trưởng ở cổ chiến trường, bãi tha ma,… những địa phương có tử khí dày đặt, là một loại kỳ dược.<br /><br />

                        Ngày mưa có thể làm cho một ít hắc khí trầm xuống, như vậy Trầm Tường liền có thể thấy rõ một ít vách đá sâu, hắn liền đi đến địa phương sâu phía dưới, như vậy hắn liền có thể tìm tới Địa Ngục Linh Chi kia.<br /><br />

                        Tuy rằng hắn không cần Địa Ngục Linh Chi, nhưng sau khi hắn đạt được thánh dược này, cũng tuyệt đối có thể đổi đến rất nhiều đan dược trân quý, có thể làm cho hắn thoát khỏi quẫn cảnh, nắm giữ thực lực cường đại.<br /><br />

                        Hạt mưa đánh vào trên người Trầm Tường, làm hắn cảm thấy rất không thoải mái, đồng thời cũng làm cho nham thạch trên vách đá trở nên lỏng lẻo. Điều này làm cho hắn càng cẩn thận hơn, cẩn thận từng li từng tí một từ trên vách đá leo xuống, bằng không không cẩn thận hắn sẽ té xuống.<br /><br />

                        Không ai biết bên dưới vách núi Tiên Ma có cái gì, tuy người xuống qua cũng có không ít, nhưng có thể đi lên lại một cái cũng không có, ngã xuống liền mang ý nghĩa sẽ chết!<br /><br />

                        Hai canh giờ trôi qua, mưa to vẫn còn tiếp tục, Trầm Tường bằng vào thân thể cường tráng hắn nhiều năm rèn luyện, xuống tới mấy chục trượng sâu trong vách đá.<br /><br />

                        Trầm Tường tìm được một nơi đặt chân tốt hơn, lúc này hắn tỉ mỉ quan sát phía dưới, đột nhiên, hắn nhìn thấy những thứ gì, điều này làm cho hắn kích động đến trái tim nhảy lên kịch liệt.<br /><br />

                        - Địa Ngục Linh Chi!<br /><br />

                        Trầm Tường hưng phấn hô một tiếng, ánh mắt kích động nhìn chăm chú phía dưới, địa phương ở dưới chân hắn chừng mười trượng có một đồ vật giống như đại bính màu trắng kề sát vách đá, hắn phi thường khẳng định đây chính là Địa Ngục Linh Chi trong truyền thuyết.<br /><br />

                        Nơi này quanh năm đều bị tử khí màu đen che lấp, mà màu sắc của Địa Ngục Linh Chi phi thường tương tự cùng vách đá, rất khó phát hiện.<br /><br />

                        Trầm Tường hưng phấn không thôi, hắn làm cho mình trấn định lại, nghỉ ngơi chốc lát, mới chầm chậm leo xuống phía dưới.<br /><br />

                        Không bao lâu, Trầm Tường liền đến bên cạnh cây Địa Ngục Linh Chi kia, hắn nuốt nuốt nước miếng, nhìn cây Địa Ngục Linh Chi màu trắng to bằng chậu rửa mặt kia, bây giờ hắn còn có thể cảm nhận được Địa Ngục Linh Chi kia tản mát ra sinh mệnh lực dồi dào.<br /><br />

                        Trầm Tường chỉ có thể dùng một tay đi hái cây Địa Ngục Linh Chi này, hắn phỏng chừng đây là Địa Ngục Linh Chi ngàn năm trở lên, cầm bán đấu giá, là một con số trên trời.<br /><br />
                        <center>
                            <p>xem full truyện tại</p>
                            <a href='https://truyenfull.vn/ngao-the-dan-than/chuong-2/'>https://truyenfull.vn/ngao-the-dan-than/chuong-2/</a>
                        </center>

                    </div>

                </div >

            {/* Bình luận */ }

            </React.Fragment >

        );
    }

}

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NgaoTheDanThan));
