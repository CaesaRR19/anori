import { Button } from "@components/Button";
import { AnoriPlugin, WidgetRenderProps, WidgetDescriptor } from "@utils/user-data/types";
import './styles.scss';
import { translate } from "@translations/index";
import { useTranslation } from "react-i18next";
import { Icon } from "@components/Icon";
import { useSizeSettings } from "@utils/compact";
import { useState } from "react";
import { WidgetExpandArea } from "@components/WidgetExpandArea";
import { AnimatePresence } from "framer-motion";

type PluginWidgetConfigType = {

};


const MainScreen = ({ config, instanceId }: WidgetRenderProps<PluginWidgetConfigType>) => {
    const { t } = useTranslation();
    const { rem } = useSizeSettings();
    const [showExpandableArea, setShowExpandableArea] = useState(false);

    return (<div className="ExpandableTestWidget" onClick={() => setShowExpandableArea(true)}>
        <Icon icon='logos:google-gmail' height={rem(4)} width={rem(4)} />


        <AnimatePresence>
            {showExpandableArea && <WidgetExpandArea onClose={() => setShowExpandableArea(false)} className="exapnd" closable>
                <h2>Hello here!</h2>
                <Button onClick={() => setShowExpandableArea(false)}>Hide</Button>

                <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga delectus minima optio eos consectetur placeat, quo tempore odit dolorem nostrum maiores, suscipit facere harum blanditiis labore libero minus eligendi ipsam?</span><span>Omnis rerum quis et quaerat asperiores magnam cumque, alias sint ratione porro non vitae iusto numquam est perspiciatis assumenda dignissimos nulla laudantium molestiae consequuntur veniam aut accusantium voluptatem! Cum, magnam!</span></p>
                <p><span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores molestias fugit laboriosam aliquam. Consequatur, corporis alias ex laboriosam officiis, natus porro veritatis temporibus veniam rerum in voluptatibus numquam amet eum.</span><span>Aliquam vero consectetur corporis corrupti nesciunt voluptate ullam! Natus commodi maxime, mollitia, nam non necessitatibus dignissimos hic eveniet a et harum minima fugiat, unde officia repellendus delectus distinctio iure culpa.</span></p>
                <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet debitis commodi quibusdam eaque reiciendis dolore quod laudantium quidem harum. Dolorem reiciendis aliquam nulla perferendis nostrum pariatur aperiam! Impedit, at reiciendis?</span><span>Debitis id ratione quo magnam sunt voluptatem nihil fugit quidem modi, repudiandae veritatis expedita? Quod iusto voluptate illum doloremque reprehenderit eos saepe cumque rerum, dolor aspernatur consequatur ratione quisquam! Rerum.</span></p>
                <p><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quam iusto necessitatibus corporis, libero eius beatae. Hic iste obcaecati quidem illum, accusamus asperiores labore odit delectus? Quos amet facere quo!</span><span>Tenetur in velit, dolorum eius ut quibusdam laudantium vitae expedita amet deleniti laborum? Explicabo, modi. Consequatur dicta iure aspernatur labore necessitatibus quam dolores cum totam repellat saepe, eius harum in!</span></p>
                <p><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nam nobis cupiditate omnis, molestias reprehenderit laudantium non consequuntur natus animi perferendis molestiae ipsam quasi eveniet expedita maxime ducimus distinctio ipsum?</span><span>Nulla tenetur, esse eos voluptatum cumque vitae fugit odit mollitia in incidunt quos praesentium inventore eaque! Veritatis iure nisi facilis exercitationem corrupti soluta, ipsam omnis molestias nulla saepe eos odit.</span></p>
            </WidgetExpandArea>}
        </AnimatePresence>
    </div>);
};

const widgetDescriptor = {
    id: 'widget',
    get name() {
        return translate('blueprint-plugin.widgetName');
    },
    configurationScreen: null,
    mainScreen: MainScreen,
    mock: () => {
        return (<MainScreen instanceId="mock" config={{}} />)
    },
    appearance: {
        size: {
            width: 1,
            height: 1,
        },
        resizable: false,
        withHoverAnimation: true,
        withoutPadding: true,
    }
} as const satisfies WidgetDescriptor<any>;

export const expandableTestPlugin = {
    id: 'expandable-plugin',
    get name() {
        return translate('blueprint-plugin.name');
    },
    widgets: [
        widgetDescriptor,
    ],
    configurationScreen: null,
} satisfies AnoriPlugin;