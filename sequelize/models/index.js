
const Sequelize = require('sequelize'); //sequelize 패키지를 불러옴
const config = require(__dirname + '/../config/config.json')["development"]; //db 연결 정보
const db = {}; //빈 객체


const sequelize = new Sequelize(config.database, config.username, config.password, config);
//sequelize 객체 생성


// 모델 불러오기
const PlayerModel=require('./Player')(sequelize,Sequelize);
const ProfileModel=require('./Profile')(sequelize,Sequelize);
const TeamModel=require('./Team')(sequelize,Sequelize);


// 모델간 관계 연결
// 1)Player: Profile 1;1
// 하나의 선수 당 하나의 피로필을 가짐


// cascade 옵션: player가 삭제/수정되는 경우 profile도 함께 삭제/업데이트
PlayerModel.hasOne(ProfileModel,{

    onDelete:'CASCADE',
    onUpate:'CASCADE',
    //profileModel에 player_id 이름의 fk 생성
    foreignKey:'player_id',
    //PlayerModel'player_id' 컬럼 참조
    sourceKey:'player_id'

})


ProfileModel.belongsTo(PlayerModel,{
    //ProfileModel에 'player_id' fk 생성
    foreignKey:'player_id',
    // 참조하게 될 PlayerModel의 키는 'player_id'
    targetKey:'player_id'

})


//2) Team : Player =1:N
// 한 팀에는 여러 명의 선수가 존재
TeamModel.hasMany(PlayerModel,{
    // PlayerModel에 'team_id' fk 생성
    foreignKey:'team_id',
    //TeamModel에서 참조될 키가 'team_id'
    sourceKey:'team_id'
})

PlayerModel.belongsTo(TeamModel,{
//  PlayerModel에 'team_id' fk 생성
    foreignKey:'team_id',
    // 참조하게 될 TeamModel의 키는 'Team_id'
    targetKey:'team_id'
})



db.sequelize = sequelize;
db.Sequelize = Sequelize;
// db={sequlize:sequelize, Sequelize:Sequelize}

db.Player= PlayerModel;
// db={sequlize:sequelize, Sequelize:Sequelize, Player:PlayerModel Team:TeamModel, Profile:ProfileModel}
db.Profile= ProfileModel;
db.Team= TeamModel;

module.exports = db;
//db객체를 모듈로 내보내기(-> 다른 파일에서 db 모듈을 사용할 예정)